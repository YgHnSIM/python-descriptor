import { SAMPLE_CODE, type ChapterId } from "@/lib/lecture";
import { CacheLab } from "./cache-lab";
import { CodeBlock, InlineCode } from "./code-block";
import { GetLab } from "./get-lab";
import { LookupLab } from "./lookup-lab";
import { Callout, H3, P, TableWrap, Td, Th, Ul } from "./prose";
import { RuntimeLab } from "./runtime-lab";

export function ChapterBody({ id }: { id: ChapterId }) {
  switch (id) {
    case "prologue":
      return <Prologue />;
    case "runtime":
      return <Runtime />;
    case "code":
      return <CodeCh />;
    case "dict-vs-dot":
      return <DictVsDot />;
    case "function-get":
      return <FnGet />;
    case "bound-method":
      return <Bound />;
    case "get-io":
      return <GetIo />;
    case "methodtype":
      return <MethodTypeCh />;
    case "verbose":
      return <Verbose />;
    case "design":
      return <Design />;
    case "cache":
      return <Cache />;
    case "model":
      return <Model />;
  }
}

function Prologue() {
  return (
    <>
      <P>
        이 강의는 한 조각의 Python 코드에서 출발합니다. 질문은 단순합니다. 이 네 줄이 실행될 때
        무엇이 생기고, <InlineCode>my_dog.bark</InlineCode>는 왜 함수가 아니라 메서드로 보이며,
        그 설계는 왜 그렇게 생겼는가.
      </P>
      <CodeBlock code={SAMPLE_CODE} caption="강의 전체의 표본 코드" />
      <P>
        겉보기 동작은 누구나 압니다. 인스턴스에서 메서드를 부르면 <InlineCode>self</InlineCode>가
        자동으로 들어갑니다. 그 한 줄을 지탱하려고 언어는 저장, 조회, 묶기, 호출을 한 프로토콜로
        접어 두었습니다. 평소에는 접힌 채로 쓰면 되고, 이 강의는 그 접힌 면을 순서대로 펼칩니다.
      </P>
      <H3>강의가 가는 길</H3>
      <Ul>
        <li>실행 연대기: 클래스, 함수, 인스턴스, 임시 메서드</li>
        <li>원본 함수와 그 안의 바이트코드</li>
        <li>점 접근이 저장소 조회와 다른 이유</li>
        <li>디스크립터 <InlineCode>__get__</InlineCode>와 <InlineCode>MethodType</InlineCode></li>
        <li>설계 의도와, 메서드를 인스턴스에 캐시하지 않는 이유</li>
        <li>매일 들고 다닐 멘탈 모델</li>
      </Ul>
      <Callout title="이 강의에서 쓰지 않는 것">
        <P>
          일상 코드에 <InlineCode>Dog.__dict__["bark"].__get__(...)</InlineCode>를 적으라는
          뜻이 아닙니다. 그건 점 하나 뒤에 숨은 일을 설명용으로 분해한 식입니다. 호출은 언제나{" "}
          <InlineCode>my_dog.bark()</InlineCode>면 충분합니다.
        </P>
      </Callout>
    </>
  );
}

