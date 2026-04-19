import "./rolldown-runtime-DBfy44LZ.js";
import { P as script } from "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import { C as Fragment, I as createTextVNode, L as createVNode, M as createElementBlock, O as computed, Vt as normalizeClass, Wt as toDisplayString, dt as useModel, j as createCommentVNode, k as createBaseVNode, rt as renderList, tt as openBlock, vt as withCtx, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-other-Bwg2XU9O.js";
import "./useFeatureFlags-CaushwdG.js";
import "./api-DyWqG5-m.js";
import "./toastStore-VVLBmmzn.js";
import "./vendor-markdown-BJR1tkAv.js";
import "./colorUtil-B4LmkIZp.js";
import "./i18n-Bti21m_L.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import { t as Button_default } from "./Button-C-moMp8y.js";
import { a as useSettingStore } from "./dialogService-DNEvvYnU.js";
import "./formatUtil-BrmPt11w.js";
import "./dialogStore-BzMbsXyV.js";
import "./userStore-BR8OofxE.js";
import "./useErrorHandling-Ch3yRrgJ.js";
import "./downloadUtil-D3N-czcI.js";
import "./useCopyToClipboard-CQ0qJD1x.js";
import "./vendor-tiptap-DCOyDD5A.js";
import "./WaveAudioPlayer-BmrB2yRe.js";
import "./Popover-pEJct6yy.js";
import "./electronDownloadStore-Sv0ABKT3.js";
import "./markdownRendererUtil-DVjNVant.js";
import "./useExternalLink-Ci40lNMZ.js";
//#region src/renderer/extensions/vueNodes/widgets/components/ValueControlPopover.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "w-113 max-w-md space-y-4 p-4" };
var _hoisted_2 = { class: "text-sm/tight text-muted-foreground" };
var _hoisted_3 = { class: "font-medium text-base-foreground" };
var _hoisted_4 = { class: "space-y-2" };
var _hoisted_5 = { class: "flex min-w-0 flex-1 items-center gap-2 text-wrap" };
var _hoisted_6 = { class: "flex size-8 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-secondary-background" };
var _hoisted_7 = {
	key: 1,
	class: "text-xs font-normal text-base-foreground"
};
var _hoisted_8 = { class: "flex min-w-0 flex-1 flex-col gap-0.5" };
var _hoisted_9 = { class: "text-sm/tight font-normal text-base-foreground" };
var _hoisted_10 = { class: "text-sm/tight font-normal text-muted-foreground" };
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/ValueControlPopover.vue
var ValueControlPopover_default = /* @__PURE__ */ defineComponent({
	__name: "ValueControlPopover",
	props: {
		"modelValue": {},
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const settingStore = useSettingStore();
		const controlOptions = [
			{
				mode: "fixed",
				icon: "icon-[lucide--pencil-off]",
				title: "fixed",
				description: "fixedDesc"
			},
			{
				mode: "increment",
				text: "+1",
				title: "increment",
				description: "incrementDesc"
			},
			{
				mode: "decrement",
				text: "-1",
				title: "decrement",
				description: "decrementDesc"
			},
			{
				mode: "randomize",
				icon: "icon-[lucide--shuffle]",
				title: "randomize",
				description: "randomizeDesc"
			}
		];
		const widgetControlMode = computed(() => settingStore.get("Comfy.WidgetControlMode"));
		const controlMode = useModel(__props, "modelValue");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createTextVNode(toDisplayString(_ctx.$t("widgets.valueControl.header.prefix")) + " ", 1),
				createBaseVNode("span", _hoisted_3, toDisplayString(widgetControlMode.value === "before" ? _ctx.$t("widgets.valueControl.header.before") : _ctx.$t("widgets.valueControl.header.after")), 1),
				createTextVNode(" " + toDisplayString(_ctx.$t("widgets.valueControl.header.postfix")), 1)
			]), createBaseVNode("div", _hoisted_4, [(openBlock(), createElementBlock(Fragment, null, renderList(controlOptions, (option) => {
				return createVNode(Button_default, {
					key: option.mode,
					as: "label",
					variant: "textonly",
					size: "lg",
					class: "flex h-[unset] w-full items-center justify-between gap-7 py-2 text-left",
					for: option.mode
				}, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [option.icon ? (openBlock(), createElementBlock("i", {
						key: 0,
						class: normalizeClass([option.icon, "text-base text-base-foreground"])
					}, null, 2)) : createCommentVNode("", true), option.text ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(option.text), 1)) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [createBaseVNode("span", null, toDisplayString(_ctx.$t(`widgets.valueControl.${option.title}`)), 1)]), createBaseVNode("div", _hoisted_10, toDisplayString(_ctx.$t(`widgets.valueControl.${option.description}`)), 1)])]), createVNode(unref(script), {
						modelValue: controlMode.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => controlMode.value = $event),
						class: "shrink",
						"input-id": option.mode,
						value: option.mode
					}, null, 8, [
						"modelValue",
						"input-id",
						"value"
					])]),
					_: 2
				}, 1032, ["for"]);
			}), 64))])]);
		};
	}
});
//#endregion
export { ValueControlPopover_default as default };

//# sourceMappingURL=ValueControlPopover-nLFljUEZ.js.map