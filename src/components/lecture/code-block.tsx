import { cn } from "@/lib/utils";

export function CodeBlock({
  code,
  caption,
  className,
}: {
  code: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn("overflow-hidden rounded-xl border border-border bg-code", className)}>
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-ink">
        <code>{code}</code>
      </pre>
      {caption ? (
        <figcaption className="border-t border-border px-4 py-2 text-xs text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function InlineCode({ children }: { children: string }) {
  return (
    <code className="rounded-sm bg-code px-1 py-0.5 font-mono text-[0.85em] text-ink">{children}</code>
  );
}
