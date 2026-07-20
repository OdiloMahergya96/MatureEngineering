import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { error?: string }>(
  ({ className, error, ...props }, ref) => (
    <div>
      <input
        ref={ref}
        className={cn(
          "w-full rounded-lg border border-graphite/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-graphite/40 focus:border-blueprint focus:outline-none dark:border-white/15 dark:bg-graphite-dark dark:text-ink-dark",
          error && "border-signal",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-signal">{error}</p>}
    </div>
  )
);
Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }>(
  ({ className, error, ...props }, ref) => (
    <div>
      <textarea
        ref={ref}
        rows={5}
        className={cn(
          "w-full rounded-lg border border-graphite/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-graphite/40 focus:border-blueprint focus:outline-none dark:border-white/15 dark:bg-graphite-dark dark:text-ink-dark",
          error && "border-signal",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-signal">{error}</p>}
    </div>
  )
);
Textarea.displayName = "Textarea";
