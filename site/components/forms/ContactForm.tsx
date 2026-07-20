"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, projectTypes, type ContactFormValues } from "@/lib/validation";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Paperclip, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) });

  async function onSubmit(data: ContactFormValues) {
    // In production this posts to /api/contact, which forwards to email/CRM.
    await new Promise((r) => setTimeout(r, 600));
    console.log("Contact form submission", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-graphite/10 bg-white p-10 text-center dark:border-white/10 dark:bg-graphite-dark">
        <CheckCircle2 className="mx-auto h-10 w-10 text-blueprint dark:text-blueprint-light" />
        <h3 className="mt-4 font-display text-xl font-semibold text-graphite dark:text-white">Request received</h3>
        <p className="mt-2 text-sm text-graphite/60 dark:text-white/50">
          An engineer will review your request and respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-2xl border border-graphite/10 bg-white p-8 dark:border-white/10 dark:bg-graphite-dark">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input placeholder="Full name" {...register("name")} error={errors.name?.message} />
        <Input placeholder="Company" {...register("company")} error={errors.company?.message} />
        <Input type="email" placeholder="Work email" {...register("email")} error={errors.email?.message} />
        <Input placeholder="Phone number" {...register("phone")} error={errors.phone?.message} />
        <Input placeholder="WhatsApp (optional)" {...register("whatsapp")} error={errors.whatsapp?.message} />
        <select
          {...register("projectType")}
          className="w-full rounded-lg border border-graphite/20 bg-white px-4 py-3 text-sm text-ink focus:border-blueprint focus:outline-none dark:border-white/15 dark:bg-graphite-dark dark:text-ink-dark"
          defaultValue=""
        >
          <option value="" disabled>Project type</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {errors.projectType && <p className="text-xs text-signal">{errors.projectType.message}</p>}

      <Textarea placeholder="Describe your engineering problem or project" {...register("message")} error={errors.message?.message} />

      <div>
        <label className="flex cursor-pointer items-center gap-2 text-sm text-graphite/60 hover:text-blueprint dark:text-white/50 dark:hover:text-blueprint-light">
          <Paperclip className="h-4 w-4" />
          {fileName || "Attach a drawing or spec (optional)"}
          <input type="file" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || null)} />
        </label>
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Request Quotation"}
      </Button>
    </form>
  );
}
