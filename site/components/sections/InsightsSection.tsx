import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function InsightsSection() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <Section tone="canvas">
      <Container>
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="spec-label mb-3">Engineering Insights</p>
            <h2 className="font-display text-3xl font-semibold text-graphite dark:text-white md:text-4xl">
              Latest from the engineering desk
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-medium text-blueprint dark:text-blueprint-light">
            View all articles →
          </Link>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link href={`/blog/${post.slug}`} className="group block rounded-2xl border border-graphite/10 bg-white p-6 dark:border-white/10 dark:bg-graphite-dark">
                <p className="spec-label">{post.category}</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-graphite group-hover:text-blueprint dark:text-white dark:group-hover:text-blueprint-light">
                  {post.title}
                </h3>
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
