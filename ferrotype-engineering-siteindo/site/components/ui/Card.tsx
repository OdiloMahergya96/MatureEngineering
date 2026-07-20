import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "corner-marks rounded-2xl border border-graphite/10 bg-white p-8 text-blueprint transition-shadow duration-300 hover:shadow-lg hover:shadow-blueprint/5 dark:border-white/10 dark:bg-graphite-dark dark:text-blueprint-light",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("spec-label rounded-full border border-blueprint/20 px-3 py-1 dark:border-blueprint-light/30", className)}>
      {children}
    </span>
  );
}

export function SpecRow({ index, total, label }: { index: number; total: number; label: string }) {
  return (
    <div className="spec-label flex items-center gap-2 text-graphite/60 dark:text-white/40">
      <span>{String(index).padStart(2, "0")}/{String(total).padStart(2, "0")}</span>
      <span className="h-px w-6 bg-current opacity-40" />
      <span>{label}</span>
    </div>
  );
}
