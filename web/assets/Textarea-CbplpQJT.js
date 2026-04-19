import "./rolldown-runtime-DBfy44LZ.js";
import { K as mergeModels, M as createElementBlock, N as createPropsRestProxy, dt as useModel, q as mergeProps, tt as openBlock, v as vModelText, yt as withDirectives, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
import { t as cn } from "./src-BorKTv-H.js";
//#endregion
//#region src/components/ui/textarea/Textarea.vue
var Textarea_default = /* @__PURE__ */ defineComponent({
	__name: "Textarea",
	props: /* @__PURE__ */ mergeModels({ class: {} }, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const restAttrs = createPropsRestProxy(__props, ["class"]);
		const modelValue = useModel(__props, "modelValue");
		return (_ctx, _cache) => {
			return withDirectives((openBlock(), createElementBlock("textarea", mergeProps(restAttrs, {
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
				class: unref(cn)("flex min-h-16 w-full rounded-lg border-none bg-secondary-background px-3 py-2 text-sm text-base-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-border-default focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", __props.class)
			}), null, 16)), [[vModelText, modelValue.value]]);
		};
	}
});
//#endregion
export { Textarea_default as t };

//# sourceMappingURL=Textarea-CbplpQJT.js.map