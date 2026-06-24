import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { notFound } from "next/navigation";

import {
  formatBlogDate,
  getBlogPost,
  getBlogPosts,
  site,
} from "@/lib/content";
import { BlogParagraph } from "@/lib/inline-text";
import { Badge } from "@/components/ui/badge";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${site.fullName}`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to blog
      </Link>

      <header className="mb-10 border-b border-border/60 pb-8">
        <time
          dateTime={post.date}
          className="text-sm font-medium uppercase tracking-wide text-accent"
        >
          {formatBlogDate(post.date)}
        </time>
        <h1 className="mt-3 text-3xl font-medium tracking-wide text-foreground sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {post.excerpt}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div className="space-y-6 text-lg leading-8 text-muted">
        {post.body.map((block) => (
          <BlogParagraph key={block.text} text={block.text} />
        ))}
      </div>
    </article>
  );
}