function Runtime() {
  return (
    <>
      <P>
        객체를 “변수 이름”이 아니라 “언제 생기고 언제 사라지는 값”으로 보면 그림이 단순해집니다.
        아래 실험에서 단계를 눌러 보세요.
      </P>
      <RuntimeLab />
      <H3>클래스 정의 시점</H3>
      <P>
        <InlineCode>def bark</InlineCode>가 함수 객체 하나를 만듭니다. 클래스 바디가 끝나면{" "}
        <InlineCode>type</InlineCode>이 <InlineCode>Dog</InlineCode>를 만들고, 그{" "}
        <InlineCode>__dict__</InlineCode>에 같은 함수를 넣습니다. 문자열 <InlineCode>"woof"</InlineCode>는
        보통 코드 객체의 상수 테이블에 들어갑니다.
      </P>
      <H3>인스턴스 생성</H3>
      <P>
        <InlineCode>Dog()</InlineCode>는 새 인스턴스를 할당하고 기본 <InlineCode>__init__</InlineCode>를
        부릅니다. <InlineCode>my_dog.__dict__</InlineCode>는 비어 있습니다. 메서드 코드는 인스턴스마다
        복제되지 않습니다.
      </P>
      <H3>조회와 호출</H3>
      <P>
        <InlineCode>print(my_dog.bark)</InlineCode>는 인스턴스 dict에 없으니 클래스에서 함수를 찾고,
        함수의 <InlineCode>__get__</InlineCode>가 bound method를 만듭니다.{" "}
        <InlineCode>print(my_dog.bark())</InlineCode>는 그 조회를 한 번 더 한 뒤 호출합니다.{" "}
        <InlineCode>bark</InlineCode>에 return이 없어 <InlineCode>None</InlineCode>이 나오고, 바깥
        print가 그걸 출력합니다.
      </P>
      <Callout title="남는 것 / 스쳐 지나가는 것">
        <P>
          남는 것: 클래스, 함수, 인스턴스, code object. 스쳐 지나가는 것: 조회마다 생기는 method,
          print가 다루는 None과 출력 문자열. bound method는 참조가 끝나면 GC 대상입니다.
        </P>
      </Callout>
    </>
  );
}

function CodeCh() {
  return (
    <>
      <P>
        <InlineCode>__code__</InlineCode>는 함수가 실행할 바이트코드와, 그걸 해석할 정적 정보를 담은
        객체입니다. 타입은 <InlineCode>code</InlineCode> (<InlineCode>types.CodeType</InlineCode>).
        함수는 “실행 가능한 래퍼”이고, <InlineCode>__code__</InlineCode>는 그 몸통입니다.
      </P>
      <TableWrap>
        <thead>
          <tr>
            <Th>객체</Th>
            <Th>역할</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>function (bark)</Td>
            <Td>이름, 기본 인자, 클로저, 전역, __code__ 포인터</Td>
          </tr>
          <tr>
            <Td>code (bark.__code__)</Td>
            <Td>바이트코드, 인자 수, 지역 이름, 상수 테이블</Td>
          </tr>
        </tbody>
      </TableWrap>
      <H3>대표 필드</H3>
      <Ul>
        <li>
          <InlineCode>co_name</InlineCode> — 'bark'
        </li>
        <li>
          <InlineCode>co_argcount</InlineCode> — 1 (self)
        </li>
        <li>
          <InlineCode>co_varnames</InlineCode> — ('self',)
        </li>
        <li>
          <InlineCode>co_consts</InlineCode> — None, 'woof' 등
        </li>
        <li>
          <InlineCode>co_names</InlineCode> — print 같은 이름
        </li>
        <li>
          <InlineCode>co_code</InlineCode> — 실제 바이트코드
        </li>
      </Ul>
      <P>
        호출은 method → function → <InlineCode>__code__</InlineCode> 순으로 내려갑니다. bound method는
        코드 객체를 복사하지 않습니다. <InlineCode>my_dog.bark.__func__.__code__</InlineCode>가 그
        본체입니다.
      </P>
      <CodeBlock
        code={`import dis
dis.dis(bark)
# LOAD_GLOBAL print
# LOAD_CONST 'woof'
# CALL
# POP_TOP
# LOAD_CONST None
# RETURN_VALUE`}
        caption="dis가 읽는 대상이 바로 __code__"
      />
    </>
  );
}

function DictVsDot() {
  return (
    <>
      <P>
        일반 인스턴스 메서드에서는 둘이 같은 함수 객체를 가리킵니다. 꺼내가는 길이 다릅니다.
      </P>
      <LookupLab />
      <P>
        <InlineCode>Dog.__dict__["bark"]</InlineCode>는 저장칸입니다.{" "}
        <InlineCode>Dog.bark</InlineCode>는 조회 결과입니다. 함수의 <InlineCode>__get__(None, Dog)</InlineCode>가
        원본을 그대로 돌려주기 때문에 <InlineCode>is</InlineCode>가 True입니다.
      </P>
      <P>
        인스턴스에서는 갈라집니다. <InlineCode>my_dog.bark</InlineCode>는 원본이 아니라{" "}
        <InlineCode>MethodType</InlineCode>입니다. 원본 설명이 필요할 때만 dict를 엽니다. 일상 호출은
        점 접근이 맞습니다.
      </P>
      <H3>다른 디스크립터는 반드시 갈라진다</H3>
      <TableWrap>
        <thead>
          <tr>
            <Th>정의</Th>
            <Th>__dict__의 값</Th>
            <Th>Cls.name</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>def f(self)</Td>
            <Td>function</Td>
            <Td>같은 function</Td>
          </tr>
          <tr>
            <Td>@classmethod</Td>
            <Td>classmethod</Td>
            <Td>클래스에 묶인 method</Td>
          </tr>
          <tr>
            <Td>@staticmethod</Td>
            <Td>staticmethod</Td>
            <Td>원본 함수</Td>
          </tr>
          <tr>
            <Td>@property</Td>
            <Td>property</Td>
            <Td>getter 결과 (클래스 접근은 구현에 따름)</Td>
          </tr>
        </tbody>
      </TableWrap>
    </>
  );
}

