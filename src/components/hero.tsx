import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { site } from "@/lib/content";
import { Typewriter } from "@/components/typewriter";
import { Button } from "@/components/ui/button";

function XLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="currentColor"
    >
      <path d="M18.9 2h3.3l-7.2 8.2L23.5 22h-6.7l-5.2-6.8L5.6 22H2.3l7.7-8.8L1.8 2h6.8l4.7 6.2L18.9 2Zm-1.2 17.9h1.8L7.6 4H5.7l12 15.9Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:items-start md:py-24">
      <div className="relative shrink-0 md:order-2">
        <div className="rounded-full border-2 border-accent p-1 glow-accent">
          <Image
            src="/images/Zach_Photo.png"
            alt={site.fullName}
            width={200}
            height={200}
            className="rounded-full bg-card"
            priority
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center text-center md:order-1 md:items-start md:text-left">
        <div className="mb-6 flex items-center gap-4">
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={site.socials.email}
            className="text-muted hover:text-accent"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={site.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent"
            aria-label="X"
          >
            <XLogo className="h-5 w-5" />
          </a>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>

        <Typewriter />
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {site.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <Button asChild variant="outline">
            <Link href="/about">about me →</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/projects">projects</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/resume">resume</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/contact">get in touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
