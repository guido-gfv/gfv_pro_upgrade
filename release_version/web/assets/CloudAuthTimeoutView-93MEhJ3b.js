import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import { At as ref, C as Fragment, I as createTextVNode, L as createVNode, M as createElementBlock, Vt as normalizeClass, Wt as toDisplayString, j as createCommentVNode, k as createBaseVNode, o as useRouter, rt as renderList, tt as openBlock, vt as withCtx, z as defineComponent } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-other-Bwg2XU9O.js";
import "./useFeatureFlags-CaushwdG.js";
import "./api-DyWqG5-m.js";
import "./toastStore-VVLBmmzn.js";
import "./vendor-markdown-BJR1tkAv.js";
import "./colorUtil-B4LmkIZp.js";
import "./i18n-Bti21m_L.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import { t as Button_default } from "./Button-C-moMp8y.js";
import { Li as useAuthActions } from "./dialogService-DNEvvYnU.js";
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
//#region src/platform/cloud/onboarding/CloudAuthTimeoutView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex h-full items-center justify-center p-6" };
var _hoisted_2 = { class: "max-w-[100vw] text-center lg:w-[500px]" };
var _hoisted_3 = { class: "mb-3 text-xl text-text-primary" };
var _hoisted_4 = { class: "mb-5 text-muted" };
var _hoisted_5 = { class: "mb-4 rounded-sm bg-secondary-background px-3 py-2 text-left" };
var _hoisted_6 = { class: "mb-2 text-sm font-semibold text-text-primary" };
var _hoisted_7 = { class: "space-y-1.5 text-sm text-muted" };
var _hoisted_8 = {
	key: 0,
	class: "mb-4 text-left"
};
var _hoisted_9 = {
	key: 0,
	class: "mt-2 rounded-sm border border-muted-background p-4 font-mono text-xs break-all text-muted-foreground"
};
var _hoisted_10 = { class: "mb-5 text-center text-sm text-gray-600" };
var _hoisted_11 = {
	href: "https://support.comfy.org",
	class: "cursor-pointer text-blue-400 no-underline",
	target: "_blank",
	rel: "noopener noreferrer"
};
var _hoisted_12 = { class: "flex flex-col gap-3" };
//#endregion
//#region src/platform/cloud/onboarding/CloudAuthTimeoutView.vue
var CloudAuthTimeoutView_default = /* @__PURE__ */ defineComponent({
	__name: "CloudAuthTimeoutView",
	props: { errorMessage: {} },
	setup(__props) {
		const router = useRouter();
		const { logout } = useAuthActions();
		const showTechnicalDetails = ref(false);
		const handleRestart = async () => {
			await logout();
			await router.replace({ name: "cloud-login" });
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createBaseVNode("h2", _hoisted_3, toDisplayString(_ctx.$t("cloudOnboarding.authTimeout.title")), 1),
				createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.$t("cloudOnboarding.authTimeout.message")), 1),
				createBaseVNode("div", _hoisted_5, [createBaseVNode("h3", _hoisted_6, toDisplayString(_ctx.$t("cloudOnboarding.authTimeout.troubleshooting")), 1), createBaseVNode("ul", _hoisted_7, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.$tm("cloudOnboarding.authTimeout.causes"), (cause, index) => {
					return openBlock(), createElementBlock("li", {
						key: index,
						class: "flex gap-2"
					}, [_cache[1] || (_cache[1] = createBaseVNode("span", null, "•", -1)), createBaseVNode("span", null, toDisplayString(cause), 1)]);
				}), 128))])]),
				_ctx.errorMessage ? (openBlock(), createElementBlock("div", _hoisted_8, [createBaseVNode("button", {
					class: "flex w-full items-center justify-between rounded-sm border-0 bg-secondary-background px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-secondary-background-hover",
					onClick: _cache[0] || (_cache[0] = ($event) => showTechnicalDetails.value = !showTechnicalDetails.value)
				}, [createBaseVNode("span", null, toDisplayString(_ctx.$t("cloudOnboarding.authTimeout.technicalDetails")), 1), createBaseVNode("i", { class: normalizeClass(["pi", showTechnicalDetails.value ? "pi-chevron-up" : "pi-chevron-down"]) }, null, 2)]), showTechnicalDetails.value ? (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString(_ctx.errorMessage), 1)) : createCommentVNode("", true)])) : createCommentVNode("", true),
				createBaseVNode("p", _hoisted_10, [
					createTextVNode(toDisplayString(_ctx.$t("cloudOnboarding.authTimeout.helpText")) + " ", 1),
					createBaseVNode("a", _hoisted_11, toDisplayString(_ctx.$t("cloudOnboarding.authTimeout.supportLink")), 1),
					_cache[2] || (_cache[2] = createTextVNode(". "))
				]),
				createBaseVNode("div", _hoisted_12, [createVNode(Button_default, {
					class: "w-full",
					onClick: handleRestart
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("cloudOnboarding.authTimeout.restart")), 1)]),
					_: 1
				})])
			])]);
		};
	}
});
//#endregion
export { CloudAuthTimeoutView_default as default };

//# sourceMappingURL=CloudAuthTimeoutView-93MEhJ3b.js.map