import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { Container, Section } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Card";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.meta.title,
    description: post.meta.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.meta);
  const breadcrumb = breadcrumbSchema([
    { name: "Blog", path: "/blog" },
    { name: post.meta.title, path: `/blog/${slug}` },
  ]);

  return (
    <Section tone="canvas" className="pt-24">
      <Container className="max-w-3xl">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

        <Badge>{post.meta.category}</Badge>
        <h1 className="mt-4 font-display text-3xl font-semibold text-graphite dark:text-white md:text-4xl">
          {post.meta.title}
        </h1>
        <p className="mt-3 text-sm text-graphite/50 dark:text-white/40">
          By {post.meta.author} · {formatDate(post.meta.date)} · {post.meta.readingTime}
        </p>

        <article className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-display prose-a:text-blueprint dark:prose-a:text-blueprint-light">
          <MDXRemote source={post.content} />
        </article>

        <div className="mt-10 flex flex-wrap gap-2">
          {post.meta.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-graphite/10 pt-10 dark:border-white/10">
            <p className="spec-label mb-5">Related Articles</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="rounded-xl border border-graphite/10 p-5 hover:border-blueprint dark:border-white/10">
                  <p className="font-display text-sm font-semibold text-graphite dark:text-white">{r.title}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
