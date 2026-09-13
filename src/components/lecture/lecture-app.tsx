import { Link, useNavigate } from "@tanstack/react-router";
import { BookOpen, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { CHAPTERS, type ChapterId } from "@/lib/lecture";
import { cn } from "@/lib/utils";
import { ChapterBody } from "./chapter-body";

const STORAGE_KEY = "dot-lecture-done";

function loadDone(): ChapterId[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((x): x is ChapterId => CHAPTERS.some((c) => c.id === x));
  } catch {
    return [];
  }
}

export function LectureApp({ chapter }: { chapter: ChapterId }) {
  const navigate = useNavigate();
  const idx = CHAPTERS.findIndex((c) => c.id === chapter);
  const current = CHAPTERS[idx] ?? CHAPTERS[0];
  const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
  const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;

  const [done, setDone] = useState<ChapterId[]>([]);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setDone(loadDone());
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [chapter]);

  const mark = () => {
    setDone((prevDone) => {
      if (prevDone.includes(current.id)) return prevDone;
      const nextDone = [...prevDone, current.id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextDone));
      return nextDone;
    });
  };

  const go = (id: ChapterId) => {
    setMenu(false);
    void navigate({ to: "/", search: { ch: id } });
  };

  const progress = useMemo(
    () => Math.round((done.length / CHAPTERS.length) * 100),
    [done.length],
  );

  const nav = (
    <nav aria-label="강의 목차" className="space-y-1">
      {CHAPTERS.map((c) => {
        const active = c.id === current.id;
        const seen = done.includes(c.id);
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => go(c.id)}
            className={cn(
              "flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
              active ? "bg-elevated text-fg" : "text-muted hover:bg-elevated/70 hover:text-fg",
            )}
          >
            <span className="mt-0.5 font-mono text-[0.7rem] text-subtle">{c.num}</span>
            <span className="min-w-0">
              <span className="block font-medium text-fg">{c.title}</span>
              <span className="block text-xs text-subtle">
                {c.kicker}
                {seen ? " · 읽음" : ""}
              </span>
            </span>
          </button>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMenu(true)}
            aria-label="목차 열기"
          >
            <Menu className="size-5" />
          </Button>
          <Link
            to="/"
            search={{ ch: "prologue" }}
            className="flex min-w-0 items-center gap-2 font-display text-base font-semibold tracking-tight"
          >
            <BookOpen className="size-4 shrink-0" />
            <span className="truncate">점 하나의 이면</span>
          </Link>
          <span className="hidden text-xs text-muted sm:inline">Python bound method</span>
          <span className="ml-auto font-mono text-xs text-subtle">{progress}%</span>
        </div>
        <div className="h-0.5 bg-elevated">
          <div className="h-full bg-primary transition-[width] duration-300" style={{ width: `${progress}%` }} />
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl lg:grid-cols-[16rem_minmax(0,1fr)]">
        <aside className="sticky top-16 hidden max-h-[calc(100dvh-4rem)] overflow-y-auto border-r border-border p-4 lg:block">
          <p className="mb-3 px-3 text-xs font-medium tracking-wide text-muted uppercase">목차</p>
          {nav}
        </aside>

        <main className="min-w-0 px-4 py-8 md:px-10 md:py-12">
          <p className="mb-2 font-mono text-xs text-muted">
            {current.num} · {current.kicker}
          </p>
          <h1 className="font-display mb-8 text-3xl font-semibold tracking-tight">{current.title}</h1>
          <ChapterBody id={current.id} />

          <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Button
              variant="secondary"
              disabled={!prev}
              onClick={() => prev && go(prev.id)}
              className="justify-start"
            >
              <ChevronLeft className="size-4" />
              {prev ? prev.title : "처음"}
            </Button>
            <Button
              onClick={() => {
                mark();
                if (next) go(next.id);
              }}
              className="justify-end"
            >
              {next ? next.title : "강의 마침"}
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </main>
      </div>

      <Sheet open={menu} onOpenChange={setMenu} title="목차">
        {nav}
      </Sheet>
    </div>
  );
}
