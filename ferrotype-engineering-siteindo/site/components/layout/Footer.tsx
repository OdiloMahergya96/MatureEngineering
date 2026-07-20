import Link from "next/link";
import { Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-graphite/10 bg-graphite text-white/80 dark:border-white/10 dark:bg-graphite-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <p className="font-display text-lg font-semibold text-white">
              {siteConfig.shortName}<span className="text-signal">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-white/60">{siteConfig.description}</p>
            <div className="mt-5 flex gap-3">
              <a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="text-white/60 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.youtube} aria-label="YouTube" className="text-white/60 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <FooterColumn title="Company" links={siteConfig.footerLinks.company} />
          <FooterColumn title="Services" links={siteConfig.footerLinks.services} />
          <FooterColumn title="Resources" links={siteConfig.footerLinks.resources} />

          <div>
            <p className="spec-label text-white/40">Kontak</p>
            <ul className="mt-3 space-y-3 text-sm text-white/60">
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" /> {siteConfig.email}</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /> {siteConfig.phone}</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /> {siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Hak cipta dilindungi.</p>
          <div className="flex gap-5">
            {siteConfig.footerLinks.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white/70">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="spec-label text-white/40">{title}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-white/60 hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
