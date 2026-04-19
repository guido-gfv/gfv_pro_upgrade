import "./rolldown-runtime-DBfy44LZ.js";
import { dt as useToast } from "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import { At as ref, I as createTextVNode, L as createVNode, M as createElementBlock, O as computed, Wt as toDisplayString, b as withKeys, k as createBaseVNode, tt as openBlock, v as vModelText, vt as withCtx, yt as withDirectives, z as defineComponent } from "./vendor-vue-core-BZypYDY7.js";
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
//#region src/platform/workspace/components/dialogs/CreateWorkspaceDialogContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex w-full max-w-[400px] flex-col rounded-2xl border border-border-default bg-base-background" };
var _hoisted_2 = { class: "flex h-12 items-center justify-between border-b border-border-default px-4" };
var _hoisted_3 = { class: "m-0 text-sm font-normal text-base-foreground" };
var _hoisted_4 = ["aria-label"];
var _hoisted_5 = { class: "flex flex-col gap-4 p-4" };
var _hoisted_6 = { class: "m-0 text-sm text-muted-foreground" };
var _hoisted_7 = { class: "flex flex-col gap-2" };
var _hoisted_8 = { class: "text-sm text-base-foreground" };
var _hoisted_9 = ["placeholder"];
var _hoisted_10 = { class: "flex items-center justify-end gap-4 p-4" };
//#endregion
//#region src/platform/workspace/components/dialogs/CreateWorkspaceDialogContent.vue
var CreateWorkspaceDialogContent_default = /* @__PURE__ */ defineComponent({
	__name: "CreateWorkspaceDialogContent",
	props: { onConfirm: { type: Function } },
	setup(__props) {
		const { t } = useI18n();
		const dialogStore = useDialogStore();
		const toast = useToast();
		const workspaceStore = useTeamWorkspaceStore();
		const loading = ref(false);
		const workspaceName = ref("");
		const isValidName = computed(() => {
			const name = workspaceName.value.trim();
			return name.length >= 1 && name.length <= 50 && /^[a-zA-Z0-9][a-zA-Z0-9\s\-_'.,()&+]*$/.test(name);
		});
		function onCancel() {
			dialogStore.closeDialog({ key: "create-workspace" });
		}
		async function onCreate() {
			if (!isValidName.value) return;
			loading.value = true;
			try {
				const name = workspaceName.value.trim();
				await __props.onConfirm?.(name);
				dialogStore.closeDialog({ key: "create-workspace" });
				await workspaceStore.createWorkspace(name);
			} catch (error) {
				console.error("[CreateWorkspaceDialog] Failed to create workspace:", error);
				toast.add({
					severity: "error",
					summary: t("workspacePanel.toast.failedToCreateWorkspace"),
					detail: error instanceof Error ? error.message : t("g.unknownError")
				});
			} finally {
				loading.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [createBaseVNode("h2", _hoisted_3, toDisplayString(_ctx.$t("workspacePanel.createWorkspaceDialog.title")), 1), createBaseVNode("button", {
					class: "focus-visible:ring-secondary-foreground cursor-pointer rounded-sm border-none bg-transparent p-0 text-muted-foreground transition-colors hover:text-base-foreground focus-visible:ring-1 focus-visible:outline-none",
					"aria-label": _ctx.$t("g.close"),
					onClick: onCancel
				}, _cache[2] || (_cache[2] = [createBaseVNode("i", { class: "pi pi-times size-4" }, null, -1)]), 8, _hoisted_4)]),
				createBaseVNode("div", _hoisted_5, [createBaseVNode("p", _hoisted_6, toDisplayString(_ctx.$t("workspacePanel.createWorkspaceDialog.message")), 1), createBaseVNode("div", _hoisted_7, [createBaseVNode("label", _hoisted_8, toDisplayString(_ctx.$t("workspacePanel.createWorkspaceDialog.nameLabel")), 1), withDirectives(createBaseVNode("input", {
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => workspaceName.value = $event),
					type: "text",
					class: "focus:ring-secondary-foreground w-full rounded-lg border border-border-default bg-transparent px-3 py-2 text-sm text-base-foreground placeholder:text-muted-foreground focus:ring-1 focus:outline-none",
					placeholder: _ctx.$t("workspacePanel.createWorkspaceDialog.namePlaceholder"),
					onKeydown: _cache[1] || (_cache[1] = withKeys(($event) => isValidName.value && onCreate(), ["enter"]))
				}, null, 40, _hoisted_9), [[vModelText, workspaceName.value]])])]),
				createBaseVNode("div", _hoisted_10, [createVNode(Button_default, {
					variant: "muted-textonly",
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.cancel")), 1)]),
					_: 1
				}), createVNode(Button_default, {
					variant: "primary",
					size: "lg",
					loading: loading.value,
					disabled: !isValidName.value,
					onClick: onCreate
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.createWorkspaceDialog.create")), 1)]),
					_: 1
				}, 8, ["loading", "disabled"])])
			]);
		};
	}
});
//#endregion
export { CreateWorkspaceDialogContent_default as default };

//# sourceMappingURL=CreateWorkspaceDialogContent-C8y5T5KD.js.map