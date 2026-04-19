import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import { A as createBlock, At as ref, K as mergeModels, L as createVNode, M as createElementBlock, O as computed, Vt as normalizeClass, Wt as toDisplayString, dt as useModel, j as createCommentVNode, k as createBaseVNode, pt as useTemplateRef, q as mergeProps, tt as openBlock, ut as useId, vt as withCtx, x as withModifiers, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-other-Bwg2XU9O.js";
import "./useFeatureFlags-CaushwdG.js";
import "./api-DyWqG5-m.js";
import "./toastStore-VVLBmmzn.js";
import "./vendor-markdown-BJR1tkAv.js";
import "./colorUtil-B4LmkIZp.js";
import "./i18n-Bti21m_L.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import { t as cn } from "./src-BorKTv-H.js";
import { t as Button_default } from "./Button-C-moMp8y.js";
import { jt as isNodeOptionsOpen } from "./dialogService-DNEvvYnU.js";
import "./formatUtil-BrmPt11w.js";
import "./dialogStore-BzMbsXyV.js";
import "./userStore-BR8OofxE.js";
import { r as useHideLayoutField } from "./widgetTypes-Dpe-o7oG.js";
import "./useErrorHandling-Ch3yRrgJ.js";
import "./downloadUtil-D3N-czcI.js";
import { t as useCopyToClipboard } from "./useCopyToClipboard-CQ0qJD1x.js";
import "./vendor-tiptap-DCOyDD5A.js";
import "./WaveAudioPlayer-BmrB2yRe.js";
import "./Popover-pEJct6yy.js";
import "./electronDownloadStore-Sv0ABKT3.js";
import "./markdownRendererUtil-DVjNVant.js";
import "./useExternalLink-Ci40lNMZ.js";
import { t as Textarea_default } from "./Textarea-CbplpQJT.js";
import { o as filterWidgetProps, r as INPUT_EXCLUDED_PROPS } from "./widgetPropFilter-BK-zKZeC.js";
import { t as WidgetInputBaseClass } from "./layout-BO8LRMlM.js";
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetTextarea.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["for"];
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetTextarea.vue
var WidgetTextarea_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetTextarea",
	props: /* @__PURE__ */ mergeModels({
		widget: {},
		placeholder: { default: "" }
	}, {
		"modelValue": { default: "" },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const textAreaRef = useTemplateRef("textAreaRef");
		const modelValue = useModel(__props, "modelValue");
		const isFocused = ref(false);
		function trackFocus() {
			isFocused.value = document.activeElement === textAreaRef.value?.$el;
		}
		const hideLayoutField = useHideLayoutField();
		const { copyToClipboard } = useCopyToClipboard();
		const filteredProps = computed(() => filterWidgetProps(__props.widget.options, INPUT_EXCLUDED_PROPS));
		const displayName = computed(() => __props.widget.label || __props.widget.name);
		const id = useId();
		const isReadOnly = computed(() => Boolean(__props.widget.options?.read_only || __props.widget.options?.disabled));
		function handleContextMenu(e) {
			if (isNodeOptionsOpen() || isFocused.value) {
				e.stopPropagation();
				return;
			}
			e.preventDefault();
		}
		function handleCopy() {
			copyToClipboard(modelValue.value);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)("group relative rounded-lg transition-all focus-within:ring focus-within:ring-component-node-widget-background-highlighted hover:bg-component-node-widget-background-hovered", _ctx.widget.borderStyle)) }, [
				!unref(hideLayoutField) ? (openBlock(), createElementBlock("label", {
					key: 0,
					for: unref(id),
					class: "pointer-events-none absolute top-1.5 left-3 z-10 text-2xs text-muted-foreground"
				}, toDisplayString(displayName.value), 9, _hoisted_1)) : createCommentVNode("", true),
				createVNode(Textarea_default, mergeProps(filteredProps.value, {
					id: unref(id),
					ref_key: "textAreaRef",
					ref: textAreaRef,
					modelValue: modelValue.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
					class: unref(cn)(unref(WidgetInputBaseClass), "size-full resize-none text-xs", !unref(hideLayoutField) && "pt-5"),
					placeholder: _ctx.placeholder,
					readonly: isReadOnly.value,
					"data-capture-wheel": "true",
					onPointerdownCapture: withModifiers(trackFocus, ["stop"]),
					onPointermoveCapture: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"])),
					onPointerupCapture: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"])),
					onContextmenuCapture: handleContextMenu
				}), null, 16, [
					"id",
					"modelValue",
					"class",
					"placeholder",
					"readonly"
				]),
				isReadOnly.value ? (openBlock(), createBlock(Button_default, {
					key: 1,
					variant: "textonly",
					size: "icon",
					class: "invisible absolute top-1.5 right-1.5 z-10 group-focus-within:visible group-hover:visible hover:bg-base-foreground/10",
					title: _ctx.$t("g.copyToClipboard"),
					"aria-label": _ctx.$t("g.copyToClipboard"),
					onClick: handleCopy,
					onPointerdownCapture: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"]))
				}, {
					default: withCtx(() => _cache[4] || (_cache[4] = [createBaseVNode("i", { class: "icon-[lucide--copy] size-4 text-component-node-foreground" }, null, -1)])),
					_: 1
				}, 8, ["title", "aria-label"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
export { WidgetTextarea_default as default };

//# sourceMappingURL=WidgetTextarea-6ZBj1iqh.js.map