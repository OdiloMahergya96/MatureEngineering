"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, projectTypes, type ContactFormValues } from "@/lib/validation";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Paperclip, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) });

  async function onSubmit(data: ContactFormValues) {
    setServerError(null);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => formData.append(key, value ?? ""));
      if (file) formData.append("attachment", file);

      const res = await fetch("/api/contact", { method: "POST", body: formData });
      const result = await res.json();

      if (!res.ok) {
        setServerError(result.error || "Terjadi kesalahan. Silakan coba lagi.");
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError("Gagal mengirim. Periksa koneksi internet Anda dan coba lagi.");
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-graphite/10 bg-white p-10 text-center dark:border-white/10 dark:bg-graphite-dark">
        <CheckCircle2 className="mx-auto h-10 w-10 text-blueprint dark:text-blueprint-light" />
        <h3 className="mt-4 font-display text-xl font-semibold text-graphite dark:text-white">Permintaan diterima</h3>
        <p className="mt-2 text-sm text-graphite/60 dark:text-white/50">
          Seorang engineer akan meninjau permintaan Anda dan merespons dalam 24 jam.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-2xl border border-graphite/10 bg-white p-8 dark:border-white/10 dark:bg-graphite-dark">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input placeholder="Nama lengkap" {...register("name")} error={errors.name?.message} />
        <Input placeholder="Nama perusahaan" {...register("company")} error={errors.company?.message} />
        <Input type="email" placeholder="Email kerja" {...register("email")} error={errors.email?.message} />
        <Input placeholder="Nomor telepon" {...register("phone")} error={errors.phone?.message} />
        <Input placeholder="WhatsApp (opsional)" {...register("whatsapp")} error={errors.whatsapp?.message} />
        <select
          {...register("projectType")}
          className="w-full rounded-lg border border-graphite/20 bg-white px-4 py-3 text-sm text-ink focus:border-blueprint focus:outline-none dark:border-white/15 dark:bg-graphite-dark dark:text-ink-dark"
          defaultValue=""
        >
          <option value="" disabled>Jenis proyek</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {errors.projectType && <p className="text-xs text-signal">{errors.projectType.message}</p>}

      <Textarea placeholder="Ceritakan masalah engineering atau proyek Anda" {...register("message")} error={errors.message?.message} />

      <div>
        <label className="flex cursor-pointer items-center gap-2 text-sm text-graphite/60 hover:text-blueprint dark:text-white/50 dark:hover:text-blueprint-light">
          <Paperclip className="h-4 w-4" />
          {fileName || "Lampirkan gambar atau spec (opsional)"}
          <input
            type="file"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0] || null;
              setFile(f);
              setFileName(f?.name || null);
            }}
          />
        </label>
      </div>

      {serverError && (
        <p className="flex items-center gap-2 text-sm text-signal">
          <AlertCircle className="h-4 w-4 shrink-0" /> {serverError}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? "Mengirim…" : "Minta Penawaran"}
      </Button>
    </form>
  );
}
