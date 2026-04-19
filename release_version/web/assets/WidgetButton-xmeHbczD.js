import "./rolldown-runtime-DBfy44LZ.js";
import { I as createTextVNode, L as createVNode, M as createElementBlock, O as computed, Vt as normalizeClass, Wt as toDisplayString, j as createCommentVNode, q as mergeProps, tt as openBlock, vt as withCtx, z as defineComponent } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-other-Bwg2XU9O.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import { t as Button_default } from "./Button-C-moMp8y.js";
import { o as filterWidgetProps, t as BADGE_EXCLUDED_PROPS } from "./widgetPropFilter-BK-zKZeC.js";
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex flex-col gap-1" };
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetButton.vue
var WidgetButton_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetButton",
	props: { widget: {} },
	setup(__props) {
		const props = __props;
		const BUTTON_EXCLUDED_PROPS = [...BADGE_EXCLUDED_PROPS, "iconClass"];
		const filteredProps = computed(() => filterWidgetProps(props.widget.options, BUTTON_EXCLUDED_PROPS));
		const handleClick = () => {
			if (props.widget.callback) props.widget.callback();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(Button_default, mergeProps({
				class: "w-full border-0 bg-component-node-widget-background p-2 text-base-foreground",
				"aria-label": _ctx.widget.label,
				size: "sm",
				variant: "textonly"
			}, filteredProps.value, { onClick: handleClick }), {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.widget.label ?? _ctx.widget.name) + " ", 1), _ctx.widget.options?.iconClass ? (openBlock(), createElementBlock("i", {
					key: 0,
					class: normalizeClass(_ctx.widget.options.iconClass)
				}, null, 2)) : createCommentVNode("", true)]),
				_: 1
			}, 16, ["aria-label"])]);
		};
	}
});
//#endregion
export { WidgetButton_default as default };

//# sourceMappingURL=WidgetButton-xmeHbczD.js.map