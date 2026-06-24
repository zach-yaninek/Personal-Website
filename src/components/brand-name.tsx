import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/content";

type BrandNameProps = {
  className?: string;
  asLink?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "text-base",
  md: "text-lg",
  lg: "text-2xl sm:text-3xl",
};

export function BrandName({
  className,
  asLink = true,
  size = "md",
}: BrandNameProps) {
  const content = (
    <span
      className={cn(
        "font-medium tracking-wide",
        sizeClasses[size],
        className,
      )}
    >
      <span className="text-foreground">{site.name} </span>
      <span className="text-accent">{site.nameAccent}</span>
    </span>
  );

  if (asLink) {
    return (
      <Link href="/" className="hover:opacity-90 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}
