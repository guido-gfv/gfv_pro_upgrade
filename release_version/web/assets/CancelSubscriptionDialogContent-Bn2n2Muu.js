import "./rolldown-runtime-DBfy44LZ.js";
import { dt as useToast } from "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import { At as ref, I as createTextVNode, L as createVNode, M as createElementBlock, O as computed, Wt as toDisplayString, k as createBaseVNode, tt as openBlock, vt as withCtx, z as defineComponent } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-other-Bwg2XU9O.js";
import "./useFeatureFlags-CaushwdG.js";
import "./api-DyWqG5-m.js";
import "./toastStore-VVLBmmzn.js";
import "./vendor-markdown-BJR1tkAv.js";
import "./colorUtil-B4LmkIZp.js";
import { n as useI18n } from "./vendor-i18n-B4rt6w-9.js";
import "./i18n-Bti21m_L.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import { t as Button_default } from "./Button-C-moMp8y.js";
import { Ri as useBillingContext } from "./dialogService-DNEvvYnU.js";
import "./formatUtil-BrmPt11w.js";
import { t as useDialogStore } from "./dialogStore-BzMbsXyV.js";
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
//#region src/components/dialog/content/subscription/CancelSubscriptionDialogContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex w-full max-w-[400px] flex-col rounded-2xl border border-border-default bg-base-background" };
var _hoisted_2 = { class: "flex h-12 items-center justify-between border-b border-border-default px-4" };
var _hoisted_3 = { class: "m-0 text-sm font-normal text-base-foreground" };
var _hoisted_4 = ["aria-label", "disabled"];
var _hoisted_5 = { class: "flex flex-col gap-4 p-4" };
var _hoisted_6 = { class: "m-0 text-sm text-muted-foreground" };
var _hoisted_7 = { class: "flex items-center justify-end gap-4 p-4" };
//#endregion
//#region src/components/dialog/content/subscription/CancelSubscriptionDialogContent.vue
var CancelSubscriptionDialogContent_default = /* @__PURE__ */ defineComponent({
	__name: "CancelSubscriptionDialogContent",
	props: { cancelAt: {} },
	setup(__props) {
		const props = __props;
		const { t } = useI18n();
		const dialogStore = useDialogStore();
		const toast = useToast();
		const { cancelSubscription, fetchStatus, subscription } = useBillingContext();
		const isLoading = ref(false);
		const formattedEndDate = computed(() => {
			const dateStr = props.cancelAt ?? subscription.value?.endDate;
			if (!dateStr) return t("subscription.cancelDialog.endOfBillingPeriod");
			return new Date(dateStr).toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric"
			});
		});
		const description = computed(() => t("subscription.cancelDialog.description", { date: formattedEndDate.value }));
		function onClose() {
			if (isLoading.value) return;
			dialogStore.closeDialog({ key: "cancel-subscription" });
		}
		async function onConfirmCancel() {
			isLoading.value = true;
			try {
				await cancelSubscription();
				await fetchStatus();
				dialogStore.closeDialog({ key: "cancel-subscription" });
				toast.add({
					severity: "success",
					summary: t("subscription.cancelSuccess"),
					life: 5e3
				});
			} catch (error) {
				toast.add({
					severity: "error",
					summary: t("subscription.cancelDialog.failed"),
					detail: error instanceof Error ? error.message : t("g.unknownError")
				});
			} finally {
				isLoading.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [createBaseVNode("h2", _hoisted_3, toDisplayString(_ctx.$t("subscription.cancelDialog.title")), 1), createBaseVNode("button", {
					class: "focus-visible:ring-secondary-foreground cursor-pointer rounded-sm border-none bg-transparent p-0 text-muted-foreground transition-colors hover:text-base-foreground focus-visible:ring-1 focus-visible:outline-none",
					"aria-label": _ctx.$t("g.close"),
					disabled: isLoading.value,
					onClick: onClose
				}, _cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-times size-4" }, null, -1)]), 8, _hoisted_4)]),
				createBaseVNode("div", _hoisted_5, [createBaseVNode("p", _hoisted_6, toDisplayString(description.value), 1)]),
				createBaseVNode("div", _hoisted_7, [createVNode(Button_default, {
					variant: "muted-textonly",
					disabled: isLoading.value,
					onClick: onClose
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.cancelDialog.keepSubscription")), 1)]),
					_: 1
				}, 8, ["disabled"]), createVNode(Button_default, {
					variant: "destructive",
					size: "lg",
					loading: isLoading.value,
					onClick: onConfirmCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.cancelDialog.confirmCancel")), 1)]),
					_: 1
				}, 8, ["loading"])])
			]);
		};
	}
});
//#endregion
export { CancelSubscriptionDialogContent_default as default };

//# sourceMappingURL=CancelSubscriptionDialogContent-Bn2n2Muu.js.map