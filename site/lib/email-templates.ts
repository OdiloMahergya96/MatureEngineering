import type { ContactFormValues } from "@/lib/validation";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function contactNotificationEmail(data: ContactFormValues) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Company", data.company],
    ["Email", data.email],
    ["Phone", data.phone],
    ["WhatsApp", data.whatsapp || "—"],
    ["Project Type", data.projectType],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;color:#4A5057;font-size:13px;">${escapeHtml(label)}</td><td style="padding:6px 12px;font-size:13px;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#1B4D6B;">New Quotation Request</h2>
      <table style="border-collapse:collapse;width:100%;">${rowsHtml}</table>
      <p style="margin-top:16px;color:#4A5057;font-size:13px;">Message</p>
      <p style="white-space:pre-wrap;font-size:14px;border-left:3px solid #E8622C;padding-left:12px;">${escapeHtml(data.message)}</p>
    </div>
  `;
}

export function resourceNotificationEmail(email: string, resourceTitle: string) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#1B4D6B;">New Resource Download Lead</h2>
      <p style="font-size:14px;">${escapeHtml(email)} requested: <strong>${escapeHtml(resourceTitle)}</strong></p>
    </div>
  `;
}

export function resourceConfirmationEmail(resourceTitle: string) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#1B4D6B;">Your ${escapeHtml(resourceTitle)} is on its way</h2>
      <p style="font-size:14px;color:#2B2F33;">
        Thanks for your interest. Our team will send the full guide to this inbox shortly. In the meantime, feel
        free to reply to this email with any specific engineering question.
      </p>
    </div>
  `;
}
