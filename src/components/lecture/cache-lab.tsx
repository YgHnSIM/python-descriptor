import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CacheLab() {
  const [cached, setCached] = useState(false);
  const [patched, setPatched] = useState(false);

  const usesNew = !cached || !patched ? patched : false;
  // if cached and then patched, instance still has old
  const call = cached && patched ? "옛 bark (캐시)" : patched ? "new_bark" : "원래 bark";

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap gap-2 border-b border-border p-3">
        <Button size="sm" variant={cached ? "default" : "secondary"} onClick={() => setCached((v) => !v)}>
          {cached ? "인스턴스에 캐시함" : "캐시 없음 (실제 CPython)"}
        </Button>
        <Button size="sm" variant={patched ? "default" : "secondary"} onClick={() => setPatched((v) => !v)}>
          {patched ? "Dog.bark 교체됨" : "클래스 패치 전"}
        </Button>
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-3">
        <Stat k="Dog.__dict__['bark']" v={patched ? "new_bark" : "원래 함수"} />
        <Stat k="my_dog.__dict__" v={cached ? "bark → method 보관" : "bark 없음"} />
        <Stat k="my_dog.bark()" v={call} />
      </div>
      <p className="border-t border-border px-4 py-3 text-sm text-muted">
        {cached
          ? "캐시하면 클래스 교체가 이 인스턴스에 안 보입니다. 덮어쓰기와 최적화 캐시도 같은 칸을 씁니다."
          : usesNew || patched
            ? "캐시가 없으면 다음 조회는 항상 지금 클래스에 있는 함수를 묶습니다."
            : "캐시가 없으면 메서드 래퍼는 조회가 끝나면 버려집니다."}
      </p>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg bg-elevated px-3 py-3">
      <p className="font-mono text-[0.7rem] text-muted">{k}</p>
      <p className="mt-1 text-sm font-medium">{v}</p>
    </div>
  );
}
