import "./rolldown-runtime-DBfy44LZ.js";
import { A as createBlock, I as createTextVNode, O as computed, Wt as toDisplayString, k as createBaseVNode, ot as resolveDirective, tt as openBlock, vt as withCtx, yt as withDirectives, z as defineComponent } from "./vendor-vue-core-BZypYDY7.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { d as useBreakpoints, i as breakpointsTailwind } from "./vendor-vueuse-ctZ64Ita.js";
import { n as useI18n } from "./vendor-i18n-B4rt6w-9.js";
import { t as useTelemetry } from "./telemetry-BglHASuB.js";
import { t as Button_default } from "./Button-C-moMp8y.js";
import { Ri as useBillingContext } from "./dialogService-DNEvvYnU.js";
//#endregion
//#region src/platform/cloud/subscription/components/SubscribeToRun.vue
var SubscribeToRun_default = /* @__PURE__ */ defineComponent({
	__name: "SubscribeToRun",
	setup(__props) {
		const { t } = useI18n();
		const isMdOrLarger = useBreakpoints(breakpointsTailwind).greaterOrEqual("md");
		const buttonLabel = computed(() => isMdOrLarger.value ? t("subscription.subscribeToRunFull") : t("subscription.subscribeToRun"));
		const { showSubscriptionDialog } = useBillingContext();
		const handleSubscribeToRun = () => {
			if (isCloud) useTelemetry()?.trackRunButton({ subscribe_to_run: true });
			showSubscriptionDialog();
		};
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return withDirectives((openBlock(), createBlock(Button_default, {
				class: "subscribe-to-run-button whitespace-nowrap",
				variant: "gradient",
				size: "sm",
				"data-testid": "subscribe-to-run-button",
				onClick: handleSubscribeToRun
			}, {
				default: withCtx(() => [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "pi pi-lock" }, null, -1)), createTextVNode(" " + toDisplayString(buttonLabel.value), 1)]),
				_: 1
			})), [[
				_directive_tooltip,
				{
					value: _ctx.$t("subscription.subscribeToRunFull"),
					showDelay: 600
				},
				void 0,
				{ bottom: true }
			]]);
		};
	}
});
//#endregion
export { SubscribeToRun_default as t };

//# sourceMappingURL=SubscribeToRun-C_FtA9el.js.map