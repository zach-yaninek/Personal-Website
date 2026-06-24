import type { Metadata } from "next";

import { projects } from "@/lib/content";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-medium tracking-wide text-foreground">
        Research & Projects
      </h1>
      <p className="mb-12 max-w-2xl text-muted leading-relaxed">
        A selection of work across research, engineering, and applied data
        science.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
