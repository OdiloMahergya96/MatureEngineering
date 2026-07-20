"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

export function ResourceForm({
  resourceTitle,
  resourceSlug,
  className,
}: {
  resourceTitle: string;
  resourceSlug: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "submitted" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, resourceSlug }),
      });
      const result = await res.json();
      if (!res.ok) {
        setError(result.error || "Terjadi kesalahan. Silakan coba lagi.");
        setStatus("error");
        return;
      }
      setStatus("submitted");
    } catch {
      setError("Gagal mengirim. Periksa koneksi internet Anda.");
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <p className={cn("text-sm font-medium text-blueprint dark:text-blueprint-light", className)}>
        Cek inbox Anda — {resourceTitle} sedang dalam perjalanan.
      </p>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          placeholder="Email kerja"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full min-w-0 rounded-lg border border-graphite/20 bg-white px-3 py-2 text-sm text-ink focus:border-blueprint focus:outline-none dark:border-white/15 dark:bg-graphite-dark dark:text-ink-dark"
        />
        <button
          type="submit"
          aria-label={`Unduh ${resourceTitle}`}
          disabled={status === "loading"}
          className="flex shrink-0 items-center gap-1 rounded-lg bg-signal px-3 py-2 text-sm font-medium text-white hover:bg-signal-dark disabled:opacity-60"
        >
          <Download className="h-4 w-4" />
        </button>
      </form>
      {status === "error" && error && <p className="mt-2 text-xs text-signal">{error}</p>}
    </div>
  );
}
