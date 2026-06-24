import type { ResumeSection } from "@content/resume";
import { Separator } from "@/components/ui/separator";

export function ResumeSectionList({
  sections,
}: {
  sections: ResumeSection[];
}) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="mb-6 text-xl font-medium text-accent tracking-wide">
            {section.heading}
          </h2>
          <div className="space-y-8">
            {section.entries.map((entry, index) => (
              <div key={`${entry.title}-${index}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-medium text-foreground">
                    {entry.title}
                  </h3>
                  {entry.period && (
                    <span className="text-sm text-muted">{entry.period}</span>
                  )}
                </div>
                {entry.subtitle && (
                  <p className="text-sm text-accent/90">{entry.subtitle}</p>
                )}
                {entry.details && (
                  <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted leading-relaxed">
                    {entry.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
                {index < section.entries.length - 1 && (
                  <Separator className="mt-6" />
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
