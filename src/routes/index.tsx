import { createFileRoute } from "@tanstack/react-router";
import { LectureApp } from "@/components/lecture/lecture-app";
import { CHAPTERS, type ChapterId } from "@/lib/lecture";

function parseChapter(value: unknown): ChapterId {
  if (typeof value === "string" && CHAPTERS.some((c) => c.id === value)) {
    return value as ChapterId;
  }
  return "prologue";
}

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => ({
    ch: parseChapter(search.ch),
  }),
  component: Home,
});

function Home() {
  const { ch } = Route.useSearch();
  return <LectureApp chapter={ch} />;
}
