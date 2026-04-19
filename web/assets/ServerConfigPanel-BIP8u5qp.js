import "./rolldown-runtime-DBfy44LZ.js";
import { M as script$1, st as script } from "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import { A as createBlock, C as Fragment, I as createTextVNode, L as createVNode, M as createElementBlock, Wt as toDisplayString, X as onBeforeUnmount, j as createCommentVNode, k as createBaseVNode, mt as watch, rt as renderList, tt as openBlock, u as storeToRefs, vt as withCtx, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-other-Bwg2XU9O.js";
import "./useFeatureFlags-CaushwdG.js";
import "./api-DyWqG5-m.js";
import { t as useToastStore } from "./toastStore-VVLBmmzn.js";
import "./vendor-markdown-BJR1tkAv.js";
import "./colorUtil-B4LmkIZp.js";
import { n as useI18n } from "./vendor-i18n-B4rt6w-9.js";
import "./i18n-Bti21m_L.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import { t as Button_default } from "./Button-C-moMp8y.js";
import { K as FormItem_default, a as useSettingStore } from "./dialogService-DNEvvYnU.js";
import "./formatUtil-BrmPt11w.js";
import "./dialogStore-BzMbsXyV.js";
import "./userStore-BR8OofxE.js";
import "./useErrorHandling-Ch3yRrgJ.js";
import "./downloadUtil-D3N-czcI.js";
import { t as useCopyToClipboard } from "./useCopyToClipboard-CQ0qJD1x.js";
import "./vendor-tiptap-DCOyDD5A.js";
import "./WaveAudioPlayer-BmrB2yRe.js";
import "./Popover-pEJct6yy.js";
import { t as electronAPI } from "./envUtil-iYCo4Y6R.js";
import "./electronDownloadStore-Sv0ABKT3.js";
import "./markdownRendererUtil-DVjNVant.js";
import "./useExternalLink-Ci40lNMZ.js";
import { t as useServerConfigStore } from "./serverConfigStore-CVKf8OLk.js";
//#region src/platform/settings/components/ServerConfigPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "server-config-panel flex flex-col gap-2" };
var _hoisted_2 = { class: "flex justify-end gap-2" };
var _hoisted_3 = { class: "flex items-center justify-between" };
//#endregion
//#region src/platform/settings/components/ServerConfigPanel.vue
var ServerConfigPanel_default = /* @__PURE__ */ defineComponent({
	__name: "ServerConfigPanel",
	setup(__props) {
		const settingStore = useSettingStore();
		const serverConfigStore = useServerConfigStore();
		const toastStore = useToastStore();
		const { serverConfigsByCategory, serverConfigValues, launchArgs, commandLineArgs, modifiedConfigs } = storeToRefs(serverConfigStore);
		let restartTriggered = false;
		const revertChanges = () => {
			serverConfigStore.revertChanges();
		};
		const restartApp = async () => {
			restartTriggered = true;
			await electronAPI().restartApp();
		};
		watch(launchArgs, async (newVal) => {
			await settingStore.set("Comfy.Server.LaunchArgs", newVal);
		});
		watch(serverConfigValues, async (newVal) => {
			await settingStore.set("Comfy.Server.ServerConfigValues", newVal);
		});
		const { copyToClipboard } = useCopyToClipboard();
		const copyCommandLineArgs = async () => {
			await copyToClipboard(commandLineArgs.value);
		};
		const { t } = useI18n();
		onBeforeUnmount(() => {
			if (restartTriggered) return;
			if (modifiedConfigs.value.length === 0) return;
			toastStore.add({
				severity: "warn",
				summary: t("serverConfig.restartRequiredToastSummary"),
				detail: t("serverConfig.restartRequiredToastDetail"),
				life: 1e4
			});
		});
		const translateItem = (item) => {
			return {
				...item,
				name: t(`serverConfigItems.${item.id}.name`, item.name),
				tooltip: item.tooltip ? t(`serverConfigItems.${item.id}.tooltip`, item.tooltip) : void 0
			};
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				unref(modifiedConfigs).length > 0 ? (openBlock(), createBlock(unref(script), {
					key: 0,
					severity: "info",
					"pt:text": "w-full"
				}, {
					default: withCtx(() => [
						createBaseVNode("p", null, toDisplayString(_ctx.$t("serverConfig.modifiedConfigs")), 1),
						createBaseVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(modifiedConfigs), (config) => {
							return openBlock(), createElementBlock("li", { key: config.id }, toDisplayString(config.name) + ": " + toDisplayString(config.initialValue) + " → " + toDisplayString(config.value), 1);
						}), 128))]),
						createBaseVNode("div", _hoisted_2, [createVNode(Button_default, {
							variant: "secondary",
							onClick: revertChanges
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("serverConfig.revertChanges")), 1)]),
							_: 1
						}), createVNode(Button_default, {
							variant: "destructive",
							onClick: restartApp
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("serverConfig.restart")), 1)]),
							_: 1
						})])
					]),
					_: 1
				})) : createCommentVNode("", true),
				unref(commandLineArgs) ? (openBlock(), createBlock(unref(script), {
					key: 1,
					severity: "secondary",
					"pt:text": "w-full"
				}, {
					icon: withCtx(() => _cache[0] || (_cache[0] = [createBaseVNode("i", { class: "icon-[lucide--terminal] text-xl font-bold" }, null, -1)])),
					default: withCtx(() => [createBaseVNode("div", _hoisted_3, [createBaseVNode("p", null, toDisplayString(unref(commandLineArgs)), 1), createVNode(Button_default, {
						size: "icon",
						variant: "muted-textonly",
						"aria-label": _ctx.$t("g.copyToClipboard"),
						onClick: copyCommandLineArgs
					}, {
						default: withCtx(() => _cache[1] || (_cache[1] = [createBaseVNode("i", { class: "pi pi-clipboard" }, null, -1)])),
						_: 1
					}, 8, ["aria-label"])])]),
					_: 1
				})) : createCommentVNode("", true),
				(openBlock(true), createElementBlock(Fragment, null, renderList(Object.entries(unref(serverConfigsByCategory)), ([label, items], i) => {
					return openBlock(), createElementBlock("div", { key: label }, [
						i > 0 ? (openBlock(), createBlock(unref(script$1), { key: 0 })) : createCommentVNode("", true),
						createBaseVNode("h3", null, toDisplayString(_ctx.$t(`serverConfigCategories.${label}`, label)), 1),
						(openBlock(true), createElementBlock(Fragment, null, renderList(items, (item) => {
							return openBlock(), createElementBlock("div", {
								key: item.name,
								class: "mb-4"
							}, [createVNode(FormItem_default, {
								id: item.id,
								"form-value": item.value,
								"onUpdate:formValue": ($event) => item.value = $event,
								item: translateItem(item),
								"label-class": { "text-highlight": item.initialValue !== item.value }
							}, null, 8, [
								"id",
								"form-value",
								"onUpdate:formValue",
								"item",
								"label-class"
							])]);
						}), 128))
					]);
				}), 128))
			]);
		};
	}
});
//#endregion
export { ServerConfigPanel_default as default };

//# sourceMappingURL=ServerConfigPanel-BIP8u5qp.js.map