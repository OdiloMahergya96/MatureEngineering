import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { ShieldCheck, Target, Users2, Compass } from "lucide-react";

export const metadata = buildMetadata({
  title: "Tentang Kami",
  description: "Ferrotype Engineering adalah partner industrial engineering independen untuk perusahaan manufaktur di Asia Tenggara.",
  path: "/about",
});

const values = [
  { icon: Target, title: "Engineering Dulu, Baru Lainnya", desc: "Setiap rekomendasi kami berdasar pada perhitungan dan bukti, bukan target penjualan." },
  { icon: ShieldCheck, title: "Akuntabilitas", desc: "Satu titik kontak yang bertanggung jawab penuh atas hasil, dari gambar sampai commissioning." },
  { icon: Users2, title: "Partner Jangka Panjang", desc: "Kesuksesan kami diukur dari berapa lama klien terus memakai jasa kami." },
  { icon: Compass, title: "Saran yang Independen", desc: "Kami tidak menjual mesin, jadi rekomendasi kami tidak terikat pada vendor tertentu." },
];

export default function AboutPage() {
  return (
    <>
      <Section tone="canvas" className="pt-24">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="spec-label mb-3">Tentang Ferrotype</p>
            <h1 className="font-display text-4xl font-semibold text-graphite dark:text-white md:text-5xl">
              Partner engineering, bukan sekadar vendor
            </h1>
            <p className="mt-6 text-lg text-graphite/70 dark:text-white/60">
              Ferrotype Engineering didirikan dari satu pengamatan sederhana: perusahaan manufaktur jarang kekurangan
              mesin — yang mereka butuhkan adalah pertimbangan engineering yang independen. Vendor peralatan menjual
              peralatan. Kontraktor menjual jam kerja. Kami menjual pemikiran engineering yang menghubungkan masalah
              produksi yang nyata dengan solusi yang tepat dan efisien secara biaya.
            </p>
            <p className="mt-4 text-lg text-graphite/70 dark:text-white/60">
              Saat ini tim engineer kami mendukung klien di industri automotive, plastic, packaging, food, mining,
              oil & gas, dan power generation di seluruh kawasan — merancang sistem mekanikal, mengotomasi lini
              produksi, dan mengelola jaringan partner machining, fabrication, dan tooling yang sudah terverifikasi,
              sehingga klien kami cukup berurusan dengan satu tim engineering yang bertanggung jawab penuh.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <Reveal className="mb-14 max-w-2xl">
            <p className="spec-label mb-3">Prinsip Kami</p>
            <h2 className="font-display text-3xl font-semibold text-graphite dark:text-white md:text-4xl">
              Prinsip yang membentuk setiap proyek
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="rounded-2xl border border-graphite/10 bg-white p-7 dark:border-white/10 dark:bg-graphite-dark">
                <v.icon className="h-6 w-6 text-blueprint dark:text-blueprint-light" />
                <h3 className="mt-4 font-display text-base font-semibold text-graphite dark:text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-graphite/60 dark:text-white/50">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="canvas">
        <Container>
          <Reveal className="mb-14 max-w-2xl">
            <p className="spec-label mb-3">Perjalanan Kami</p>
            <h2 className="font-display text-3xl font-semibold text-graphite dark:text-white md:text-4xl">
              Bagaimana perusahaan ini berkembang
            </h2>
          </Reveal>
          <div className="space-y-8 border-l border-graphite/15 pl-8 dark:border-white/15">
            {[
              { year: "2010", text: "Didirikan sebagai konsultan mechanical design beranggotakan dua orang, melayani machine builder lokal." },
              { year: "2014", text: "Berkembang ke layanan manufacturing engineering dan DFMA untuk supplier tier-1 automotive." },
              { year: "2017", text: "Membangun divisi industrial automation dan PLC/SCADA." },
              { year: "2020", text: "Memformalkan manufacturing network di bidang machining, fabrication, dan partner mould." },
              { year: "2023", text: "Mencapai lebih dari 40 partner manufaktur terkualifikasi di enam industri." },
            ].map((e) => (
              <Reveal key={e.year} className="relative">
                <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-signal" />
                <p className="font-mono text-sm text-blueprint dark:text-blueprint-light">{e.year}</p>
                <p className="mt-1 text-graphite/70 dark:text-white/60">{e.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
