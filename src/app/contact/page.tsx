import type { Metadata } from "next";

import { site } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-medium tracking-wide text-foreground">
        Contact Me
      </h1>
      <p className="mb-10 text-muted leading-relaxed">
        I&apos;m always happy to connect for research, collaboration, or just
        to chat about any shared interests.
      </p>
      <ContactForm />
      <p className="mt-8 text-sm text-muted">
        <strong className="text-foreground">Email:</strong>{" "}
        <a href={site.socials.email} className="text-accent hover:underline">
          {site.email}
        </a>
      </p>
    </div>
  );
}
