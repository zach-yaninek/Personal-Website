import type { Metadata } from "next";

import { resumeSections } from "@/lib/content";
import { DocumentDownloads } from "@/components/document-downloads";
import { ResumeSectionList } from "@/components/resume-section";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-medium tracking-wide text-foreground">
        Resume
      </h1>
      <p className="mb-8 max-w-2xl text-muted leading-relaxed">
        Download a PDF copy of my resume or CV, or read the web version below.
      </p>
      <DocumentDownloads />
      <div className="mt-16">
        <ResumeSectionList sections={resumeSections} />
      </div>
    </div>
  );
}
