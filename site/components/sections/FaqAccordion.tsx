"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-graphite/10 dark:divide-white/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="py-5">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-display text-base font-medium text-graphite dark:text-white">{item.question}</span>
              <ChevronDown className={cn("h-5 w-5 shrink-0 text-blueprint transition-transform dark:text-blueprint-light", isOpen && "rotate-180")} />
            </button>
            {isOpen && <p className="mt-3 text-sm text-graphite/60 dark:text-white/50">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
