import { Link } from "wouter";
import type { ReactNode } from "react";

/**
 * Turns [label](/path) markdown-style links inside plain content strings into
 * clickable links — internal ones go through wouter so they do not reload the
 * page (a full reload also causes a theme flash).
 *
 * Used by both blog posts and recipe pages so interlinks can be written
 * directly in the data files.
 *
 * NOTE: when the result is dropped into a flex container, wrap it in a <span>.
 * Otherwise every text fragment and link becomes its own flex item and the
 * sentence breaks apart.
 */
export function renderText(text?: string): ReactNode {
  if (!text) return null;
  const nodes: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const label = m[1];
    const url = m[2];
    if (url.startsWith("/")) {
      nodes.push(
        <Link key={k++} href={url} className="text-primary font-medium hover:underline">
          {label}
        </Link>
      );
    } else {
      nodes.push(
        <a
          key={k++}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium hover:underline"
        >
          {label}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}
