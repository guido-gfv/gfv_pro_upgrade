import "./rolldown-runtime-DBfy44LZ.js";
import { rt as script } from "./vendor-primevue-DBMopt9T.js";
import { A as createBlock, K as mergeModels, L as createVNode, O as computed, dt as useModel, j as createCommentVNode, k as createBaseVNode, q as mergeProps, tt as openBlock, vt as withCtx, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-other-Bwg2XU9O.js";
import { t as cn } from "./src-BorKTv-H.js";
import { t as Loader_default } from "./Loader-BjJV6X5u.js";
import { o as filterWidgetProps, r as INPUT_EXCLUDED_PROPS } from "./widgetPropFilter-BK-zKZeC.js";
import { t as WidgetLayoutField_default } from "./WidgetLayoutField-DBPLKUSi.js";
import { t as WidgetInputBaseClass } from "./layout-BO8LRMlM.js";
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetInputText.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "relative" };
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetInputText.vue
var WidgetInputText_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetInputText",
	props: /* @__PURE__ */ mergeModels({
		widget: {},
		size: { default: "medium" },
		invalid: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		}
	}, {
		"modelValue": { default: "" },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const filteredProps = computed(() => filterWidgetProps(__props.widget.options, INPUT_EXCLUDED_PROPS));
		const isReadOnly = computed(() => Boolean(__props.widget.options?.read_only || __props.widget.options?.disabled));
		const layoutWidget = computed(() => ({
			name: __props.widget.name,
			label: __props.widget.label,
			borderStyle: cn(__props.widget.borderStyle, __props.invalid && "border border-destructive-background")
		}));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WidgetLayoutField_default, { widget: layoutWidget.value }, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, [_ctx.loading ? (openBlock(), createBlock(Loader_default, {
					key: 0,
					size: "sm",
					class: "absolute top-1/2 left-3 z-10 -translate-y-1/2 text-component-node-foreground"
				})) : createCommentVNode("", true), createVNode(unref(script), mergeProps({
					modelValue: modelValue.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event)
				}, filteredProps.value, {
					class: unref(cn)(unref(WidgetInputBaseClass), "w-full px-4 hover:bg-component-node-widget-background-hovered", _ctx.size === "large" ? "py-3 text-sm" : "py-2 text-xs", _ctx.loading && "pl-9"),
					"aria-label": _ctx.widget.name,
					readonly: isReadOnly.value,
					size: "small",
					pt: { root: "truncate min-w-[4ch]" }
				}), null, 16, [
					"modelValue",
					"class",
					"aria-label",
					"readonly"
				])])]),
				_: 1
			}, 8, ["widget"]);
		};
	}
});
//#endregion
export { WidgetInputText_default as default };

//# sourceMappingURL=WidgetInputText-ClksdoDr.js.map