function FnGet() {
  return (
    <>
      <P>
        설명에 나오는 <InlineCode>function.__get__(my_dog, Dog)</InlineCode>의 function은 변수 이름이
        아닙니다. <InlineCode>Dog</InlineCode> 안에 들어 있는 <InlineCode>bark</InlineCode> 함수 객체,
        즉 그 객체의 타입 이름입니다.
      </P>
      <CodeBlock
        code={`f = Dog.__dict__["bark"]
type(f)                 # function
f.__get__(my_dog, Dog)  # bound method`}
      />
      <P>
        <InlineCode>my_dog.bark</InlineCode>는 함수를 직접 꺼내지 않습니다. 인스턴스 dict에 없고,
        클래스 dict에서 함수를 찾고, 그 함수가 디스크립터이므로 <InlineCode>__get__</InlineCode>를
        호출합니다. 모든 일반 함수는 처음부터 이 <InlineCode>__get__</InlineCode>를 갖고 있습니다.
        그래서 <InlineCode>def</InlineCode>만 해도 <InlineCode>self</InlineCode>가 붙습니다.
      </P>
    </>
  );
}

function Bound() {
  return (
    <>
      <P>
        <InlineCode>__code__</InlineCode>, <InlineCode>__globals__</InlineCode>,{" "}
        <InlineCode>__get__</InlineCode>, <InlineCode>__name__</InlineCode>은 바운드 메서드의 실체가
        아닙니다. 그건 원본 함수의 속성입니다.
      </P>
      <P>
        바운드 메서드는 <InlineCode>types.MethodType</InlineCode>입니다. 핵심 슬롯은 둘입니다.
      </P>
      <TableWrap>
        <thead>
          <tr>
            <Th>속성</Th>
            <Th>이 예제</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>__func__</Td>
            <Td>Dog.__dict__["bark"]</Td>
          </tr>
          <tr>
            <Td>__self__</Td>
            <Td>my_dog</Td>
          </tr>
        </tbody>
      </TableWrap>
      <P>
        호출은 <InlineCode>__func__(__self__)</InlineCode>, 즉 <InlineCode>bark(my_dog)</InlineCode>
        입니다. 이름과 바이트코드는 <InlineCode>__func__</InlineCode>에서 위임되어 읽힐 뿐입니다.
      </P>
      <Callout title="세 층">
        <P>
          1) code — 바이트코드. 2) function — 클래스에 하나. 3) method — 조회마다 생기는 (함수,
          인스턴스) 쌍.
        </P>
      </Callout>
    </>
  );
}

function GetIo() {
  return (
    <>
      <P>
        <InlineCode>__get__</InlineCode>는 디스크립터의 읽기 훅입니다. 점 접근이 자동으로 부릅니다.
      </P>
      <CodeBlock code={"descriptor.__get__(self, instance, owner=None)"} />
      <Ul>
        <li>self — 디스크립터 자신. 여기서는 bark 함수</li>
        <li>instance — 꺼낸 인스턴스. 클래스에서 꺼내면 None</li>
        <li>owner — 속성이 정의된 클래스. 보통 Dog</li>
      </Ul>
      <P>출력 타입은 정해져 있지 않습니다. 구현이 돌려주는 값이 obj.attr이 됩니다.</P>
      <GetLab />
      <CodeBlock
        code={`def __get__(self, instance, owner=None):
    if instance is None:
        return self
    return types.MethodType(self, instance)`}
        caption="함수 __get__의 개념적 구현. owner는 classmethod가 cls로 씁니다."
      />
      <P>
        dict로 꺼내면 <InlineCode>__get__</InlineCode>를 건너뜁니다. print의 None은{" "}
        <InlineCode>__get__</InlineCode>의 출력이 아니라, 이미 만들어진 메서드를 호출한 출력입니다.
      </P>
    </>
  );
}

