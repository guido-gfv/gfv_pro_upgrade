import "./rolldown-runtime-DBfy44LZ.js";
import { J as script$1, tt as script } from "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import { A as createBlock, At as ref, M as createElementBlock, O as computed, Q as onMounted, Wt as toDisplayString, a as useRoute, j as createCommentVNode, k as createBaseVNode, o as useRouter, tt as openBlock, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-other-Bwg2XU9O.js";
import "./useFeatureFlags-CaushwdG.js";
import "./api-DyWqG5-m.js";
import "./toastStore-VVLBmmzn.js";
import "./vendor-markdown-BJR1tkAv.js";
import "./colorUtil-B4LmkIZp.js";
import { n as useI18n } from "./vendor-i18n-B4rt6w-9.js";
import "./i18n-Bti21m_L.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import "./Button-C-moMp8y.js";
import { Li as useAuthActions, Ri as useBillingContext } from "./dialogService-DNEvvYnU.js";
import "./formatUtil-BrmPt11w.js";
import "./dialogStore-BzMbsXyV.js";
import "./userStore-BR8OofxE.js";
import { t as useErrorHandling } from "./useErrorHandling-Ch3yRrgJ.js";
import "./downloadUtil-D3N-czcI.js";
import "./useCopyToClipboard-CQ0qJD1x.js";
import "./vendor-tiptap-DCOyDD5A.js";
import "./WaveAudioPlayer-BmrB2yRe.js";
import "./Popover-pEJct6yy.js";
import "./electronDownloadStore-Sv0ABKT3.js";
import "./markdownRendererUtil-DVjNVant.js";
import "./useExternalLink-Ci40lNMZ.js";
import { t as comfy_logo_single_default } from "./comfy-logo-single-DbeSQd73.js";
import { t as performSubscriptionCheckout } from "./subscriptionCheckoutUtil-KxQ1XtMo.js";
//#region src/platform/cloud/onboarding/CloudSubscriptionRedirectView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "bg-comfy-menu-secondary-bg flex size-full items-center justify-center" };
var _hoisted_2 = { class: "flex flex-col items-center gap-4" };
var _hoisted_3 = ["alt"];
var _hoisted_4 = {
	key: 0,
	class: "font-inter text-base/normal font-normal text-base-foreground"
};
//#endregion
//#region src/platform/cloud/onboarding/CloudSubscriptionRedirectView.vue
var CloudSubscriptionRedirectView_default = /* @__PURE__ */ defineComponent({
	__name: "CloudSubscriptionRedirectView",
	setup(__props) {
		const { t } = useI18n();
		const route = useRoute();
		const router = useRouter();
		const { reportError, accessBillingPortal } = useAuthActions();
		const { wrapWithErrorHandlingAsync } = useErrorHandling();
		const { isActiveSubscription, isInitialized, initialize } = useBillingContext();
		const selectedTierKey = ref(null);
		const tierDisplayName = computed(() => {
			if (!selectedTierKey.value) return "";
			return {
				free: t("subscription.tiers.free.name"),
				standard: t("subscription.tiers.standard.name"),
				creator: t("subscription.tiers.creator.name"),
				pro: t("subscription.tiers.pro.name"),
				founder: t("subscription.tiers.founder.name")
			}[selectedTierKey.value];
		});
		const runRedirect = wrapWithErrorHandlingAsync(async () => {
			const rawType = route.query.tier;
			const rawCycle = route.query.cycle;
			let tierKeyParam = null;
			let cycleParam = "monthly";
			if (typeof rawType === "string") tierKeyParam = rawType;
			else if (Array.isArray(rawType) && rawType[0]) tierKeyParam = rawType[0];
			if (typeof rawCycle === "string") cycleParam = rawCycle;
			else if (Array.isArray(rawCycle) && rawCycle[0]) cycleParam = rawCycle[0];
			if (!tierKeyParam) {
				await router.push("/");
				return;
			}
			if (![
				"standard",
				"creator",
				"pro",
				"founder"
			].includes(tierKeyParam)) {
				await router.push("/");
				return;
			}
			const tierKey = tierKeyParam;
			selectedTierKey.value = tierKey;
			if (!cycleParam || !["monthly", "yearly"].includes(cycleParam)) cycleParam = "monthly";
			if (!isInitialized.value) await initialize();
			if (isActiveSubscription.value) await accessBillingPortal(void 0, false);
			else await performSubscriptionCheckout(tierKey, cycleParam, false);
		}, reportError);
		onMounted(() => {
			runRedirect();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createBaseVNode("img", {
					src: comfy_logo_single_default,
					alt: unref(t)("g.comfyOrgLogoAlt"),
					class: "size-16"
				}, null, 8, _hoisted_3),
				selectedTierKey.value ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(unref(t)("subscription.subscribeTo", { plan: tierDisplayName.value })), 1)) : createCommentVNode("", true),
				selectedTierKey.value ? (openBlock(), createBlock(unref(script), {
					key: 1,
					class: "size-8",
					"stroke-width": "4"
				})) : createCommentVNode("", true),
				selectedTierKey.value ? (openBlock(), createBlock(unref(script$1), {
					key: 2,
					as: "a",
					href: "/",
					link: "",
					label: unref(t)("cloudOnboarding.skipToCloudApp")
				}, null, 8, ["label"])) : createCommentVNode("", true)
			])]);
		};
	}
});
//#endregion
export { CloudSubscriptionRedirectView_default as default };

//# sourceMappingURL=CloudSubscriptionRedirectView-eQ6bM3hj.js.map