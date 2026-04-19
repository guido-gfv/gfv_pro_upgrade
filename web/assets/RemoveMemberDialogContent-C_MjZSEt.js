import "./rolldown-runtime-DBfy44LZ.js";
import { dt as useToast } from "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import { At as ref, I as createTextVNode, L as createVNode, M as createElementBlock, Wt as toDisplayString, k as createBaseVNode, tt as openBlock, vt as withCtx, z as defineComponent } from "./vendor-vue-core-BZypYDY7.js";
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
import { qi as useTeamWorkspaceStore } from "./dialogService-DNEvvYnU.js";
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
//#region src/platform/workspace/components/dialogs/RemoveMemberDialogContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex w-full max-w-[360px] flex-col rounded-2xl border border-border-default bg-base-background" };
var _hoisted_2 = { class: "flex h-12 items-center justify-between border-b border-border-default px-4" };
var _hoisted_3 = { class: "m-0 text-sm font-normal text-base-foreground" };
var _hoisted_4 = ["aria-label"];
var _hoisted_5 = { class: "p-4" };
var _hoisted_6 = { class: "m-0 text-sm text-muted-foreground" };
var _hoisted_7 = { class: "flex items-center justify-end gap-4 p-4" };
//#endregion
//#region src/platform/workspace/components/dialogs/RemoveMemberDialogContent.vue
var RemoveMemberDialogContent_default = /* @__PURE__ */ defineComponent({
	__name: "RemoveMemberDialogContent",
	props: { memberId: {} },
	setup(__props) {
		const dialogStore = useDialogStore();
		const workspaceStore = useTeamWorkspaceStore();
		const toast = useToast();
		const { t } = useI18n();
		const loading = ref(false);
		function onCancel() {
			dialogStore.closeDialog({ key: "remove-member" });
		}
		async function onRemove() {
			loading.value = true;
			try {
				await workspaceStore.removeMember(__props.memberId);
				toast.add({
					severity: "success",
					summary: t("workspacePanel.removeMemberDialog.success"),
					life: 2e3
				});
				dialogStore.closeDialog({ key: "remove-member" });
			} catch {
				toast.add({
					severity: "error",
					summary: t("workspacePanel.removeMemberDialog.error")
				});
			} finally {
				loading.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [createBaseVNode("h2", _hoisted_3, toDisplayString(_ctx.$t("workspacePanel.removeMemberDialog.title")), 1), createBaseVNode("button", {
					class: "focus-visible:ring-secondary-foreground cursor-pointer rounded-sm border-none bg-transparent p-0 text-muted-foreground transition-colors hover:text-base-foreground focus-visible:ring-1 focus-visible:outline-none",
					"aria-label": _ctx.$t("g.close"),
					onClick: onCancel
				}, _cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-times size-4" }, null, -1)]), 8, _hoisted_4)]),
				createBaseVNode("div", _hoisted_5, [createBaseVNode("p", _hoisted_6, toDisplayString(_ctx.$t("workspacePanel.removeMemberDialog.message")), 1)]),
				createBaseVNode("div", _hoisted_7, [createVNode(Button_default, {
					variant: "muted-textonly",
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.cancel")), 1)]),
					_: 1
				}), createVNode(Button_default, {
					variant: "destructive",
					size: "lg",
					loading: loading.value,
					onClick: onRemove
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.removeMemberDialog.remove")), 1)]),
					_: 1
				}, 8, ["loading"])])
			]);
		};
	}
});
//#endregion
export { RemoveMemberDialogContent_default as default };

//# sourceMappingURL=RemoveMemberDialogContent-C_MjZSEt.js.map