function MethodTypeCh() {
  return (
    <>
      <P>
        <InlineCode>types.MethodType(함수, 인스턴스)</InlineCode>는 bound method를 만드는 생성자입니다.
        함수 <InlineCode>__get__</InlineCode>가 인스턴스 접근에서 하는 일이 이것입니다.
      </P>
      <CodeBlock
        code={`import types
f = Dog.__dict__["bark"]
m = types.MethodType(f, my_dog)
m()   # woof`}
      />
      <P>
        첫 인자를 메서드 정의의 self와 혼동하지 마세요. <InlineCode>__get__</InlineCode> 안의 self는
        함수 객체입니다. 만들어진 메서드의 <InlineCode>__self__</InlineCode>가 호출 때의 self,
        즉 my_dog입니다.
      </P>
      <P>
        직접 만들어 다른 인스턴스나 다른 함수를 묶을 수도 있습니다. classmethod가 만드는 것도 같은
        method 타입이지만, <InlineCode>__self__</InlineCode>가 클래스입니다.
      </P>
    </>
  );
}

function Verbose() {
  return (
    <>
      <P>
        길게 늘여 쓴 식은 실제 코드 스타일이 아닙니다. 점 하나가 하는 일을 저장 / 프로토콜 / 결과로
        분해한 설명입니다. 평소에는 <InlineCode>my_dog.bark</InlineCode>면 끝입니다.
      </P>
      <P>
        중복처럼 보이는 이유는 같은 객체를 다른 층에서 다시 부르기 때문입니다. 존재하는 값은 함수
        하나, 인스턴스 하나, 클래스 하나입니다.
      </P>
      <Callout title="틀린 표기 / 맞는 호출">
        <P>
          매개변수 이름을 호출에 섞으면{" "}
          <InlineCode>Dog.__dict__["bark"].__get__(self, instance, owner)</InlineCode>처럼
          보입니다. 실제 호출은{" "}
          <InlineCode>Dog.__dict__["bark"].__get__(my_dog, Dog)</InlineCode>입니다. self는
          점 앞의 함수이고, 손으로 넣지 않습니다.
        </P>
      </Callout>
      <P>
        프로토콜이 인자를 둘 받는 이유는 점 접근의 맥락이 두 가지이기 때문입니다. 인스턴스와 클래스.
        한 훅으로 함수, classmethod, property를 같이 처리합니다.
      </P>
    </>
  );
}

function Design() {
  return (
    <>
      <P>
        복잡해 보이는 이유는 매일 쓰는 <InlineCode>obj.method()</InlineCode> 뒤에 저장·조회·묶기·호출을
        한 메커니즘으로 몰아 넣었기 때문입니다. 목표는 “메서드만 특별 취급”이 아니라 속성 조회 규칙을
        하나로 만드는 쪽에 가깝습니다.
      </P>
      <H3>인스턴스마다 함수를 복사하지 않는다</H3>
      <P>
        개 10만 마리여도 bark 코드는 하나면 됩니다. 일급 함수를 유지하면서{" "}
        <InlineCode>dog.bark</InlineCode>를 값으로 넘기려면 (함수, self)를 붙인 작은 객체가
        필요합니다. 그게 method입니다.
      </P>
      <H3>점 문법을 하나로</H3>
      <P>
        데이터, 메서드, property, classmethod가 모두 <InlineCode>obj.이름</InlineCode>입니다. 저장은
        “이름 → 원본”, 조회는 원본이 스스로 모습을 정합니다. 함수도 그 훅을 쓰는 디스크립터입니다.
        메서드만 보면 과하고, 속성 시스템 전체로 보면 규칙이 하나라서 작습니다.
      </P>
      <H3>내부가 노출된 이유</H3>
      <P>
        Python은 <InlineCode>__dict__</InlineCode>와 디스크립터를 숨기지 않습니다. 런타임 패치,
        데코레이터, ORM 필드, mock이 같은 길을 씁니다. 대가는 처음 보면 단계가 많다는 것입니다.
      </P>
      <H3>쓰지 않은 대안</H3>
      <Ul>
        <li>인스턴스에 메서드를 심기 — 메모리, 패치 불일치</li>
        <li>bark(my_dog)만 허용 — 콜백과 일급 메서드가 불편</li>
        <li>문법 분리 — 사용자 정의 속성이 이급이 됨</li>
      </Ul>
      <P>
        Python 3는 unbound method를 없애 클래스 접근을 그냥 함수로 단순화했습니다. 지금 길이는 특수
        케이스를 문법에 안 넣고 함수 객체 한쪽에 몰아 둔 대가입니다.
      </P>
    </>
  );
}

