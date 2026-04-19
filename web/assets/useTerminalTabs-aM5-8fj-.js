import "./rolldown-runtime-DBfy44LZ.js";
import { tt as script } from "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import { $ as onUnmounted, A as createBlock, At as ref, L as createVNode, M as createElementBlock, O as computed, Q as onMounted, Tt as markRaw, Vt as normalizeClass, Wt as toDisplayString, j as createCommentVNode, k as createBaseVNode, ot as resolveDirective, tt as openBlock, u as storeToRefs, vt as withCtx, y as vShow, yt as withDirectives, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
import { Z as debounce } from "./vendor-other-Bwg2XU9O.js";
import { n as isDesktop } from "./types-BqIM6TDt.js";
import "./useFeatureFlags-CaushwdG.js";
import { b as useEventListener, et as until, v as useElementHover } from "./vendor-vueuse-ctZ64Ita.js";
import { r as api } from "./api-DyWqG5-m.js";
import "./toastStore-VVLBmmzn.js";
import "./vendor-markdown-BJR1tkAv.js";
import "./colorUtil-B4LmkIZp.js";
import { n as useI18n } from "./vendor-i18n-B4rt6w-9.js";
import "./i18n-Bti21m_L.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import { t as cn } from "./src-BorKTv-H.js";
import { t as Button_default } from "./Button-C-moMp8y.js";
import { z as useExecutionStore } from "./dialogService-DNEvvYnU.js";
import "./formatUtil-BrmPt11w.js";
import "./dialogStore-BzMbsXyV.js";
import "./userStore-BR8OofxE.js";
import "./useErrorHandling-Ch3yRrgJ.js";
import "./downloadUtil-D3N-czcI.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DhKZ6h9r.js";
import "./useCopyToClipboard-CQ0qJD1x.js";
import "./vendor-tiptap-DCOyDD5A.js";
import "./WaveAudioPlayer-BmrB2yRe.js";
import "./Popover-pEJct6yy.js";
import { t as electronAPI } from "./envUtil-iYCo4Y6R.js";
import "./electronDownloadStore-Sv0ABKT3.js";
import "./markdownRendererUtil-DVjNVant.js";
import "./useExternalLink-Ci40lNMZ.js";
import { n as require_addon_fit, t as require_xterm } from "./vendor-xterm-FgSvsPZ9.js";
//#region src/composables/bottomPanelTabs/useTerminal.ts
var import_addon_fit = require_addon_fit();
var import_xterm = require_xterm();
function useTerminal(element) {
	const fitAddon = new import_addon_fit.FitAddon();
	const terminal = markRaw(new import_xterm.Terminal({
		convertEol: true,
		theme: isDesktop ? { background: "#171717" } : void 0
	}));
	terminal.loadAddon(fitAddon);
	terminal.attachCustomKeyEventHandler((event) => {
		if (event.type === "keydown" && (event.ctrlKey || event.metaKey) && (event.key === "c" && terminal.hasSelection() || event.key === "v")) return false;
		return true;
	});
	onMounted(async () => {
		if (element.value) terminal.open(element.value);
	});
	onUnmounted(() => {
		terminal.dispose();
	});
	return {
		terminal,
		useAutoSize({ root, autoRows = true, autoCols = true, minCols = Number.NEGATIVE_INFINITY, minRows = Number.NEGATIVE_INFINITY, onResize }) {
			const ensureValidRows = (rows) => {
				if (rows == null || isNaN(rows)) return (root.value?.clientHeight ?? 80) / 20;
				return rows;
			};
			const ensureValidCols = (cols) => {
				if (cols == null || isNaN(cols)) return (root.value?.clientWidth ?? 80) / 8;
				return cols;
			};
			const resize = () => {
				const dims = fitAddon.proposeDimensions();
				terminal.resize(Math.max(autoCols ? ensureValidCols(dims?.cols) : terminal.cols, minCols), Math.max(autoRows ? ensureValidRows(dims?.rows) : terminal.rows, minRows));
				onResize?.();
			};
			const resizeObserver = new ResizeObserver(debounce(resize, 25));
			onMounted(async () => {
				if (root.value) {
					resizeObserver.observe(root.value);
					resize();
				}
			});
			onUnmounted(() => {
				resizeObserver.disconnect();
			});
			return { resize };
		}
	};
}
//#endregion
//#region src/components/bottomPanel/tabs/terminal/BaseTerminal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "p-terminal size-full rounded-none p-2" };
//#endregion
//#region src/components/bottomPanel/tabs/terminal/BaseTerminal.vue
var BaseTerminal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "BaseTerminal",
	emits: ["created", "unmounted"],
	setup(__props, { emit: __emit }) {
		const { t } = useI18n();
		const emit = __emit;
		const terminalEl = ref();
		const rootEl = ref();
		const hasSelection = ref(false);
		const isHovered = useElementHover(rootEl);
		const terminalData = useTerminal(terminalEl);
		emit("created", terminalData, ref(rootEl));
		const { terminal } = terminalData;
		let selectionDisposable;
		const tooltipText = computed(() => {
			return hasSelection.value ? t("serverStart.copySelectionTooltip") : t("serverStart.copyAllTooltip");
		});
		const handleCopy = async () => {
			const existingSelection = terminal.getSelection();
			const shouldSelectAll = !existingSelection;
			if (shouldSelectAll) terminal.selectAll();
			const selectedText = shouldSelectAll ? terminal.getSelection() : existingSelection;
			if (selectedText) {
				await navigator.clipboard.writeText(selectedText);
				if (shouldSelectAll) terminal.clearSelection();
			}
		};
		const showContextMenu = (event) => {
			event.preventDefault();
			electronAPI()?.showContextMenu({ type: "text" });
		};
		if (isDesktop) useEventListener(terminalEl, "contextmenu", showContextMenu);
		onMounted(() => {
			selectionDisposable = terminal.onSelectionChange(() => {
				hasSelection.value = terminal.hasSelection();
			});
		});
		onUnmounted(() => {
			selectionDisposable?.dispose();
			emit("unmounted");
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", {
				ref_key: "rootEl",
				ref: rootEl,
				class: "relative size-full overflow-hidden bg-neutral-900"
			}, [createBaseVNode("div", _hoisted_1$1, [createBaseVNode("div", {
				ref_key: "terminalEl",
				ref: terminalEl,
				class: "terminal-host h-full"
			}, null, 512)]), withDirectives((openBlock(), createBlock(Button_default, {
				variant: "secondary",
				size: "sm",
				class: normalizeClass(unref(cn)("absolute top-2 right-8 transition-opacity", { "pointer-events-none opacity-0 select-none": !unref(isHovered) })),
				"aria-label": tooltipText.value,
				onClick: handleCopy
			}, {
				default: withCtx(() => _cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-copy" }, null, -1)])),
				_: 1
			}, 8, ["class", "aria-label"])), [[
				_directive_tooltip,
				{
					value: tooltipText.value,
					showDelay: 300
				},
				void 0,
				{ left: true }
			]])], 512);
		};
	}
}), [["__scopeId", "data-v-df290087"]]);
//#endregion
//#region src/components/bottomPanel/tabs/terminal/LogsTerminal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "size-full bg-transparent" };
var _hoisted_2 = {
	key: 0,
	class: "p-4 text-center"
};
//#endregion
//#region src/components/bottomPanel/tabs/terminal/LogsTerminal.vue
var LogsTerminal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LogsTerminal",
	setup(__props) {
		const errorMessage = ref("");
		const loading = ref(true);
		const terminalCreated = ({ terminal, useAutoSize }, root) => {
			useAutoSize({
				root,
				autoRows: true,
				autoCols: true,
				minCols: 80
			});
			const update = (entries) => {
				terminal.write(entries.map((e) => e.m).join(""));
			};
			const logReceived = (e) => {
				update(e.detail.entries);
			};
			const loadLogEntries = async () => {
				update((await api.getRawLogs()).entries);
			};
			const watchLogs = async () => {
				const { clientId } = storeToRefs(useExecutionStore());
				if (!clientId.value) await until(clientId).not.toBeNull();
				await api.subscribeLogs(true);
				api.addEventListener("logs", logReceived);
			};
			onMounted(async () => {
				try {
					await loadLogEntries();
				} catch (err) {
					console.error("Error loading logs", err);
					errorMessage.value = "Unable to load logs, please ensure you have updated your ComfyUI backend.";
					return;
				}
				await watchLogs();
				loading.value = false;
			});
			onUnmounted(async () => {
				if (api.clientId) await api.subscribeLogs(false);
				api.removeEventListener("logs", logReceived);
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [errorMessage.value ? (openBlock(), createElementBlock("p", _hoisted_2, toDisplayString(errorMessage.value), 1)) : loading.value ? (openBlock(), createBlock(unref(script), {
				key: 1,
				class: "relative inset-0 z-10 flex h-full items-center justify-center"
			})) : createCommentVNode("", true), withDirectives(createVNode(BaseTerminal_default, { onCreated: terminalCreated }, null, 512), [[vShow, !loading.value]])]);
		};
	}
}), [["__scopeId", "data-v-a37adc34"]]);
//#endregion
//#region src/components/bottomPanel/tabs/terminal/CommandTerminal.vue
var CommandTerminal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "CommandTerminal",
	setup(__props) {
		const terminalCreated = ({ terminal, useAutoSize }, root) => {
			const terminalApi = electronAPI().Terminal;
			let offData;
			let offOutput;
			useAutoSize({
				root,
				autoRows: true,
				autoCols: true,
				onResize: async () => {
					if (!terminal.element?.offsetParent) return;
					await terminalApi.resize(terminal.cols, terminal.rows);
				}
			});
			onMounted(async () => {
				offData = terminal.onData(async (message) => {
					await terminalApi.write(message);
				});
				offOutput = terminalApi.onOutput((message) => {
					terminal.write(message);
				});
				const restore = await terminalApi.restore();
				setTimeout(() => {
					if (restore.buffer.length) {
						terminal.resize(restore.size.cols, restore.size.rows);
						terminal.write(restore.buffer.join(""));
					}
				}, 500);
			});
			onUnmounted(() => {
				offData?.dispose();
				offOutput?.();
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(BaseTerminal_default, { onCreated: terminalCreated });
		};
	}
}), [["__scopeId", "data-v-49782f06"]]);
//#endregion
//#region src/composables/bottomPanelTabs/useTerminalTabs.ts
function useLogsTerminalTab() {
	return {
		id: "logs-terminal",
		title: "Logs",
		titleKey: "g.logs",
		component: markRaw(LogsTerminal_default),
		type: "vue"
	};
}
function useCommandTerminalTab() {
	return {
		id: "command-terminal",
		title: "Terminal",
		titleKey: "g.terminal",
		component: markRaw(CommandTerminal_default),
		type: "vue"
	};
}
//#endregion
export { useCommandTerminalTab, useLogsTerminalTab };

//# sourceMappingURL=useTerminalTabs-aM5-8fj-.js.map