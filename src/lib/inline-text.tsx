import type { ReactNode } from "react";

export function parseInlineText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const start = remaining.indexOf("*");
    if (start === -1) {
      nodes.push(remaining);
      break;
    }

    if (start > 0) {
      nodes.push(remaining.slice(0, start));
    }

    const end = remaining.indexOf("*", start + 1);
    if (end === -1) {
      nodes.push(remaining.slice(start));
      break;
    }

    nodes.push(<em key={key++}>{remaining.slice(start + 1, end)}</em>);
    remaining = remaining.slice(end + 1);
  }

  return nodes;
}

type BlogParagraphProps = {
  text: string;
};

export function BlogParagraph({ text }: BlogParagraphProps) {
  return <p>{parseInlineText(text)}</p>;
}
