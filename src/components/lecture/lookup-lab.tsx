import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Mode = "dict" | "cls" | "inst";

const MODES: { id: Mode; label: string; expr: string }[] = [
  { id: "dict", label: "저장소", expr: 'Dog.__dict__["bark"]' },
  { id: "cls", label: "클래스 조회", expr: "Dog.bark" },
  { id: "inst", label: "인스턴스 조회", expr: "my_dog.bark" },
];

const RESULT: Record<
  Mode,
  { type: string; sameAsDict: string; get: string; note: string }
> = {
  dict: {
    type: "function",
    sameAsDict: "원본 그 자체",
    get: "__get__를 타지 않음",
    note: "클래스 네임스페이스에 넣어 둔 값입니다. 디스크립터 프로토콜을 건너뜁니다.",
  },
  cls: {
    type: "function",
    sameAsDict: "is → True (함수의 특수 경우)",
    get: "__get__(None, Dog) → 함수 자신",
    note: "점 접근이지만 함수 __get__가 원본을 그대로 돌려줍니다. 하는 일은 dict와 다릅니다.",
  },
  inst: {
    type: "method",
    sameAsDict: "is → False",
    get: "__get__(my_dog, Dog) → MethodType",
    note: "같은 원본 함수인데, 조회 결과가 임시 bound method가 됩니다.",
  },
};

export function LookupLab() {
  const [mode, setMode] = useState<Mode>("dict");
  const r = RESULT[mode];

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap gap-2 border-b border-border p-3">
        {MODES.map((m) => (
          <Button
            key={m.id}
            size="sm"
            variant={mode === m.id ? "default" : "secondary"}
            onClick={() => setMode(m.id)}
          >
            {m.label}
          </Button>
        ))}
      </div>
      <div className="grid gap-4 p-4 md:grid-cols-2">
        <div>
          <p className="mb-2 font-mono text-sm text-primary">{MODES.find((m) => m.id === mode)?.expr}</p>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between gap-3 border-b border-border py-2">
              <dt className="text-muted">결과 타입</dt>
              <dd className="font-mono">{r.type}</dd>
            </div>
            <div className="flex justify-between gap-3 border-b border-border py-2">
              <dt className="text-muted">원본과 is</dt>
              <dd className="text-right">{r.sameAsDict}</dd>
            </div>
            <div className="flex justify-between gap-3 py-2">
              <dt className="text-muted">__get__</dt>
              <dd className="max-w-56 text-right font-mono text-xs">{r.get}</dd>
            </div>
          </dl>
        </div>
        <p className={cn("text-sm leading-relaxed text-muted")}>{r.note}</p>
      </div>
    </div>
  );
}
