import { Container, Section } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan yang mengatur penggunaan website dan layanan Ferrotype Engineering.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section tone="canvas" className="pt-24">
      <Container className="max-w-3xl prose prose-neutral dark:prose-invert prose-headings:font-display">
        <h1>Syarat & Ketentuan</h1>
        <p>Terakhir diperbarui: Januari 2026</p>
        <p>
          Syarat dan ketentuan ini mengatur penggunaan Anda terhadap website {siteConfig.name}. Dengan menggunakan
          website ini, Anda menyetujui syarat dan ketentuan berikut.
        </p>
        <h2>Penggunaan Konten Website</h2>
        <p>
          Konten pada website ini, termasuk teks, grafis, dan resource yang dapat diunduh, disediakan untuk tujuan
          informasi dan tidak boleh direproduksi untuk tujuan komersial tanpa izin tertulis.
        </p>
        <h2>Layanan Engineering</h2>
        <p>
          Deskripsi layanan pada website ini bersifat umum. Scope proyek, harga, dan deliverable secara spesifik
          ditentukan dalam proposal tertulis atau perjanjian terpisah sebelum kerja sama dimulai.
        </p>
        <h2>Tanpa Jaminan</h2>
        <p>Website ini disediakan &quot;apa adanya&quot; tanpa jaminan dalam bentuk apa pun terkait akurasi atau ketersediaan.</p>
        <h2>Batasan Tanggung Jawab</h2>
        <p>{siteConfig.name} tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial yang timbul dari penggunaan website ini.</p>
        <h2>Hukum yang Berlaku</h2>
        <p>Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia.</p>
        <h2>Kontak</h2>
        <p>Pertanyaan mengenai syarat dan ketentuan ini dapat disampaikan ke {siteConfig.email}.</p>
      </Container>
    </Section>
  );
}
