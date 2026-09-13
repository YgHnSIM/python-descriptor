import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-4 max-w-prose text-base text-fg">{children}</p>;
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display mb-3 mt-10 text-xl font-semibold tracking-tight text-fg first:mt-0">
      {children}
    </h3>
  );
}

export function Ul({ children }: { children: ReactNode }) {
  return <ul className="mb-5 max-w-prose list-disc space-y-2 pl-5 text-base">{children}</ul>;
}

export function Callout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-6 rounded-xl border border-border bg-surface p-4 md:p-5">
      <p className="mb-2 text-xs font-medium tracking-wide text-muted uppercase">{title}</p>
      <div className="text-base">{children}</div>
    </aside>
  );
}

export function TableWrap({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-border bg-surface">
      <table className="w-full min-w-lg text-left text-sm">{children}</table>
    </div>
  );
}

export function Th({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <th className={cn("border-b border-border bg-elevated px-3 py-2.5 font-medium", className)}>
      {children}
    </th>
  );
}

export function Td({ children, className }: { children: ReactNode; className?: string }) {
  return <td className={cn("border-b border-border px-3 py-2.5 align-top", className)}>{children}</td>;
}
