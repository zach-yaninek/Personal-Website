import type { Metadata } from "next";
import Image from "next/image";

import { aboutSections, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-10 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
        <div className="rounded-full border-2 border-accent p-1 glow-accent shrink-0 sm:order-2">
          <Image
            src="/images/Zach_Photo.png"
            alt={site.fullName}
            width={160}
            height={160}
            className="rounded-full bg-card"
          />
        </div>
        <div className="sm:order-1">
          <h1 className="text-3xl font-medium tracking-wide">
            <span className="text-foreground">{site.name} </span>
            <span className="text-accent">{site.nameAccent}</span>
          </h1>
          <p className="mt-4 text-muted leading-relaxed">{site.bio}</p>
        </div>
      </div>

      <div className="space-y-10">
        {aboutSections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-4 text-xl font-medium text-accent">
              {section.heading}
            </h2>
            <ul className="space-y-2 text-muted leading-relaxed">
              {section.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
