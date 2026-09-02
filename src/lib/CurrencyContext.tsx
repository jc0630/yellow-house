import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Currency = "JPY" | "USD";
type RateStatus = "loading" | "live" | "cached" | "unavailable";

interface RateCache {
  rate: number;
  updatedAt: string; // ISO date the rate was fetched
}

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  rate: number | null; // USD per 1 JPY
  rateStatus: RateStatus;
  rateUpdatedAt: string | null;
  convertJPYtoUSD: (jpy: number) => number | null;
  formatJPY: (jpy: number) => string;
  formatUSD: (usd: number) => string;
}

const CURRENCY_STORAGE_KEY = "yh_currency";
const RATE_CACHE_KEY = "yh_exchange_rate_cache";
const RATE_ENDPOINT = "https://open.er-api.com/v6/latest/JPY";
const FETCH_TIMEOUT_MS = 6000;

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "JPY",
  setCurrency: () => {},
  rate: null,
  rateStatus: "loading",
  rateUpdatedAt: null,
  convertJPYtoUSD: () => null,
  formatJPY: (jpy) => `¥${Math.round(jpy).toLocaleString("en-US")}`,
  formatUSD: (usd) => `US$${Math.round(usd).toLocaleString("en-US")}`,
});

function readRateCache(): RateCache | null {
  try {
    const raw = localStorage.getItem(RATE_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed.rate === "number" && typeof parsed.updatedAt === "string") {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

function writeRateCache(cache: RateCache) {
  try {
    localStorage.setItem(RATE_CACHE_KEY, JSON.stringify(cache));
  } catch {
    // localStorage unavailable (private mode, quota, etc.) — safe to ignore
  }
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("JPY");
  const [rate, setRate] = useState<number | null>(null);
  const [rateUpdatedAt, setRateUpdatedAt] = useState<string | null>(null);
  const [rateStatus, setRateStatus] = useState<RateStatus>("loading");

  // Restore saved currency preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CURRENCY_STORAGE_KEY);
      if (saved === "JPY" || saved === "USD") setCurrencyState(saved);
    } catch {
      // ignore
    }
  }, []);

  // Load cached rate immediately, then attempt a fresh fetch (once, shared app-wide)
  useEffect(() => {
    const cached = readRateCache();
    if (cached) {
      setRate(cached.rate);
      setRateUpdatedAt(cached.updatedAt);
      setRateStatus("cached");
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    fetch(RATE_ENDPOINT, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Exchange rate request failed: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const usdRate = data?.rates?.USD;
        if (data?.result !== "success" || typeof usdRate !== "number") {
          throw new Error("Malformed exchange rate response");
        }
        const updatedAt = new Date().toISOString().slice(0, 10);
        setRate(usdRate);
        setRateUpdatedAt(updatedAt);
        setRateStatus("live");
        writeRateCache({ rate: usdRate, updatedAt });
      })
      .catch(() => {
        // Network error, timeout, rate limit, or bad payload: fall back silently.
        setRateStatus(cached ? "cached" : "unavailable");
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, c);
    } catch {
      // ignore
    }
  };

  const value = useMemo<CurrencyContextType>(() => {
    const convertJPYtoUSD = (jpy: number) => (rate != null ? jpy * rate : null);
    const formatJPY = (jpy: number) => `¥${Math.round(jpy).toLocaleString("en-US")}`;
    const formatUSD = (usd: number) => `US$${Math.round(usd).toLocaleString("en-US")}`;
    return {
      currency,
      setCurrency,
      rate,
      rateStatus,
      rateUpdatedAt,
      convertJPYtoUSD,
      formatJPY,
      formatUSD,
    };
  }, [currency, rate, rateStatus, rateUpdatedAt]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
