import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-DBMopt9T.js";
import { L as createVNode, M as createElementBlock, Wt as toDisplayString, k as createBaseVNode, tt as openBlock, z as defineComponent } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-other-Bwg2XU9O.js";
import "./api-DyWqG5-m.js";
import "./toastStore-VVLBmmzn.js";
import "./vendor-markdown-BJR1tkAv.js";
import "./colorUtil-B4LmkIZp.js";
import "./i18n-Bti21m_L.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import "./Button-C-moMp8y.js";
import "./formatUtil-BrmPt11w.js";
import { t as WaveAudioPlayer_default } from "./WaveAudioPlayer-BmrB2yRe.js";
//#region src/platform/assets/components/MediaAudioTop.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "relative size-full overflow-hidden rounded-sm" };
var _hoisted_2 = { class: "flex size-full flex-col items-center justify-center gap-2 bg-modal-card-placeholder-background transition-transform duration-300 group-hover:scale-105 group-data-[selected=true]:scale-105" };
var _hoisted_3 = { class: "text-base-foreground" };
var _hoisted_4 = { class: "absolute bottom-0 left-0 w-full p-2" };
//#endregion
//#region src/platform/assets/components/MediaAudioTop.vue
var MediaAudioTop_default = /* @__PURE__ */ defineComponent({
	__name: "MediaAudioTop",
	props: { asset: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "icon-[lucide--music] text-3xl text-base-foreground" }, null, -1)), createBaseVNode("span", _hoisted_3, toDisplayString(_ctx.$t("assetBrowser.media.audioPlaceholder")), 1)]), createBaseVNode("div", _hoisted_4, [createVNode(WaveAudioPlayer_default, {
				src: _ctx.asset.src,
				"bar-count": 40,
				height: 32,
				align: "bottom"
			}, null, 8, ["src"])])]);
		};
	}
});
//#endregion
export { MediaAudioTop_default as default };

//# sourceMappingURL=MediaAudioTop-Bb08XLDV.js.map