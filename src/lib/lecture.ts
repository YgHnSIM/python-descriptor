export type ChapterId =
  | "prologue"
  | "runtime"
  | "code"
  | "dict-vs-dot"
  | "function-get"
  | "bound-method"
  | "get-io"
  | "methodtype"
  | "verbose"
  | "design"
  | "cache"
  | "model";

export type Chapter = {
  id: ChapterId;
  num: string;
  title: string;
  kicker: string;
};

export const CHAPTERS: Chapter[] = [
  { id: "prologue", num: "00", title: "강의의 출발점", kicker: "같은 코드" },
  { id: "runtime", num: "01", title: "실행하면 무엇이 생기는가", kicker: "객체 연대기" },
  { id: "code", num: "02", title: "함수 안의 __code__", kicker: "실행 본체" },
  { id: "dict-vs-dot", num: "03", title: "저장소와 조회", kicker: "__dict__ vs 점" },
  { id: "function-get", num: "04", title: "function.__get__", kicker: "그 function은 누구" },
  { id: "bound-method", num: "05", title: "바운드 메서드의 실체", kicker: "얇은 래퍼" },
  { id: "get-io", num: "06", title: "__get__의 입력과 출력", kicker: "디스크립터" },
  { id: "methodtype", num: "07", title: "types.MethodType", kicker: "묶는 생성자" },
  { id: "verbose", num: "08", title: "왜 식이 길게 보이나", kicker: "펼친 설명" },
  { id: "design", num: "09", title: "왜 이렇게 설계됐나", kicker: "의도" },
  { id: "cache", num: "10", title: "캐시하지 않는 이유", kicker: "메모리와 일관성" },
  { id: "model", num: "11", title: "멘탈 모델", kicker: "한 장으로" },
];

export const SAMPLE_CODE = `class Dog:
    def bark(self):
        print("woof")

my_dog = Dog()

print(my_dog.bark)
print(my_dog.bark())`;
