import type { Metadata } from "next";
import Link from "next/link";
import { RssIcon } from "lucide-react";

import { formatBlogDate, getBlogPosts } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from Zachary Yaninek on healthcare analytics, operations research, and building useful tools.",
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-medium tracking-wide text-foreground">
          Blog
        </h1>
        <Link
          href="/rss.xml"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent"
        >
          <RssIcon className="h-4 w-4" />
          Subscribe via RSS
        </Link>
      </div>

      {posts.length > 0 ? (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block no-underline">
                <Card className="transition hover:-translate-y-1 hover:border-accent/60 hover:bg-white/[0.06]">
                  <CardHeader>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <time
                        dateTime={post.date}
                        className="shrink-0 text-xs font-medium uppercase tracking-wide text-muted"
                      >
                        {formatBlogDate(post.date)}
                      </time>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Card className="items-center text-center">
          <CardHeader>
            <CardTitle>No posts yet</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Notes on healthcare analytics and quantitative work will appear
              here soon.
            </CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
