import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import { At as ref, M as createElementBlock, Wt as toDisplayString, X as onBeforeUnmount, k as createBaseVNode, mt as watch, tt as openBlock, z as defineComponent } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-other-Bwg2XU9O.js";
import "./useFeatureFlags-CaushwdG.js";
import { E as useIntersectionObserver } from "./vendor-vueuse-ctZ64Ita.js";
import "./api-DyWqG5-m.js";
import "./toastStore-VVLBmmzn.js";
import "./vendor-markdown-BJR1tkAv.js";
import "./colorUtil-B4LmkIZp.js";
import "./i18n-Bti21m_L.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import "./Button-C-moMp8y.js";
import "./dialogService-DNEvvYnU.js";
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
import { n as isAssetPreviewSupported, t as findServerPreviewUrl } from "./assetPreviewUtil-cEvpBTjT.js";
//#region src/platform/assets/components/Media3DTop.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["src", "alt"];
var _hoisted_2 = {
	key: 1,
	class: "flex size-full flex-col items-center justify-center gap-2 bg-modal-card-placeholder-background transition-transform duration-300 group-hover:scale-105 group-data-[selected=true]:scale-105"
};
var _hoisted_3 = { class: "text-sm text-base-foreground" };
//#endregion
//#region src/platform/assets/components/Media3DTop.vue
var Media3DTop_default = /* @__PURE__ */ defineComponent({
	__name: "Media3DTop",
	props: { asset: {} },
	setup(__props) {
		const containerRef = ref();
		const thumbnailSrc = ref(null);
		const hasAttempted = ref(false);
		useIntersectionObserver(containerRef, ([entry]) => {
			if (entry?.isIntersecting && !hasAttempted.value) {
				hasAttempted.value = true;
				loadThumbnail();
			}
		});
		async function loadThumbnail() {
			if (__props.asset?.preview_id && __props.asset?.preview_url) {
				thumbnailSrc.value = __props.asset.preview_url;
				return;
			}
			if (!__props.asset?.src) return;
			if (__props.asset.name && isAssetPreviewSupported()) {
				const serverPreviewUrl = await findServerPreviewUrl(__props.asset.name);
				if (serverPreviewUrl) thumbnailSrc.value = serverPreviewUrl;
			}
		}
		function revokeThumbnail() {
			if (thumbnailSrc.value?.startsWith("blob:")) URL.revokeObjectURL(thumbnailSrc.value);
			thumbnailSrc.value = null;
		}
		watch(() => __props.asset?.src, () => {
			if (hasAttempted.value) {
				hasAttempted.value = false;
				revokeThumbnail();
			}
		});
		onBeforeUnmount(revokeThumbnail);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "containerRef",
				ref: containerRef,
				class: "relative size-full overflow-hidden rounded-sm"
			}, [thumbnailSrc.value ? (openBlock(), createElementBlock("img", {
				key: 0,
				src: thumbnailSrc.value,
				alt: _ctx.asset?.name,
				class: "size-full object-contain transition-transform duration-300 group-hover:scale-105 group-data-[selected=true]:scale-105"
			}, null, 8, _hoisted_1)) : (openBlock(), createElementBlock("div", _hoisted_2, [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "icon-[lucide--box] text-3xl text-muted-foreground" }, null, -1)), createBaseVNode("span", _hoisted_3, toDisplayString(_ctx.$t("assetBrowser.media.threeDModelPlaceholder")), 1)]))], 512);
		};
	}
});
//#endregion
export { Media3DTop_default as default };

//# sourceMappingURL=Media3DTop-CeFWZTcK.js.map