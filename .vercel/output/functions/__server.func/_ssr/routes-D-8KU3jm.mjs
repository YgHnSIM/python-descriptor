import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as ChevronLeft, i as ChevronRight, o as BookOpen, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { i as SAMPLE_CODE, n as Route, r as CHAPTERS } from "./router-Cdc37iCl.mjs";
import { a as DialogPortal, c as Slot, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D-8KU3jm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors transition-transform duration-150 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:opacity-90",
			secondary: "bg-elevated text-fg border border-border hover:border-border-strong",
			ghost: "text-fg hover:bg-elevated",
			outline: "border border-border bg-surface text-fg hover:border-border-strong"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Sheet({ open, onOpenChange, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-40 bg-fg/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: cn("fixed inset-y-0 left-0 z-50 flex w-[min(20rem,92vw)] flex-col", "border-r border-border bg-surface p-5 shadow-xl"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-display text-lg font-semibold tracking-tight",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
					className: "inline-flex size-11 items-center justify-center rounded-md hover:bg-elevated",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "닫기"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 flex-1 overflow-y-auto",
				children
			})]
		})] })
	});
}
function CacheLab() {
	const [cached, setCached] = (0, import_react.useState)(false);
	const [patched, setPatched] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-6 overflow-hidden rounded-xl border border-border bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2 border-b border-border p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: cached ? "default" : "secondary",
					onClick: () => setCached((v) => !v),
					children: cached ? "인스턴스에 캐시함" : "캐시 없음 (실제 CPython)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: patched ? "default" : "secondary",
					onClick: () => setPatched((v) => !v),
					children: patched ? "Dog.bark 교체됨" : "클래스 패치 전"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 p-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Dog.__dict__['bark']",
						v: patched ? "new_bark" : "원래 함수"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "my_dog.__dict__",
						v: cached ? "bark → method 보관" : "bark 없음"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "my_dog.bark()",
						v: cached && patched ? "옛 bark (캐시)" : patched ? "new_bark" : "원래 bark"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border-t border-border px-4 py-3 text-sm text-muted",
				children: cached ? "캐시하면 클래스 교체가 이 인스턴스에 안 보입니다. 덮어쓰기와 최적화 캐시도 같은 칸을 씁니다." : (!cached || !patched ? patched : false) || patched ? "캐시가 없으면 다음 조회는 항상 지금 클래스에 있는 함수를 묶습니다." : "캐시가 없으면 메서드 래퍼는 조회가 끝나면 버려집니다."
			})
		]
	});
}
function Stat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-elevated px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[0.7rem] text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm font-medium",
			children: v
		})]
	});
}
function CodeBlock({ code, caption, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("overflow-hidden rounded-xl border border-border bg-code", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "overflow-x-auto p-4 font-mono text-sm leading-relaxed text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: code })
		}), caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "border-t border-border px-4 py-2 text-xs text-muted",
			children: caption
		}) : null]
	});
}
function InlineCode({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
		className: "rounded-sm bg-code px-1 py-0.5 font-mono text-[0.85em] text-ink",
		children
	});
}
function GetLab() {
	const [kind, setKind] = (0, import_react.useState)("inst");
	const inst = kind === "inst";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-6 overflow-hidden rounded-xl border border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2 border-b border-border p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: inst ? "default" : "secondary",
				onClick: () => setKind("inst"),
				children: "인스턴스에서"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: !inst ? "default" : "secondary",
				onClick: () => setKind("cls"),
				children: "클래스에서"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 p-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
				children: "입력"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "space-y-2 font-mono text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["self = ", "<function Dog.bark>"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["instance = ", inst ? "my_dog" : "None"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "owner = Dog" })
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
					children: "출력"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-sm",
					children: inst ? "<bound method Dog.bark of my_dog>" : "<function Dog.bark>"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: inst ? "types.MethodType(함수, my_dog). 호출하면 bark(my_dog)." : "함수 자기 자신. 그래서 Dog.bark is Dog.__dict__[\"bark\"] 가 True."
				})
			] })]
		})]
	});
}
var MODES = [
	{
		id: "dict",
		label: "저장소",
		expr: "Dog.__dict__[\"bark\"]"
	},
	{
		id: "cls",
		label: "클래스 조회",
		expr: "Dog.bark"
	},
	{
		id: "inst",
		label: "인스턴스 조회",
		expr: "my_dog.bark"
	}
];
var RESULT = {
	dict: {
		type: "function",
		sameAsDict: "원본 그 자체",
		get: "__get__를 타지 않음",
		note: "클래스 네임스페이스에 넣어 둔 값입니다. 디스크립터 프로토콜을 건너뜁니다."
	},
	cls: {
		type: "function",
		sameAsDict: "is → True (함수의 특수 경우)",
		get: "__get__(None, Dog) → 함수 자신",
		note: "점 접근이지만 함수 __get__가 원본을 그대로 돌려줍니다. 하는 일은 dict와 다릅니다."
	},
	inst: {
		type: "method",
		sameAsDict: "is → False",
		get: "__get__(my_dog, Dog) → MethodType",
		note: "같은 원본 함수인데, 조회 결과가 임시 bound method가 됩니다."
	}
};
function LookupLab() {
	const [mode, setMode] = (0, import_react.useState)("dict");
	const r = RESULT[mode];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-6 overflow-hidden rounded-xl border border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2 border-b border-border p-3",
			children: MODES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: mode === m.id ? "default" : "secondary",
				onClick: () => setMode(m.id),
				children: m.label
			}, m.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 p-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 font-mono text-sm text-primary",
				children: MODES.find((m) => m.id === mode)?.expr
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "space-y-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between gap-3 border-b border-border py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "결과 타입"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-mono",
							children: r.type
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between gap-3 border-b border-border py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "원본과 is"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-right",
							children: r.sameAsDict
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between gap-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "__get__"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "max-w-56 text-right font-mono text-xs",
							children: r.get
						})]
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("text-sm leading-relaxed text-muted"),
				children: r.note
			})]
		})]
	});
}
function P({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-4 max-w-prose text-base text-fg",
		children
	});
}
function H3({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "font-display mb-3 mt-10 text-xl font-semibold tracking-tight text-fg first:mt-0",
		children
	});
}
function Ul({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mb-5 max-w-prose list-disc space-y-2 pl-5 text-base",
		children
	});
}
function Callout({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "my-6 rounded-xl border border-border bg-surface p-4 md:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-base",
			children
		})]
	});
}
function TableWrap({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "my-6 overflow-x-auto rounded-xl border border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
			className: "w-full min-w-lg text-left text-sm",
			children
		})
	});
}
function Th({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
		className: cn("border-b border-border bg-elevated px-3 py-2.5 font-medium", className),
		children
	});
}
function Td({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
		className: cn("border-b border-border px-3 py-2.5 align-top", className),
		children
	});
}
var STEPS = [
	{
		title: "class Dog",
		out: "",
		note: "클래스 객체와 bark 함수(그리고 그 안의 code object)가 생깁니다. 인스턴스는 아직 없습니다.",
		objects: [
			{
				id: "Dog",
				label: "Dog",
				kind: "type",
				live: true
			},
			{
				id: "fn",
				label: "bark 함수",
				kind: "function",
				live: true
			},
			{
				id: "code",
				label: "__code__",
				kind: "code",
				live: true
			},
			{
				id: "dog",
				label: "my_dog",
				kind: "instance",
				live: false
			},
			{
				id: "m1",
				label: "method #1",
				kind: "method",
				live: false
			},
			{
				id: "m2",
				label: "method #2",
				kind: "method",
				live: false
			}
		]
	},
	{
		title: "my_dog = Dog()",
		out: "",
		note: "빈 __dict__를 가진 인스턴스 하나. bark는 복사되지 않습니다.",
		objects: [
			{
				id: "Dog",
				label: "Dog",
				kind: "type",
				live: true
			},
			{
				id: "fn",
				label: "bark 함수",
				kind: "function",
				live: true
			},
			{
				id: "code",
				label: "__code__",
				kind: "code",
				live: true
			},
			{
				id: "dog",
				label: "my_dog",
				kind: "instance",
				live: true
			},
			{
				id: "m1",
				label: "method #1",
				kind: "method",
				live: false
			},
			{
				id: "m2",
				label: "method #2",
				kind: "method",
				live: false
			}
		]
	},
	{
		title: "print(my_dog.bark)",
		out: "<bound method Dog.bark of <Dog object>>",
		note: "조회가 함수.__get__(my_dog, Dog)를 타고 임시 bound method를 만듭니다. 그 repr이 출력됩니다.",
		objects: [
			{
				id: "Dog",
				label: "Dog",
				kind: "type",
				live: true
			},
			{
				id: "fn",
				label: "bark 함수",
				kind: "function",
				live: true
			},
			{
				id: "code",
				label: "__code__",
				kind: "code",
				live: true
			},
			{
				id: "dog",
				label: "my_dog",
				kind: "instance",
				live: true
			},
			{
				id: "m1",
				label: "method #1",
				kind: "method",
				live: true
			},
			{
				id: "m2",
				label: "method #2",
				kind: "method",
				live: false
			}
		]
	},
	{
		title: "print(my_dog.bark())",
		out: "woof\nNone",
		note: "조회가 또 일어나 다른 method가 생깁니다. 호출은 bark(my_dog). 반환 None을 바깥 print가 출력합니다.",
		objects: [
			{
				id: "Dog",
				label: "Dog",
				kind: "type",
				live: true
			},
			{
				id: "fn",
				label: "bark 함수",
				kind: "function",
				live: true
			},
			{
				id: "code",
				label: "__code__",
				kind: "code",
				live: true
			},
			{
				id: "dog",
				label: "my_dog",
				kind: "instance",
				live: true
			},
			{
				id: "m1",
				label: "method #1",
				kind: "method",
				live: false
			},
			{
				id: "m2",
				label: "method #2",
				kind: "method",
				live: true
			}
		]
	}
];
var KIND = {
	type: "클래스",
	function: "함수",
	code: "코드",
	instance: "인스턴스",
	method: "메서드"
};
function RuntimeLab() {
	const [i, setI] = (0, import_react.useState)(0);
	const step = STEPS[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-6 overflow-hidden rounded-xl border border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-medium",
				children: [
					"단계 ",
					i + 1,
					" / ",
					STEPS.length,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 font-mono text-muted",
						children: step.title
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "secondary",
					onClick: () => setI((n) => Math.max(0, n - 1)),
					children: "이전"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					onClick: () => setI((n) => Math.min(STEPS.length - 1, n + 1)),
					disabled: i === STEPS.length - 1,
					children: "다음 단계"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 p-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
				children: step.objects.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("rounded-lg border px-3 py-2 text-sm transition-opacity duration-200", o.live ? "border-border-strong bg-elevated text-fg" : "border-border bg-bg text-subtle opacity-40"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.65rem] tracking-wide text-muted uppercase",
						children: KIND[o.kind]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs",
						children: o.label
					})]
				}, o.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-medium text-muted uppercase",
					children: "표준 출력"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "min-h-20 rounded-lg bg-ink p-3 font-mono text-xs text-primary-fg",
					children: step.out || "(출력 없음)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: step.note
				})
			] })]
		})]
	});
}
function ChapterBody({ id }) {
	switch (id) {
		case "prologue": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prologue, {});
		case "runtime": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Runtime, {});
		case "code": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeCh, {});
		case "dict-vs-dot": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DictVsDot, {});
		case "function-get": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FnGet, {});
		case "bound-method": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bound, {});
		case "get-io": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GetIo, {});
		case "methodtype": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodTypeCh, {});
		case "verbose": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Verbose, {});
		case "design": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Design, {});
		case "cache": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cache, {});
		case "model": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Model, {});
	}
}
function Prologue() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"이 강의는 한 조각의 Python 코드에서 출발합니다. 질문은 단순합니다. 이 네 줄이 실행될 때 무엇이 생기고, ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "my_dog.bark" }),
			"는 왜 함수가 아니라 메서드로 보이며, 그 설계는 왜 그렇게 생겼는가."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
			code: SAMPLE_CODE,
			caption: "강의 전체의 표본 코드"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"겉보기 동작은 누구나 압니다. 인스턴스에서 메서드를 부르면 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "self" }),
			"가 자동으로 들어갑니다. 그 한 줄을 지탱하려고 언어는 저장, 조회, 묶기, 호출을 한 프로토콜로 접어 두었습니다. 평소에는 접힌 채로 쓰면 되고, 이 강의는 그 접힌 면을 순서대로 펼칩니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "강의가 가는 길" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ul, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "실행 연대기: 클래스, 함수, 인스턴스, 임시 메서드" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "원본 함수와 그 안의 바이트코드" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "점 접근이 저장소 조회와 다른 이유" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
				"디스크립터 ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__get__" }),
				"와 ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "MethodType" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "설계 의도와, 메서드를 인스턴스에 캐시하지 않는 이유" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "매일 들고 다닐 멘탈 모델" })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "이 강의에서 쓰지 않는 것",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				"일상 코드에 ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "Dog.__dict__[\"bark\"].__get__(...)" }),
				"를 적으라는 뜻이 아닙니다. 그건 점 하나 뒤에 숨은 일을 설명용으로 분해한 식입니다. 호출은 언제나",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "my_dog.bark()" }),
				"면 충분합니다."
			] })
		})
	] });
}
function Runtime() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "객체를 “변수 이름”이 아니라 “언제 생기고 언제 사라지는 값”으로 보면 그림이 단순해집니다. 아래 실험에서 단계를 눌러 보세요." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RuntimeLab, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "클래스 정의 시점" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "def bark" }),
			"가 함수 객체 하나를 만듭니다. 클래스 바디가 끝나면",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "type" }),
			"이 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "Dog" }),
			"를 만들고, 그",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__dict__" }),
			"에 같은 함수를 넣습니다. 문자열 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "\"woof\"" }),
			"는 보통 코드 객체의 상수 테이블에 들어갑니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "인스턴스 생성" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "Dog()" }),
			"는 새 인스턴스를 할당하고 기본 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__init__" }),
			"를 부릅니다. ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "my_dog.__dict__" }),
			"는 비어 있습니다. 메서드 코드는 인스턴스마다 복제되지 않습니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "조회와 호출" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "print(my_dog.bark)" }),
			"는 인스턴스 dict에 없으니 클래스에서 함수를 찾고, 함수의 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__get__" }),
			"가 bound method를 만듭니다.",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "print(my_dog.bark())" }),
			"는 그 조회를 한 번 더 한 뒤 호출합니다.",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "bark" }),
			"에 return이 없어 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "None" }),
			"이 나오고, 바깥 print가 그걸 출력합니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "남는 것 / 스쳐 지나가는 것",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "남는 것: 클래스, 함수, 인스턴스, code object. 스쳐 지나가는 것: 조회마다 생기는 method, print가 다루는 None과 출력 문자열. bound method는 참조가 끝나면 GC 대상입니다." })
		})
	] });
}
function CodeCh() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__code__" }),
			"는 함수가 실행할 바이트코드와, 그걸 해석할 정적 정보를 담은 객체입니다. 타입은 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "code" }),
			" (",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "types.CodeType" }),
			"). 함수는 “실행 가능한 래퍼”이고, ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__code__" }),
			"는 그 몸통입니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableWrap, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "객체" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "역할" })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "function (bark)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "이름, 기본 인자, 클로저, 전역, __code__ 포인터" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "code (bark.__code__)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "바이트코드, 인자 수, 지역 이름, 상수 테이블" })] })] })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "대표 필드" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ul, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "co_name" }), " — 'bark'"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "co_argcount" }), " — 1 (self)"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "co_varnames" }), " — ('self',)"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "co_consts" }), " — None, 'woof' 등"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "co_names" }), " — print 같은 이름"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "co_code" }), " — 실제 바이트코드"] })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"호출은 method → function → ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__code__" }),
			" 순으로 내려갑니다. bound method는 코드 객체를 복사하지 않습니다. ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "my_dog.bark.__func__.__code__" }),
			"가 그 본체입니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
			code: `import dis
dis.dis(bark)
# LOAD_GLOBAL print
# LOAD_CONST 'woof'
# CALL
# POP_TOP
# LOAD_CONST None
# RETURN_VALUE`,
			caption: "dis가 읽는 대상이 바로 __code__"
		})
	] });
}
function DictVsDot() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "일반 인스턴스 메서드에서는 둘이 같은 함수 객체를 가리킵니다. 꺼내가는 길이 다릅니다." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LookupLab, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "Dog.__dict__[\"bark\"]" }),
			"는 저장칸입니다.",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "Dog.bark" }),
			"는 조회 결과입니다. 함수의 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__get__(None, Dog)" }),
			"가 원본을 그대로 돌려주기 때문에 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "is" }),
			"가 True입니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"인스턴스에서는 갈라집니다. ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "my_dog.bark" }),
			"는 원본이 아니라",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "MethodType" }),
			"입니다. 원본 설명이 필요할 때만 dict를 엽니다. 일상 호출은 점 접근이 맞습니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "다른 디스크립터는 반드시 갈라진다" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableWrap, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "정의" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "__dict__의 값" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Cls.name" })
		] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "def f(self)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "function" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "같은 function" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "@classmethod" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "classmethod" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "클래스에 묶인 method" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "@staticmethod" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "staticmethod" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "원본 함수" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "@property" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "property" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "getter 결과 (클래스 접근은 구현에 따름)" })
			] })
		] })] })
	] });
}
function FnGet() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"설명에 나오는 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "function.__get__(my_dog, Dog)" }),
			"의 function은 변수 이름이 아닙니다. ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "Dog" }),
			" 안에 들어 있는 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "bark" }),
			" 함수 객체, 즉 그 객체의 타입 이름입니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, { code: `f = Dog.__dict__["bark"]
