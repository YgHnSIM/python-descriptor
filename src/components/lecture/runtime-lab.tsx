import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "class Dog",
    out: "",
    note: "클래스 객체와 bark 함수(그리고 그 안의 code object)가 생깁니다. 인스턴스는 아직 없습니다.",
    objects: [
      { id: "Dog", label: "Dog", kind: "type", live: true },
      { id: "fn", label: "bark 함수", kind: "function", live: true },
      { id: "code", label: "__code__", kind: "code", live: true },
      { id: "dog", label: "my_dog", kind: "instance", live: false },
      { id: "m1", label: "method #1", kind: "method", live: false },
      { id: "m2", label: "method #2", kind: "method", live: false },
    ],
  },
  {
    title: "my_dog = Dog()",
    out: "",
    note: "빈 __dict__를 가진 인스턴스 하나. bark는 복사되지 않습니다.",
    objects: [
      { id: "Dog", label: "Dog", kind: "type", live: true },
      { id: "fn", label: "bark 함수", kind: "function", live: true },
      { id: "code", label: "__code__", kind: "code", live: true },
      { id: "dog", label: "my_dog", kind: "instance", live: true },
      { id: "m1", label: "method #1", kind: "method", live: false },
      { id: "m2", label: "method #2", kind: "method", live: false },
    ],
  },
  {
    title: "print(my_dog.bark)",
    out: "<bound method Dog.bark of <Dog object>>",
    note: "조회가 함수.__get__(my_dog, Dog)를 타고 임시 bound method를 만듭니다. 그 repr이 출력됩니다.",
    objects: [
      { id: "Dog", label: "Dog", kind: "type", live: true },
      { id: "fn", label: "bark 함수", kind: "function", live: true },
      { id: "code", label: "__code__", kind: "code", live: true },
      { id: "dog", label: "my_dog", kind: "instance", live: true },
      { id: "m1", label: "method #1", kind: "method", live: true },
      { id: "m2", label: "method #2", kind: "method", live: false },
    ],
  },
  {
    title: "print(my_dog.bark())",
    out: "woof\nNone",
    note: "조회가 또 일어나 다른 method가 생깁니다. 호출은 bark(my_dog). 반환 None을 바깥 print가 출력합니다.",
    objects: [
      { id: "Dog", label: "Dog", kind: "type", live: true },
      { id: "fn", label: "bark 함수", kind: "function", live: true },
      { id: "code", label: "__code__", kind: "code", live: true },
      { id: "dog", label: "my_dog", kind: "instance", live: true },
      { id: "m1", label: "method #1", kind: "method", live: false },
      { id: "m2", label: "method #2", kind: "method", live: true },
    ],
  },
] as const;

const KIND: Record<string, string> = {
  type: "클래스",
  function: "함수",
  code: "코드",
  instance: "인스턴스",
  method: "메서드",
};

export function RuntimeLab() {
  const [i, setI] = useState(0);
  const step = STEPS[i];

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <p className="text-sm font-medium">
          단계 {i + 1} / {STEPS.length}
          <span className="ml-2 font-mono text-muted">{step.title}</span>
        </p>
        <div className="flex gap-2">
          <Button size="sm" variant="secondary" onClick={() => setI((n) => Math.max(0, n - 1))}>
            이전
          </Button>
          <Button
            size="sm"
            onClick={() => setI((n) => Math.min(STEPS.length - 1, n + 1))}
            disabled={i === STEPS.length - 1}
          >
            다음 단계
          </Button>
        </div>
      </div>
      <div className="grid gap-4 p-4 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {step.objects.map((o) => (
            <div
              key={o.id}
              className={cn(
                "rounded-lg border px-3 py-2 text-sm transition-opacity duration-200",
                o.live
                  ? "border-border-strong bg-elevated text-fg"
                  : "border-border bg-bg text-subtle opacity-40",
              )}
            >
              <p className="text-[0.65rem] tracking-wide text-muted uppercase">{KIND[o.kind]}</p>
              <p className="font-mono text-xs">{o.label}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="mb-2 text-xs font-medium text-muted uppercase">표준 출력</p>
          <pre className="min-h-20 rounded-lg bg-ink p-3 font-mono text-xs text-primary-fg">
            {step.out || "(출력 없음)"}
          </pre>
          <p className="mt-3 text-sm text-muted">{step.note}</p>
        </div>
      </div>
    </div>
  );
}
