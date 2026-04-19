import "./rolldown-runtime-DBfy44LZ.js";
import { H as script } from "./vendor-primevue-DBMopt9T.js";
import { A as createBlock, At as ref, O as computed, tt as openBlock, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
//#endregion
//#region src/components/common/UserAvatar.vue
var UserAvatar_default = /* @__PURE__ */ defineComponent({
	__name: "UserAvatar",
	props: {
		photoUrl: {},
		ariaLabel: {}
	},
	setup(__props) {
		const imageError = ref(false);
		const handleImageError = () => {
			imageError.value = true;
		};
		const hasAvatar = computed(() => __props.photoUrl && !imageError.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(script), {
				class: "aspect-square bg-interface-panel-selected-surface",
				image: _ctx.photoUrl ?? void 0,
				icon: hasAvatar.value ? void 0 : "icon-[lucide--user]",
				pt: { icon: {
					class: { "size-4": !hasAvatar.value },
					"data-testid": "avatar-icon"
				} },
				shape: "circle",
				"aria-label": _ctx.ariaLabel ?? _ctx.$t("auth.login.userAvatar"),
				onError: handleImageError
			}, null, 8, [
				"image",
				"icon",
				"pt",
				"aria-label"
			]);
		};
	}
});
//#endregion
export { UserAvatar_default as t };

//# sourceMappingURL=UserAvatar-CeYT5h4U.js.map