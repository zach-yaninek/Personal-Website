import { site } from "@/lib/content";
import { BrandName } from "@/components/brand-name";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {site.fullName}
        </p>
        <BrandName asLink={false} size="sm" />
      </div>
    </footer>
  );
}
