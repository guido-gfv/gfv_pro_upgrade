import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import "./vendor-other-Bwg2XU9O.js";
import "./useFeatureFlags-CaushwdG.js";
import "./api-DyWqG5-m.js";
import "./toastStore-VVLBmmzn.js";
import "./vendor-markdown-BJR1tkAv.js";
import "./colorUtil-B4LmkIZp.js";
import { o as t } from "./i18n-Bti21m_L.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import "./Button-C-moMp8y.js";
import { In as useExtensionService, a as useSettingStore } from "./dialogService-DNEvvYnU.js";
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
//#region src/extensions/core/cloudFeedbackTopbarButton.ts
var TYPEFORM_SURVEY_URL = "https://form.typeform.com/to/q7azbWPi";
var buttons = [{
	icon: "icon-[lucide--message-square-text]",
	label: t("actionbar.feedback"),
	tooltip: t("actionbar.feedbackTooltip"),
	onClick: () => {
		window.open(TYPEFORM_SURVEY_URL, "_blank", "noopener,noreferrer");
	}
}];
useExtensionService().registerExtension({
	name: "Comfy.FeedbackButton",
	get actionBarButtons() {
		return useSettingStore().get("Comfy.UI.TabBarLayout") === "Legacy" ? buttons : [];
	}
});
//#endregion

//# sourceMappingURL=cloudFeedbackTopbarButton-T6jhszG1.js.map