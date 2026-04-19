import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import { J as nextTick } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-other-Bwg2XU9O.js";
import "./useFeatureFlags-CaushwdG.js";
import "./api-DyWqG5-m.js";
import "./toastStore-VVLBmmzn.js";
import "./vendor-markdown-BJR1tkAv.js";
import "./colorUtil-B4LmkIZp.js";
import "./i18n-Bti21m_L.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import "./Button-C-moMp8y.js";
import { In as useExtensionService, ba as addWidget, va as ComponentWidgetImpl } from "./dialogService-DNEvvYnU.js";
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
import "./vendor-three-DR5nWP9y.js";
import "./Load3DControls-CYY7iGHa.js";
import "./constants-BcXgRkIm.js";
import "./Load3dViewerContent-B57ABvKf.js";
import { t as Load3D_default } from "./Load3D-SKsJ5kU7.js";
import "./AnimationControls-CU6hJwAD.js";
import { t as useLoad3dService } from "./load3dService-Deo-N8xn.js";
import "./useLoad3dViewer-88OO8r31.js";
import { n as isAssetPreviewSupported, r as persistThumbnail } from "./assetPreviewUtil-cEvpBTjT.js";
import { n as useLoad3d } from "./useLoad3d-DfmRn5c3.js";
import { n as createExportMenuItems, t as Load3DConfiguration } from "./Load3DConfiguration-BWOQDJdr.js";
//#region src/extensions/core/saveMesh.ts
var inputSpec = {
	name: "image",
	type: "Preview3D",
	isPreview: true
};
useExtensionService().registerExtension({
	name: "Comfy.SaveGLB",
	async beforeRegisterNodeDef(_nodeType, nodeData) {
		if ("SaveGLB" === nodeData.name) nodeData.input.required.image = ["PREVIEW_3D"];
	},
	getCustomWidgets() {
		return { PREVIEW_3D(node) {
			const widget = new ComponentWidgetImpl({
				node,
				name: inputSpec.name,
				component: Load3D_default,
				inputSpec,
				options: {}
			});
			widget.type = "load3D";
			addWidget(node, widget);
			return { widget };
		} };
	},
	getNodeMenuItems(node) {
		if (node.constructor.comfyClass !== "SaveGLB") return [];
		const load3d = useLoad3dService().getLoad3d(node);
		if (!load3d) return [];
		if (load3d.isSplatModel()) return [];
		return createExportMenuItems(load3d);
	},
	async nodeCreated(node) {
		if (node.constructor.comfyClass !== "SaveGLB") return;
		const [oldWidth, oldHeight] = node.size;
		node.setSize([Math.max(oldWidth, 400), Math.max(oldHeight, 550)]);
		await nextTick();
		const onExecuted = node.onExecuted;
		node.onExecuted = function(output) {
			onExecuted?.call(this, output);
			const fileInfo = output["3d"]?.[0];
			if (!fileInfo) return;
			useLoad3d(node).waitForLoad3d((load3d) => {
				const modelWidget = node.widgets?.find((w) => w.name === "image");
				if (load3d && modelWidget) {
					const filePath = (fileInfo.subfolder ?? "") + "/" + (fileInfo.filename ?? "");
					modelWidget.value = filePath;
					const config = new Load3DConfiguration(load3d, node.properties);
					const loadFolder = fileInfo.type;
					config.configureForSaveMesh(loadFolder, filePath);
					if (isAssetPreviewSupported()) {
						const filename = fileInfo.filename ?? "";
						const onModelLoaded = () => {
							load3d.removeEventListener("modelLoadingEnd", onModelLoaded);
							load3d.captureThumbnail(256, 256).then((dataUrl) => fetch(dataUrl).then((r) => r.blob())).then((blob) => persistThumbnail(filename, blob)).catch(() => {});
						};
						load3d.addEventListener("modelLoadingEnd", onModelLoaded);
					}
				}
			});
		};
	}
});
//#endregion

//# sourceMappingURL=saveMesh-BYkB1-bY.js.map