import { useState } from "react";
import { Button } from "@/components/ui/button";

type Kind = "inst" | "cls";

export function GetLab() {
  const [kind, setKind] = useState<Kind>("inst");
  const inst = kind === "inst";

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex gap-2 border-b border-border p-3">
        <Button size="sm" variant={inst ? "default" : "secondary"} onClick={() => setKind("inst")}>
          인스턴스에서
        </Button>
        <Button size="sm" variant={!inst ? "default" : "secondary"} onClick={() => setKind("cls")}>
          클래스에서
        </Button>
      </div>
      <div className="grid gap-4 p-4 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-medium tracking-wide text-muted uppercase">입력</p>
          <ul className="space-y-2 font-mono text-sm">
            <li>self = {"<function Dog.bark>"}</li>
            <li>instance = {inst ? "my_dog" : "None"}</li>
            <li>owner = Dog</li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-medium tracking-wide text-muted uppercase">출력</p>
          <p className="font-mono text-sm">
            {inst ? "<bound method Dog.bark of my_dog>" : "<function Dog.bark>"}
          </p>
          <p className="mt-2 text-sm text-muted">
            {inst
              ? "types.MethodType(함수, my_dog). 호출하면 bark(my_dog)."
              : "함수 자기 자신. 그래서 Dog.bark is Dog.__dict__[\"bark\"] 가 True."}
          </p>
        </div>
      </div>
    </div>
  );
}
