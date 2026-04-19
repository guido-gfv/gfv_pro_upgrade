import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import { C as Fragment, I as createTextVNode, L as createVNode, M as createElementBlock, O as computed, Wt as toDisplayString, j as createCommentVNode, k as createBaseVNode, tt as openBlock, vt as withCtx, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-other-Bwg2XU9O.js";
import "./useFeatureFlags-CaushwdG.js";
import "./api-DyWqG5-m.js";
import "./toastStore-VVLBmmzn.js";
import "./vendor-markdown-BJR1tkAv.js";
import "./colorUtil-B4LmkIZp.js";
import "./i18n-Bti21m_L.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import { t as Button_default } from "./Button-C-moMp8y.js";
import { Bi as useSubscription, la as getTierCredits } from "./dialogService-DNEvvYnU.js";
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
import "./cloud-subscription-CrS2pvTK.js";
import { t as SubscriptionBenefits_default } from "./SubscriptionBenefits-CEqWKaVU.js";
//#region src/platform/cloud/subscription/components/FreeTierDialogContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "relative grid h-full grid-cols-5" };
var _hoisted_2 = { class: "col-span-3 flex flex-col justify-between p-8" };
var _hoisted_3 = { class: "flex flex-col gap-6" };
var _hoisted_4 = { class: "text-sm text-text-primary" };
var _hoisted_5 = {
	key: 0,
	class: "m-0 text-sm text-text-secondary"
};
var _hoisted_6 = {
	key: 1,
	class: "m-0 text-sm text-text-secondary"
};
var _hoisted_7 = {
	key: 2,
	class: "m-0 text-sm text-text-secondary"
};
var _hoisted_8 = { class: "flex flex-col pt-8" };
//#endregion
//#region src/platform/cloud/subscription/components/FreeTierDialogContent.vue
var FreeTierDialogContent_default = /* @__PURE__ */ defineComponent({
	__name: "FreeTierDialogContent",
	props: { reason: {} },
	emits: ["close", "upgrade"],
	setup(__props) {
		const { formattedRenewalDate } = useSubscription();
		const freeTierCredits = computed(() => getTierCredits("free"));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createVNode(Button_default, {
					size: "icon",
					variant: "muted-textonly",
					class: "absolute top-2.5 right-2.5 z-10 size-8 rounded-full p-0 text-white hover:bg-white/20",
					"aria-label": _ctx.$t("g.close"),
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close", false))
				}, {
					default: withCtx(() => _cache[2] || (_cache[2] = [createBaseVNode("i", { class: "pi pi-times" }, null, -1)])),
					_: 1
				}, 8, ["aria-label"]),
				_cache[3] || (_cache[3] = createBaseVNode("div", { class: "relative col-span-2 flex items-center justify-center overflow-hidden rounded-sm" }, [createBaseVNode("video", {
					autoplay: "",
					loop: "",
					muted: "",
					playsinline: "",
					class: "h-full min-w-[125%] object-cover p-0",
					style: { "margin-left": "-20%" }
				}, [createBaseVNode("source", {
					src: "" + new URL("images/cloud-subscription.webm", import.meta.url).href,
					type: "video/webm"
				})])], -1)),
				createBaseVNode("div", _hoisted_2, [createBaseVNode("div", null, [createBaseVNode("div", _hoisted_3, [
					createBaseVNode("div", _hoisted_4, [_ctx.reason === "out_of_credits" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(_ctx.$t("subscription.freeTier.outOfCredits.title")), 1)], 64)) : _ctx.reason === "top_up_blocked" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(_ctx.$t("subscription.freeTier.topUpBlocked.title")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(_ctx.$t("subscription.freeTier.title")), 1)], 64))]),
					_ctx.reason === "out_of_credits" ? (openBlock(), createElementBlock("p", _hoisted_5, toDisplayString(_ctx.$t("subscription.freeTier.outOfCredits.subtitle")), 1)) : createCommentVNode("", true),
					!_ctx.reason || _ctx.reason === "subscription_required" ? (openBlock(), createElementBlock("p", _hoisted_6, toDisplayString(freeTierCredits.value ? _ctx.$t("subscription.freeTier.description", { credits: freeTierCredits.value.toLocaleString() }) : _ctx.$t("subscription.freeTier.descriptionGeneric")), 1)) : createCommentVNode("", true),
					(!_ctx.reason || _ctx.reason === "subscription_required") && unref(formattedRenewalDate) ? (openBlock(), createElementBlock("p", _hoisted_7, toDisplayString(_ctx.$t("subscription.freeTier.nextRefresh", { date: unref(formattedRenewalDate) })), 1)) : createCommentVNode("", true)
				]), createVNode(SubscriptionBenefits_default, {
					"is-free-tier": "",
					class: "mt-6 text-muted"
				})]), createBaseVNode("div", _hoisted_8, [createVNode(Button_default, {
					class: "w-full rounded-lg bg-(--color-accent-blue,#0B8CE9) px-4 py-2 font-inter text-sm font-bold text-white hover:bg-(--color-accent-blue,#0B8CE9)/90",
					onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("upgrade"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.reason === "out_of_credits" || _ctx.reason === "top_up_blocked" ? _ctx.$t("subscription.freeTier.upgradeCta") : _ctx.$t("subscription.freeTier.subscribeCta")), 1)]),
					_: 1
				})])])
			]);
		};
	}
});
//#endregion
export { FreeTierDialogContent_default as default };

//# sourceMappingURL=FreeTierDialogContent-BrcHVKyh.js.map