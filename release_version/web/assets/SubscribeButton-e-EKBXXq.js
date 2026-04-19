import "./rolldown-runtime-DBfy44LZ.js";
import { A as createBlock, At as ref, I as createTextVNode, Vt as normalizeClass, Wt as toDisplayString, X as onBeforeUnmount, mt as watch, tt as openBlock, vt as withCtx, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { t as useTelemetry } from "./telemetry-BglHASuB.js";
import { t as cn } from "./src-BorKTv-H.js";
import { t as Button_default } from "./Button-C-moMp8y.js";
import { Bi as useSubscription, Ri as useBillingContext } from "./dialogService-DNEvvYnU.js";
//#endregion
//#region src/platform/cloud/subscription/components/SubscribeButton.vue
var SubscribeButton_default = /* @__PURE__ */ defineComponent({
	__name: "SubscribeButton",
	props: {
		label: {},
		size: { default: "lg" },
		buttonVariant: { default: "default" },
		fluid: {
			type: Boolean,
			default: true
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	emits: ["subscribed"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { isActiveSubscription, showSubscriptionDialog } = useBillingContext();
		const { subscriptionTier } = useSubscription();
		const isAwaitingStripeSubscription = ref(false);
		watch([isAwaitingStripeSubscription, isActiveSubscription], ([awaiting, isActive]) => {
			if (isCloud && awaiting && isActive) {
				emit("subscribed");
				isAwaitingStripeSubscription.value = false;
			}
		});
		const handleSubscribe = () => {
			if (isCloud) useTelemetry()?.trackSubscription("subscribe_clicked", { current_tier: subscriptionTier.value?.toLowerCase() });
			isAwaitingStripeSubscription.value = true;
			showSubscriptionDialog();
		};
		onBeforeUnmount(() => {
			isAwaitingStripeSubscription.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Button_default, {
				size: _ctx.size,
				disabled: _ctx.disabled,
				variant: _ctx.buttonVariant === "gradient" ? "gradient" : "primary",
				class: normalizeClass(unref(cn)("font-bold", _ctx.fluid && "w-full")),
				onClick: handleSubscribe
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.label || _ctx.$t("subscription.required.subscribe")), 1)]),
				_: 1
			}, 8, [
				"size",
				"disabled",
				"variant",
				"class"
			]);
		};
	}
});
//#endregion
export { SubscribeButton_default as t };

//# sourceMappingURL=SubscribeButton-e-EKBXXq.js.map