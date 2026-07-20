import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { getResendClient } from "@/lib/resend";
import { contactNotificationEmail } from "@/lib/email-templates";
import { siteConfig } from "@/lib/site";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const raw = {
      name: formData.get("name")?.toString() || "",
      company: formData.get("company")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      whatsapp: formData.get("whatsapp")?.toString() || "",
      projectType: formData.get("projectType")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    const parsed = contactFormSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json({ error: "Data tidak valid", issues: parsed.error.flatten() }, { status: 400 });
    }

    const resend = getResendClient();
    if (!resend) {
      console.error("RESEND_API_KEY belum diatur — email tidak terkirim.", parsed.data);
      return NextResponse.json(
        { error: "Layanan email belum dikonfigurasi. Silakan hubungi kami langsung via WhatsApp/email." },
        { status: 503 }
      );
    }

    const file = formData.get("attachment");
    const attachments =
      file instanceof File && file.size > 0
        ? [{ filename: file.name, content: Buffer.from(await file.arrayBuffer()) }]
        : undefined;

    await resend.emails.send({
      from: `Ferrotype Engineering Website <notifikasi@${new URL(siteConfig.url).hostname}>`,
      to: process.env.CONTACT_TO_EMAIL || siteConfig.email,
      replyTo: parsed.data.email,
      subject: `Permintaan Penawaran Baru — ${parsed.data.company}`,
      html: contactNotificationEmail(parsed.data),
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Terjadi kesalahan. Silakan coba lagi." }, { status: 500 });
  }
}
