// Logo TONER-ZA: modrý nápis "TONER", tri červené bodky (vrcholy trojuholníka) a "ZA".
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-1.5 text-xl font-extrabold tracking-tight">
      <span className={light ? "text-white" : "text-primary-700"}>TONER</span>
      <svg viewBox="0 0 18 18" className="h-4 w-4" aria-hidden="true">
        <circle cx="9" cy="3" r="2.4" className="fill-accent-500" />
        <circle cx="3" cy="14" r="2.4" className="fill-accent-500" />
        <circle cx="15" cy="14" r="2.4" className="fill-accent-500" />
      </svg>
      <span className={light ? "text-white" : "text-ink"}>ZA</span>
    </span>
  );
}
