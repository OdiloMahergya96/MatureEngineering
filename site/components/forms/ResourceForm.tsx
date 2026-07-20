"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

export function ResourceForm({ resourceTitle, className }: { resourceTitle: string; className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    // In production this posts to /api/resources (email provider / CRM integration)
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p className={cn("text-sm font-medium text-blueprint dark:text-blueprint-light", className)}>
        Check your inbox — the {resourceTitle} is on its way.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex gap-2", className)}>
      <input
        type="email"
        required
        placeholder="Work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full min-w-0 rounded-lg border border-graphite/20 bg-white px-3 py-2 text-sm text-ink focus:border-blueprint focus:outline-none dark:border-white/15 dark:bg-graphite-dark dark:text-ink-dark"
      />
      <button
        type="submit"
        aria-label={`Download ${resourceTitle}`}
        className="flex shrink-0 items-center gap-1 rounded-lg bg-signal px-3 py-2 text-sm font-medium text-white hover:bg-signal-dark"
      >
        <Download className="h-4 w-4" />
      </button>
    </form>
  );
}
