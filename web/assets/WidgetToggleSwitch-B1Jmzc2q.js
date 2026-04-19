import "./rolldown-runtime-DBfy44LZ.js";
import { O as script } from "./vendor-primevue-DBMopt9T.js";
import { A as createBlock, I as createTextVNode, K as mergeModels, L as createVNode, M as createElementBlock, O as computed, Vt as normalizeClass, Wt as toDisplayString, dt as useModel, q as mergeProps, tt as openBlock, vt as withCtx, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-other-Bwg2XU9O.js";
import { n as useI18n } from "./vendor-i18n-B4rt6w-9.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import { t as cn } from "./src-BorKTv-H.js";
import { r as useHideLayoutField } from "./widgetTypes-Dpe-o7oG.js";
import { n as ToggleGroup_default, t as ToggleGroupItem_default } from "./toggle-group-CxN0h4g2.js";
import { a as STANDARD_EXCLUDED_PROPS, o as filterWidgetProps } from "./widgetPropFilter-BK-zKZeC.js";
import { t as WidgetLayoutField_default } from "./WidgetLayoutField-DBPLKUSi.js";
import { t as WidgetInputBaseClass } from "./layout-BO8LRMlM.js";
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetToggleSwitch.vue
var WidgetToggleSwitch_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetToggleSwitch",
	props: /* @__PURE__ */ mergeModels({ widget: {} }, {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const hideLayoutField = useHideLayoutField();
		const { t } = useI18n();
		const filteredProps = computed(() => filterWidgetProps(__props.widget.options, STANDARD_EXCLUDED_PROPS));
		const hasLabels = computed(() => {
			return __props.widget.options?.on != null || __props.widget.options?.off != null;
		});
		function handleOptionChange(value) {
			if (value) modelValue.value = value === "on";
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WidgetLayoutField_default, {
				widget: _ctx.widget,
				"no-border": !hasLabels.value
			}, {
				default: withCtx(({ borderStyle }) => [hasLabels.value ? (openBlock(), createBlock(unref(ToggleGroup_default), {
					key: 0,
					type: "single",
					"model-value": modelValue.value ? "on" : "off",
					disabled: Boolean(_ctx.widget.options?.read_only),
					class: normalizeClass(unref(cn)(unref(WidgetInputBaseClass), "flex w-full min-w-0 items-center justify-center gap-1 p-1")),
					"onUpdate:modelValue": _cache[0] || (_cache[0] = (v) => handleOptionChange(v))
				}, {
					default: withCtx(() => [createVNode(unref(ToggleGroupItem_default), {
						value: "off",
						size: "sm"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.widget.options?.off ?? unref(t)("widgets.boolean.false")), 1)]),
						_: 1
					}), createVNode(unref(ToggleGroupItem_default), {
						value: "on",
						size: "sm"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.widget.options?.on ?? unref(t)("widgets.boolean.true")), 1)]),
						_: 1
					})]),
					_: 1
				}, 8, [
					"model-value",
					"disabled",
					"class"
				])) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(unref(cn)("-m-1 flex w-fit items-center gap-2 rounded-full p-1", unref(hideLayoutField) || "ml-auto", borderStyle))
				}, [createVNode(unref(script), mergeProps({
					modelValue: modelValue.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => modelValue.value = $event)
				}, filteredProps.value, { "aria-label": _ctx.widget.name }), null, 16, ["modelValue", "aria-label"])], 2))]),
				_: 1
			}, 8, ["widget", "no-border"]);
		};
	}
});
//#endregion
export { WidgetToggleSwitch_default as default };

//# sourceMappingURL=WidgetToggleSwitch-B1Jmzc2q.js.map