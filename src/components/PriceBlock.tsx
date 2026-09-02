import { useLanguage } from "../lib/LanguageContext";
import { useCurrency } from "../lib/CurrencyContext";
import { CurrencySelector } from "./CurrencySelector";

interface PriceBlockProps {
  priceJPY: number;
  variant?: "compact" | "detail";
  className?: string;
}

export function PriceBlock({ priceJPY, variant = "compact", className = "" }: PriceBlockProps) {
  const { t } = useLanguage();
  const { currency, convertJPYtoUSD, formatJPY, formatUSD, rateStatus, rateUpdatedAt } = useCurrency();

  const usdValue = convertJPYtoUSD(priceJPY);
  const showUSD = currency === "USD" && usdValue != null;

  const primaryText = showUSD ? formatUSD(usdValue as number) : formatJPY(priceJPY);
  const secondaryText = showUSD
    ? formatJPY(priceJPY)
    : usdValue != null
    ? formatUSD(usdValue)
    : null;

  if (variant === "compact") {
    return (
      <div className={`flex flex-col gap-0.5 ${className}`}>
        <span className="font-headline-md text-lg text-primary font-medium">{primaryText}</span>
        {secondaryText && (
          <span className="font-body-md text-xs text-on-surface-variant">
            {t("currency.approx")} {secondaryText}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`rounded-xl border border-outline-variant bg-surface-container-lowest p-6 md:p-8 flex flex-col gap-4 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <span className="font-label-caps text-xs text-[#FFA601] uppercase tracking-widest">
          {t("price.label")}
        </span>
        <CurrencySelector />
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-headline-lg text-2xl md:text-3xl text-primary font-medium">{primaryText}</span>
        {secondaryText && (
          <span className="font-body-md text-sm text-on-surface-variant">
            {t("currency.approx")} {secondaryText}
          </span>
        )}
      </div>

      <p className="font-body-md text-xs text-on-surface-variant/80 leading-relaxed">
        {t("currency.disclaimer")}
      </p>

      {rateStatus === "unavailable" ? (
        <span className="font-label-caps text-[11px] text-on-surface-variant/70">
          {t("currency.unavailable")}
        </span>
      ) : rateUpdatedAt ? (
        <span className="font-label-caps text-[11px] text-on-surface-variant/70">
          {rateStatus === "cached" ? t("currency.updated_cached") : t("currency.updated")}: {rateUpdatedAt}
        </span>
      ) : null}
    </div>
  );
}
