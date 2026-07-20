import { NextResponse } from "next/server";
import { z } from "zod";
import { getResendClient } from "@/lib/resend";
import { resourceNotificationEmail, resourceConfirmationEmail } from "@/lib/email-templates";
import { resources } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const schema = z.object({
  email: z.string().email("Email tidak valid"),
  resourceSlug: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Data tidak valid" }, { status: 400 });
    }

    const resource = resources.find((r) => r.slug === parsed.data.resourceSlug);
    if (!resource) {
      return NextResponse.json({ error: "Resource tidak ditemukan" }, { status: 404 });
    }

    const resend = getResendClient();
    if (!resend) {
      console.error("RESEND_API_KEY belum diatur — email tidak terkirim.", parsed.data);
      return NextResponse.json(
        { error: "Layanan email belum dikonfigurasi. Silakan hubungi kami langsung." },
        { status: 503 }
      );
    }

    const fromDomain = new URL(siteConfig.url).hostname;

    await resend.emails.send({
      from: `Ferrotype Engineering <notifikasi@${fromDomain}>`,
      to: process.env.CONTACT_TO_EMAIL || siteConfig.email,
      subject: `Lead baru — ${resource.title}`,
      html: resourceNotificationEmail(parsed.data.email, resource.title),
    });

    await resend.emails.send({
      from: `Ferrotype Engineering <hello@${fromDomain}>`,
      to: parsed.data.email,
      subject: `${resource.title} — Ferrotype Engineering`,
      html: resourceConfirmationEmail(resource.title),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resource form error:", err);
    return NextResponse.json({ error: "Terjadi kesalahan. Silakan coba lagi." }, { status: 500 });
  }
}
