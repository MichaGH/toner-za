// Jednoduchá line-art ilustrácia multifunkčného zariadenia.
export function PrinterIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      {/* horný skener / podávač */}
      <rect x="26" y="16" width="68" height="14" rx="3" stroke="currentColor" strokeWidth="3" />
      {/* telo */}
      <rect x="20" y="34" width="80" height="40" rx="4" stroke="currentColor" strokeWidth="3" />
      {/* ovládací panel */}
      <rect x="30" y="42" width="22" height="10" rx="2" stroke="currentColor" strokeWidth="3" />
      <circle cx="84" cy="47" r="4" stroke="currentColor" strokeWidth="3" />
      {/* výstup papiera */}
      <path d="M40 74v8h40v-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <rect x="46" y="64" width="28" height="14" rx="1.5" fill="currentColor" opacity="0.18" />
      {/* spodné zásobníky */}
      <rect x="28" y="86" width="64" height="10" rx="2" stroke="currentColor" strokeWidth="3" />
      <rect x="28" y="100" width="64" height="10" rx="2" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
