import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export function DocumentDownloads() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button asChild variant="default">
        <a href="/resume.pdf" download>
          <Download className="h-4 w-4" />
          Download Resume
        </a>
      </Button>
      <Button asChild variant="outline">
        <a href="/cv.pdf" download>
          <Download className="h-4 w-4" />
          Download CV
        </a>
      </Button>
    </div>
  );
}
