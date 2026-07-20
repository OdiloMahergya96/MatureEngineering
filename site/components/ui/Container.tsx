import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  id,
  tone = "canvas",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "canvas" | "surface" | "graphite";
}) {
  const tones = {
    canvas: "bg-canvas dark:bg-canvas-dark",
    surface: "bg-surface dark:bg-surface-dark",
    graphite: "bg-graphite text-white dark:bg-graphite-dark",
  };
  return (
    <section id={id} className={cn("py-20 md:py-28", tones[tone], className)}>
      {children}
    </section>
  );
}
