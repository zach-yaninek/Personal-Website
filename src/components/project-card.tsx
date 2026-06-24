import Link from "next/link";

import type { Project } from "@content/projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader>
        <Badge>{project.category}</Badge>
        <CardTitle className="mt-2">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <CardDescription>{project.description}</CardDescription>
        {project.href ? (
          <Link
            href={project.href}
            className="text-sm font-medium text-accent hover:underline"
          >
            {project.linkLabel ?? "read more →"}
          </Link>
        ) : (
          <span className="text-sm text-muted">
            {project.linkLabel ?? ""}
          </span>
        )}
      </CardContent>
    </Card>
  );
}
