const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ValueControlPopover-nLFljUEZ.js","./rolldown-runtime-DBfy44LZ.js","./vendor-primevue-DBMopt9T.js","./vendor-vue-core-BZypYDY7.js","./dialogService-DNEvvYnU.js","./_plugin-vue_export-helper-DhKZ6h9r.js","./vendor-other-Bwg2XU9O.js","./vendor-firebase-CW7q45Qc.js","./vendor-three-DR5nWP9y.js","./vendor-tiptap-DCOyDD5A.js","./vendor-reka-ui-DSBnIgrB.js","./vendor-i18n-B4rt6w-9.js","./vendor-sentry-CpCyDgNy.js","./vendor-vueuse-ctZ64Ita.js","./vendor-axios-CEUcXtjS.js","./vendor-markdown-BJR1tkAv.js","./vendor-zod-D-pZHtXX.js","./formatUtil-BrmPt11w.js","./src-BorKTv-H.js","./downloadUtil-D3N-czcI.js","./i18n-Bti21m_L.js","./types-BqIM6TDt.js","./toastStore-VVLBmmzn.js","./WaveAudioPlayer-BmrB2yRe.js","./Button-C-moMp8y.js","./Slider-CcrI1CG4.js","./api-DyWqG5-m.js","./vendor-yjs-DH6avz3u.js","./widget-W78njY6p.js","./colorUtil-B4LmkIZp.js","./Loader-BjJV6X5u.js","./Popover-pEJct6yy.js","./SelectValue-DIo2uSEg.js","./useCopyToClipboard-CQ0qJD1x.js","./useErrorHandling-Ch3yRrgJ.js","./useExternalLink-Ci40lNMZ.js","./envUtil-iYCo4Y6R.js","./useFeatureFlags-CaushwdG.js","./VideoPlayOverlay-Dirk-x3z.js","./assetMetadataUtils-C4X4hjOE.js","./telemetry-BglHASuB.js","./dialogStore-BzMbsXyV.js","./electronDownloadStore-Sv0ABKT3.js","./userStore-BR8OofxE.js","./widgetTypes-Dpe-o7oG.js","./markdownRendererUtil-DVjNVant.js","./vendor-other-DODGPXtn.css","./dialogService-CBLXvn0_.css"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-DBfy44LZ.js";
import { ct as __vitePreload } from "./vendor-primevue-DBMopt9T.js";
import { A as createBlock, At as ref, K as mergeModels, L as createVNode, M as createElementBlock, R as defineAsyncComponent, Vt as normalizeClass, Wt as toDisplayString, dt as useModel, j as createCommentVNode, mt as watch, q as mergeProps, st as resolveDynamicComponent, tt as openBlock, vt as withCtx, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
import { n as useI18n } from "./vendor-i18n-B4rt6w-9.js";
import { t as cn } from "./src-BorKTv-H.js";
import { t as Popover_default } from "./Popover-pEJct6yy.js";
//#region src/renderer/extensions/vueNodes/widgets/components/ValueControlButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var _hoisted_2 = {
	key: 1,
	class: "text-xs font-normal text-primary-background"
};
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/ValueControlButton.vue
var ValueControlButton_default = /* @__PURE__ */ defineComponent({
	__name: "ValueControlButton",
	props: {
		mode: {},
		variant: { default: "badge" }
	},
	setup(__props) {
		const { t } = useI18n();
		const iconMap = {
			fixed: "icon-[lucide--pencil-off]",
			randomize: "icon-[lucide--shuffle]",
			increment: null,
			decrement: null
		};
		const textMap = {
			increment: "+1",
			decrement: "-1",
			fixed: null,
			randomize: null
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				type: "button",
				"aria-label": unref(t)("widgets.valueControl." + _ctx.mode),
				class: normalizeClass(unref(cn)("flex shrink-0 cursor-pointer items-center justify-center border-none focus-visible:ring-2 focus-visible:ring-primary-background focus-visible:ring-offset-1 focus-visible:outline-none", _ctx.variant === "badge" ? "h-4.5 w-8 rounded-full" : "size-6 rounded-sm", _ctx.mode !== "fixed" ? "bg-primary-background/30 hover:bg-primary-background-hover/30" : "bg-transparent"))
			}, [iconMap[_ctx.mode] ? (openBlock(), createElementBlock("i", {
				key: 0,
				"aria-hidden": "true",
				class: normalizeClass(unref(cn)(iconMap[_ctx.mode] ?? "", "text-xs", _ctx.mode === "fixed" ? "text-muted-foreground" : "text-primary-background"))
			}, null, 2)) : textMap[_ctx.mode] ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(textMap[_ctx.mode]), 1)) : createCommentVNode("", true)], 10, _hoisted_1$1);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetWithControl.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "relative grid grid-cols-subgrid" };
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetWithControl.vue
var WidgetWithControl_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetWithControl",
	props: /* @__PURE__ */ mergeModels({
		widget: {},
		component: {}
	}, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const ValueControlPopover = defineAsyncComponent(() => __vitePreload(() => import("./ValueControlPopover-nLFljUEZ.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]), import.meta.url));
		const props = __props;
		const modelValue = useModel(__props, "modelValue");
		const controlModel = ref(props.widget.controlWidget.value);
		watch(controlModel, props.widget.controlWidget.update);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(resolveDynamicComponent(_ctx.component), mergeProps(_ctx.$attrs, {
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => modelValue.value = $event),
				widget: _ctx.widget
			}), {
				default: withCtx(() => [createVNode(Popover_default, null, {
					button: withCtx(() => [createVNode(ValueControlButton_default, {
						mode: controlModel.value,
						class: "self-center"
					}, null, 8, ["mode"])]),
					default: withCtx(() => [createVNode(unref(ValueControlPopover), {
						modelValue: controlModel.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => controlModel.value = $event)
					}, null, 8, ["modelValue"])]),
					_: 1
				})]),
				_: 1
			}, 16, ["modelValue", "widget"]))]);
		};
	}
});
//#endregion
export { WidgetWithControl_default as t };

//# sourceMappingURL=WidgetWithControl-CdJmrrK-.js.map