function Cache() {
  return (
    <>
      <P>
        CPython은 <InlineCode>my_dog.bark is my_dog.bark</InlineCode>가 False가 되도록, 조회마다 새
        method를 만듭니다. 인스턴스에 캐시하면 편해 보이지만 메모리와 의미가 흔들립니다. 토글로 확인해
        보세요.
      </P>
      <CacheLab />
      <H3>메모리</H3>
      <P>
        래퍼는 작아도 객체입니다. 인스턴스마다 한 번이라도 꺼낸 메서드를 dict에 남기면, 함수 본체는
        하나인데 래퍼만 인스턴스 수 × 메서드 수만큼 남습니다. 지금 방식은 조회가 끝나면 래퍼를 버릴 수
        있습니다.
      </P>
      <H3>일관성</H3>
      <P>
        조회 순서는 인스턴스 dict → 클래스 dict입니다. 캐시하는 순간 그 이름은 데이터 속성이 되어
        클래스 쪽 함수를 가립니다. 클래스를 패치해도 인스턴스는 옛 함수를 부릅니다. 사용자가 고의로
        덮어쓰는 것과 최적화 캐시가 같은 칸을 쓰게 됩니다.
      </P>
      <P>
        지금 약속은 단순합니다. 원본은 클래스에만 있다. 조회는 그때의 (함수, self) 뷰다. 그 뷰의
        정체성은 조회마다 달라도, 의미는 항상 “지금 클래스의 함수를 이 인스턴스에 묶은 것”입니다.
      </P>
    </>
  );
}

function Model() {
  return (
    <>
      <P>매일 들고 다닐 문장입니다.</P>
      <Callout title="한 줄">
        <P>
          코드는 클래스에 하나, 인스턴스는 데이터만 들고, 점 접근은 저장된 값이 아니라 지금 어떻게
          보일지를 계산한다.
        </P>
      </Callout>
      <H3>세 층</H3>
      <Ul>
        <li>code — 바이트코드</li>
        <li>function — 코드 + 전역 + __get__. 클래스에 하나</li>
        <li>method — 함수 + 인스턴스. 조회 때 생기는 뷰</li>
      </Ul>
      <H3>점 하나</H3>
      <CodeBlock
        code={`obj.이름
  = 원본을 찾는다
    디스크립터면 __get__(obj, 클래스)
    아니면 원본 그대로

인스턴스  Dog.bark함수.__get__(my_dog, Dog) → MethodType
클래스    __get__(None, Dog) → 함수
dict      __get__ 안 탐 → 원본`}
      />
      <H3>실행 한 줄</H3>
      <CodeBlock
        code={`class Dog          → type + function(+ __code__)
my_dog = Dog()     → 데이터 주머니
print(my_dog.bark) → 임시 method의 repr
print(my_dog.bark())
                   → 또 임시 method
                   → bark(my_dog)
                   → woof, 반환 None
                   → print(None)`}
      />
      <H3>접으면</H3>
      <P>
        함수는 Dog에 있다. <InlineCode>my_dog.bark</InlineCode>는 그 함수를 my_dog에 잠시 붙인 것이다.
        <InlineCode>()</InlineCode>는 그 함수를 my_dog로 호출하는 것이다.
      </P>
    </>
  );
}
