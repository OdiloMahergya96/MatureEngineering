import { Resend } from "resend";

let client: Resend | null = null;

/**
 * Returns a configured Resend client, or null if RESEND_API_KEY is not set.
 * Kept lazy so the app builds/runs fine before the API key is configured —
 * routes should check for null and respond with a clear error instead of crashing.
 */
export function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  if (!client) client = new Resend(apiKey);
  return client;
}
