import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog Engineering",
  description: "Artikel tentang mechanical design, automation, manufacturing, CAD, DFMA, lean manufacturing, dan engineering management.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <Section tone="canvas" className="pt-24">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="spec-label mb-3">Blog Engineering</p>
          <h1 className="font-display text-4xl font-semibold text-graphite dark:text-white md:text-5xl">
            Catatan dari meja engineering kami
          </h1>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Badge key={c}>{c}</Badge>
          ))}
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.06}>
              <Link href={`/blog/${post.slug}`} className="group block h-full rounded-2xl border border-graphite/10 bg-white p-7 dark:border-white/10 dark:bg-graphite-dark">
                <p className="spec-label">{post.category}</p>
                <h2 className="mt-3 font-display text-lg font-semibold text-graphite group-hover:text-blueprint dark:text-white dark:group-hover:text-blueprint-light">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-graphite/60 dark:text-white/50">{post.excerpt}</p>
                <p className="mt-4 text-xs text-graphite/40 dark:text-white/30">
                  {formatDate(post.date)} · {post.readingTime}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
