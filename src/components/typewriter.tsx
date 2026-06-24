"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

type TypewriterProps = {
  className?: string;
};

export function Typewriter({ className }: TypewriterProps) {
  const fullText = site.fullName;
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayed(fullText.slice(0, index));
        index += 1;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const accentStart = site.name.length;

  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl md:text-6xl font-medium tracking-wide",
        className,
      )}
    >
      <span className="text-foreground">{displayed.slice(0, accentStart)}</span>
      {displayed.length > accentStart && (
        <span className="text-accent">{displayed.slice(accentStart)}</span>
      )}
      <span
        className={cn(
          "text-accent ml-0.5 inline-block w-[3px]",
          showCursor ? "opacity-100" : "opacity-0",
        )}
      >
        |
      </span>
    </h1>
  );
}
