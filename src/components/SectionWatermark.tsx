export function SectionWatermark({ text }: { text: string }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none select-none absolute -top-2 md:-top-8 left-0 z-0 font-display-lg text-[40px] md:text-[110px] leading-none text-primary/[0.04] uppercase tracking-tighter whitespace-nowrap"
    >
      {text}
    </span>
  );
}