type(f)                 # function
f.__get__(my_dog, Dog)  # bound method` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "my_dog.bark" }),
			"는 함수를 직접 꺼내지 않습니다. 인스턴스 dict에 없고, 클래스 dict에서 함수를 찾고, 그 함수가 디스크립터이므로 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__get__" }),
			"를 호출합니다. 모든 일반 함수는 처음부터 이 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__get__" }),
			"를 갖고 있습니다. 그래서 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "def" }),
			"만 해도 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "self" }),
			"가 붙습니다."
		] })
	] });
}
function Bound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__code__" }),
			", ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__globals__" }),
			",",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__get__" }),
			", ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__name__" }),
			"은 바운드 메서드의 실체가 아닙니다. 그건 원본 함수의 속성입니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"바운드 메서드는 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "types.MethodType" }),
			"입니다. 핵심 슬롯은 둘입니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableWrap, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "속성" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "이 예제" })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "__func__" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "Dog.__dict__[\"bark\"]" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "__self__" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: "my_dog" })] })] })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"호출은 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__func__(__self__)" }),
			", 즉 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "bark(my_dog)" }),
			"입니다. 이름과 바이트코드는 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__func__" }),
			"에서 위임되어 읽힐 뿐입니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "세 층",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "1) code — 바이트코드. 2) function — 클래스에 하나. 3) method — 조회마다 생기는 (함수, 인스턴스) 쌍." })
		})
	] });
}
function GetIo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__get__" }), "는 디스크립터의 읽기 훅입니다. 점 접근이 자동으로 부릅니다."] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, { code: "descriptor.__get__(self, instance, owner=None)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ul, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "self — 디스크립터 자신. 여기서는 bark 함수" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "instance — 꺼낸 인스턴스. 클래스에서 꺼내면 None" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "owner — 속성이 정의된 클래스. 보통 Dog" })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "출력 타입은 정해져 있지 않습니다. 구현이 돌려주는 값이 obj.attr이 됩니다." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GetLab, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
			code: `def __get__(self, instance, owner=None):
    if instance is None:
        return self
    return types.MethodType(self, instance)`,
			caption: "함수 __get__의 개념적 구현. owner는 classmethod가 cls로 씁니다."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"dict로 꺼내면 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__get__" }),
			"를 건너뜁니다. print의 None은",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__get__" }),
			"의 출력이 아니라, 이미 만들어진 메서드를 호출한 출력입니다."
		] })
	] });
}
function MethodTypeCh() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "types.MethodType(함수, 인스턴스)" }),
			"는 bound method를 만드는 생성자입니다. 함수 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__get__" }),
			"가 인스턴스 접근에서 하는 일이 이것입니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, { code: `import types
