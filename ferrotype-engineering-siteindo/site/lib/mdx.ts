import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogMeta } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): { meta: BlogMeta; content: string } | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  return {
    meta: {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      category: data.category,
      tags: data.tags || [],
      author: data.author || "Ferrotype Engineering Team",
      featured: data.featured || false,
      readingTime: stats.text,
    },
    content,
  };
}

export function getAllPosts(): BlogMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug)?.meta)
    .filter((m): m is BlogMeta => !!m)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts(): BlogMeta[] {
  return getAllPosts().filter((p) => p.featured);
}

export function getRelatedPosts(current: BlogMeta, limit = 3): BlogMeta[] {
  return getAllPosts()
    .filter((p) => p.slug !== current.slug && p.category === current.category)
    .slice(0, limit);
}
