import "./rolldown-runtime-DBfy44LZ.js";
import { A as createBlock, O as computed, tt as openBlock, z as defineComponent } from "./vendor-vue-core-BZypYDY7.js";
import { t as TopbarBadge_default } from "./TopbarBadge-CWiPtKAG.js";
//#endregion
//#region src/components/topbar/CloudBadge.vue
var CloudBadge_default = /* @__PURE__ */ defineComponent({
	__name: "CloudBadge",
	props: {
		displayMode: { default: "full" },
		reverseOrder: { type: Boolean },
		noPadding: { type: Boolean },
		backgroundColor: { default: "var(--comfy-menu-bg)" }
	},
	setup(__props) {
		const cloudBadge = computed(() => ({
			icon: "icon-[lucide--cloud]",
			text: "Comfy Cloud"
		}));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TopbarBadge_default, {
				badge: cloudBadge.value,
				"display-mode": _ctx.displayMode,
				"reverse-order": _ctx.reverseOrder,
				"no-padding": _ctx.noPadding,
				"background-color": _ctx.backgroundColor
			}, null, 8, [
				"badge",
				"display-mode",
				"reverse-order",
				"no-padding",
				"background-color"
			]);
		};
	}
});
//#endregion
export { CloudBadge_default as t };

//# sourceMappingURL=CloudBadge-DJd2nlAL.js.map