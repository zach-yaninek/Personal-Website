import type { Metadata } from "next";

import { awards } from "@/lib/content";

export const metadata: Metadata = {
  title: "Awards",
};

export default function AwardsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-medium tracking-wide text-foreground">
        Awards & Honors
      </h1>
      <p className="mb-12 text-muted leading-relaxed">
        Recognition and honors from academic and extracurricular work.
      </p>
      <ul className="space-y-8">
        {awards.map((award) => (
          <li
            key={award.title}
            className="border-b border-border/60 pb-8 last:border-0"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-lg font-medium text-foreground">
                {award.title}
              </h2>
              {award.date && (
                <span className="text-sm text-accent">{award.date}</span>
              )}
            </div>
            {award.description && (
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {award.description}
              </p>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-12 text-sm text-muted">
        PDF downloads for resume and CV are on the{" "}
        <a href="/resume" className="text-accent hover:underline">
          Resume
        </a>{" "}
        page.
      </p>
    </div>
  );
}
