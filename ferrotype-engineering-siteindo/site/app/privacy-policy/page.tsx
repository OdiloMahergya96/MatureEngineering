import { Container, Section } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Kebijakan Privasi",
  description: "Bagaimana Ferrotype Engineering mengumpulkan, menggunakan, dan melindungi informasi Anda.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <Section tone="canvas" className="pt-24">
      <Container className="max-w-3xl prose prose-neutral dark:prose-invert prose-headings:font-display">
        <h1>Kebijakan Privasi</h1>
        <p>Terakhir diperbarui: Januari 2026</p>
        <p>
          {siteConfig.name} (&quot;kami&quot;) menghormati privasi Anda. Kebijakan ini menjelaskan informasi apa
          yang kami kumpulkan melalui website ini dan bagaimana informasi tersebut digunakan.
        </p>
        <h2>Informasi yang Kami Kumpulkan</h2>
        <p>
          Kami mengumpulkan informasi yang Anda berikan secara langsung, seperti nama, perusahaan, email, nomor
          telepon, dan detail proyek yang dikirimkan melalui form kontak dan unduhan resource kami. Kami juga
          mengumpulkan data analytics standar seperti halaman yang dikunjungi dan lokasi umum.
        </p>
        <h2>Bagaimana Kami Menggunakan Informasi</h2>
        <p>
          Kami menggunakan informasi yang dikirimkan untuk merespons pertanyaan, menyediakan resource yang diminta,
          dan meningkatkan layanan kami. Kami tidak menjual informasi pribadi kepada pihak ketiga.
        </p>
        <h2>Penyimpanan Data</h2>
        <p>Kami menyimpan data pertanyaan selama diperlukan untuk merespons permintaan Anda dan menjaga catatan bisnis, sesuai dengan hukum yang berlaku.</p>
        <h2>Hak Anda</h2>
        <p>Anda dapat meminta akses, koreksi, atau penghapusan informasi pribadi Anda dengan menghubungi {siteConfig.email}.</p>
        <h2>Kontak</h2>
        <p>Pertanyaan mengenai kebijakan ini dapat disampaikan ke {siteConfig.email}.</p>
      </Container>
    </Section>
  );
}
