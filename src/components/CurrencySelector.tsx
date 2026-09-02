import { useCurrency } from "../lib/CurrencyContext";

export function CurrencySelector({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={`inline-flex items-center bg-surface-container-low rounded-full p-1 gap-1 border border-outline-variant ${className}`}
    >
      {(["JPY", "USD"] as const).map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => setCurrency(c)}
          aria-pressed={currency === c}
          className={`rounded-full px-3 py-1 text-xs font-label-caps tracking-wider transition-colors cursor-pointer ${
            currency === c
              ? "bg-primary text-white"
              : "text-on-surface-variant hover:text-primary"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
