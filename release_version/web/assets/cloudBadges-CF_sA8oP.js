import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import { O as computed, mt as watch } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-other-Bwg2XU9O.js";
import { i as remoteConfig } from "./useFeatureFlags-CaushwdG.js";
import "./api-DyWqG5-m.js";
import "./toastStore-VVLBmmzn.js";
import "./vendor-markdown-BJR1tkAv.js";
import "./colorUtil-B4LmkIZp.js";
import { o as t } from "./i18n-Bti21m_L.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import "./Button-C-moMp8y.js";
import { In as useExtensionService, j as useCanvasStore } from "./dialogService-DNEvvYnU.js";
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
//#region src/extensions/core/cloudBadges.ts
var badges = computed(() => {
	const result = [];
	const alert = remoteConfig.value.server_health_alert;
	if (alert) result.push({
		text: alert.message,
		label: alert.badge,
		variant: alert.severity ?? "error",
		tooltip: alert.tooltip
	});
	return result;
});
var canvasStore = useCanvasStore();
watch(() => canvasStore.canvas, (canvas) => {
	if (canvas) canvas.info_text = t("g.comfyCloud");
}, { immediate: true });
useExtensionService().registerExtension({
	name: "Comfy.Cloud.Badges",
	get topbarBadges() {
		return badges.value;
	}
});
//#endregion

//# sourceMappingURL=cloudBadges-CF_sA8oP.js.map