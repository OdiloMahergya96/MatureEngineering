"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-graphite/10 bg-canvas/90 backdrop-blur dark:border-white/10 dark:bg-canvas-dark/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-blueprint dark:text-blueprint-light">
          {siteConfig.shortName}
          <span className="text-signal">.</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-graphite hover:text-blueprint dark:text-white/70 dark:hover:text-blueprint-light"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="/contact" size="sm">Request Quotation</Button>
        </div>

        <button
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-graphite/10 px-6 py-4 lg:hidden dark:border-white/10">
          <nav className="flex flex-col gap-4">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium text-graphite dark:text-white/70">
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle />
              <Button href="/contact" size="sm">Request Quotation</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
