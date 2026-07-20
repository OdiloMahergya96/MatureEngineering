import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-signal text-white hover:bg-signal-dark",
  secondary: "bg-blueprint text-white hover:bg-blueprint-dark",
  ghost: "bg-transparent text-ink hover:bg-surface dark:text-ink-dark dark:hover:bg-surface-dark",
  outline: "border border-graphite/30 text-ink hover:border-blueprint hover:text-blueprint dark:text-ink-dark dark:border-white/20",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
}

interface ButtonAsButton extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: undefined;
  children: React.ReactNode;
}

interface ButtonAsLink extends CommonProps {
  href: string;
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200",
    variants[variant],
    sizes[size],
    className
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