f = Dog.__dict__["bark"]
m = types.MethodType(f, my_dog)
m()   # woof` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"첫 인자를 메서드 정의의 self와 혼동하지 마세요. ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__get__" }),
			" 안의 self는 함수 객체입니다. 만들어진 메서드의 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__self__" }),
			"가 호출 때의 self, 즉 my_dog입니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"직접 만들어 다른 인스턴스나 다른 함수를 묶을 수도 있습니다. classmethod가 만드는 것도 같은 method 타입이지만, ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__self__" }),
			"가 클래스입니다."
		] })
	] });
}
function Verbose() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"길게 늘여 쓴 식은 실제 코드 스타일이 아닙니다. 점 하나가 하는 일을 저장 / 프로토콜 / 결과로 분해한 설명입니다. 평소에는 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "my_dog.bark" }),
			"면 끝입니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "중복처럼 보이는 이유는 같은 객체를 다른 층에서 다시 부르기 때문입니다. 존재하는 값은 함수 하나, 인스턴스 하나, 클래스 하나입니다." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "틀린 표기 / 맞는 호출",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
				"매개변수 이름을 호출에 섞으면",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "Dog.__dict__[\"bark\"].__get__(self, instance, owner)" }),
				"처럼 보입니다. 실제 호출은",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "Dog.__dict__[\"bark\"].__get__(my_dog, Dog)" }),
				"입니다. self는 점 앞의 함수이고, 손으로 넣지 않습니다."
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "프로토콜이 인자를 둘 받는 이유는 점 접근의 맥락이 두 가지이기 때문입니다. 인스턴스와 클래스. 한 훅으로 함수, classmethod, property를 같이 처리합니다." })
	] });
}
function Design() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"복잡해 보이는 이유는 매일 쓰는 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "obj.method()" }),
			" 뒤에 저장·조회·묶기·호출을 한 메커니즘으로 몰아 넣었기 때문입니다. 목표는 “메서드만 특별 취급”이 아니라 속성 조회 규칙을 하나로 만드는 쪽에 가깝습니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "인스턴스마다 함수를 복사하지 않는다" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"개 10만 마리여도 bark 코드는 하나면 됩니다. 일급 함수를 유지하면서",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "dog.bark" }),
			"를 값으로 넘기려면 (함수, self)를 붙인 작은 객체가 필요합니다. 그게 method입니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "점 문법을 하나로" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"데이터, 메서드, property, classmethod가 모두 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "obj.이름" }),
			"입니다. 저장은 “이름 → 원본”, 조회는 원본이 스스로 모습을 정합니다. 함수도 그 훅을 쓰는 디스크립터입니다. 메서드만 보면 과하고, 속성 시스템 전체로 보면 규칙이 하나라서 작습니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "내부가 노출된 이유" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"Python은 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "__dict__" }),
			"와 디스크립터를 숨기지 않습니다. 런타임 패치, 데코레이터, ORM 필드, mock이 같은 길을 씁니다. 대가는 처음 보면 단계가 많다는 것입니다."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "쓰지 않은 대안" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ul, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "인스턴스에 메서드를 심기 — 메모리, 패치 불일치" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "bark(my_dog)만 허용 — 콜백과 일급 메서드가 불편" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "문법 분리 — 사용자 정의 속성이 이급이 됨" })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Python 3는 unbound method를 없애 클래스 접근을 그냥 함수로 단순화했습니다. 지금 길이는 특수 케이스를 문법에 안 넣고 함수 객체 한쪽에 몰아 둔 대가입니다." })
	] });
}
function Cache() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"CPython은 ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "my_dog.bark is my_dog.bark" }),
			"가 False가 되도록, 조회마다 새 method를 만듭니다. 인스턴스에 캐시하면 편해 보이지만 메모리와 의미가 흔들립니다. 토글로 확인해 보세요."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CacheLab, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "메모리" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "래퍼는 작아도 객체입니다. 인스턴스마다 한 번이라도 꺼낸 메서드를 dict에 남기면, 함수 본체는 하나인데 래퍼만 인스턴스 수 × 메서드 수만큼 남습니다. 지금 방식은 조회가 끝나면 래퍼를 버릴 수 있습니다." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "일관성" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "조회 순서는 인스턴스 dict → 클래스 dict입니다. 캐시하는 순간 그 이름은 데이터 속성이 되어 클래스 쪽 함수를 가립니다. 클래스를 패치해도 인스턴스는 옛 함수를 부릅니다. 사용자가 고의로 덮어쓰는 것과 최적화 캐시가 같은 칸을 쓰게 됩니다." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "지금 약속은 단순합니다. 원본은 클래스에만 있다. 조회는 그때의 (함수, self) 뷰다. 그 뷰의 정체성은 조회마다 달라도, 의미는 항상 “지금 클래스의 함수를 이 인스턴스에 묶은 것”입니다." })
	] });
}
function Model() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "매일 들고 다닐 문장입니다." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "한 줄",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "코드는 클래스에 하나, 인스턴스는 데이터만 들고, 점 접근은 저장된 값이 아니라 지금 어떻게 보일지를 계산한다." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "세 층" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ul, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "code — 바이트코드" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "function — 코드 + 전역 + __get__. 클래스에 하나" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "method — 함수 + 인스턴스. 조회 때 생기는 뷰" })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "점 하나" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, { code: `obj.이름
  = 원본을 찾는다
    디스크립터면 __get__(obj, 클래스)
    아니면 원본 그대로

인스턴스  Dog.bark함수.__get__(my_dog, Dog) → MethodType
클래스    __get__(None, Dog) → 함수
dict      __get__ 안 탐 → 원본` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "실행 한 줄" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, { code: `class Dog          → type + function(+ __code__)
my_dog = Dog()     → 데이터 주머니
print(my_dog.bark) → 임시 method의 repr
print(my_dog.bark())
                   → 또 임시 method
                   → bark(my_dog)
                   → woof, 반환 None
                   → print(None)` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "접으면" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"함수는 Dog에 있다. ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "my_dog.bark" }),
			"는 그 함수를 my_dog에 잠시 붙인 것이다.",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineCode, { children: "()" }),
			"는 그 함수를 my_dog로 호출하는 것이다."
		] })
	] });
}
var STORAGE_KEY = "dot-lecture-done";
function loadDone() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		if (!Array.isArray(parsed)) return [];
		return parsed.filter((x) => CHAPTERS.some((c) => c.id === x));
	} catch {
		return [];
	}
}
function LectureApp({ chapter }) {
	const navigate = useNavigate();
	const idx = CHAPTERS.findIndex((c) => c.id === chapter);
	const current = CHAPTERS[idx] ?? CHAPTERS[0];
	const prev = idx > 0 ? CHAPTERS[idx - 1] : null;
	const next = idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;
	const [done, setDone] = (0, import_react.useState)([]);
	const [menu, setMenu] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setDone(loadDone());
	}, []);
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			behavior: "instant"
		});
	}, [chapter]);
	const mark = () => {
		setDone((prevDone) => {
			if (prevDone.includes(current.id)) return prevDone;
			const nextDone = [...prevDone, current.id];
			localStorage.setItem(STORAGE_KEY, JSON.stringify(nextDone));
			return nextDone;
		});
	};
	const go = (id) => {
		setMenu(false);
		navigate({
			to: "/",
			search: { ch: id }
		});
	};
	const progress = (0, import_react.useMemo)(() => Math.round(done.length / CHAPTERS.length * 100), [done.length]);
	const nav = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "강의 목차",
		className: "space-y-1",
		children: CHAPTERS.map((c) => {
			const active = c.id === current.id;
			const seen = done.includes(c.id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => go(c.id),
				className: cn("flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors", active ? "bg-elevated text-fg" : "text-muted hover:bg-elevated/70 hover:text-fg"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 font-mono text-[0.7rem] text-subtle",
					children: c.num
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium text-fg",
						children: c.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block text-xs text-subtle",
						children: [c.kicker, seen ? " · 읽음" : ""]
					})]
				})]
			}, c.id);
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "lg:hidden",
							onClick: () => setMenu(true),
							"aria-label": "목차 열기",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							search: { ch: "prologue" },
							className: "flex min-w-0 items-center gap-2 font-display text-base font-semibold tracking-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: "점 하나의 이면"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-xs text-muted sm:inline",
							children: "Python bound method"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-auto font-mono text-xs text-subtle",
							children: [progress, "%"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-0.5 bg-elevated",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-primary transition-[width] duration-300",
						style: { width: `${progress}%` }
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl lg:grid-cols-[16rem_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "sticky top-16 hidden max-h-[calc(100dvh-4rem)] overflow-y-auto border-r border-border p-4 lg:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 px-3 text-xs font-medium tracking-wide text-muted uppercase",
						children: "목차"
					}), nav]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "min-w-0 px-4 py-8 md:px-10 md:py-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-2 font-mono text-xs text-muted",
							children: [
								current.num,
								" · ",
								current.kicker
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display mb-8 text-3xl font-semibold tracking-tight",
							children: current.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterBody, { id: current.id }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "secondary",
								disabled: !prev,
								onClick: () => prev && go(prev.id),
								className: "justify-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), prev ? prev.title : "처음"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => {
									mark();
									if (next) go(next.id);
								},
								className: "justify-end",
								children: [next ? next.title : "강의 마침", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: menu,
				onOpenChange: setMenu,
				title: "목차",
				children: nav
			})
		]
	});
}
function Home() {
	const { ch } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LectureApp, { chapter: ch });
}
//#endregion
export { Home as component };
