import "./rolldown-runtime-DBfy44LZ.js";
import { At as ref, Lt as toValue, O as computed, Q as onMounted } from "./vendor-vue-core-BZypYDY7.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { n as useI18n } from "./vendor-i18n-B4rt6w-9.js";
import { t as useTelemetry } from "./telemetry-BglHASuB.js";
import { Li as useAuthActions, Ri as useBillingContext, Ui as useCommandStore, la as getTierCredits, t as useDialogService, ua as getTierFeatures, ut as formatCreditsFromCents } from "./dialogService-DNEvvYnU.js";
//#region src/platform/cloud/subscription/composables/useSubscriptionActions.ts
/**
* Composable for handling subscription panel actions and loading states
*/
function useSubscriptionActions() {
	const dialogService = useDialogService();
	const authActions = useAuthActions();
	const commandStore = useCommandStore();
	const telemetry = useTelemetry();
	const { fetchStatus } = useBillingContext();
	const isLoadingSupport = ref(false);
	onMounted(() => {
		handleRefresh();
	});
	const handleAddApiCredits = () => {
		dialogService.showTopUpCreditsDialog();
	};
	const handleMessageSupport = async () => {
		try {
			isLoadingSupport.value = true;
			if (isCloud) telemetry?.trackHelpResourceClicked({
				resource_type: "help_feedback",
				is_external: true,
				source: "subscription"
			});
			await commandStore.execute("Comfy.ContactSupport");
		} catch (error) {
			console.error("[useSubscriptionActions] Error contacting support:", error);
		} finally {
			isLoadingSupport.value = false;
		}
	};
	const handleRefresh = async () => {
		try {
			await Promise.all([authActions.fetchBalance(), fetchStatus()]);
		} catch (error) {
			console.error("[useSubscriptionActions] Error refreshing data:", error);
		}
	};
	const handleLearnMoreClick = () => {
		window.open("https://docs.comfy.org/get_started/cloud", "_blank");
	};
	return {
		isLoadingSupport,
		handleAddApiCredits,
		handleMessageSupport,
		handleRefresh,
		handleLearnMoreClick
	};
}
//#endregion
//#region src/platform/cloud/subscription/composables/useSubscriptionCredits.ts
/**
* Composable for handling subscription credit calculations and formatting.
*
* Uses useBillingContext which automatically selects the correct billing source:
* - If team workspaces feature is disabled: uses legacy (/customers)
* - If team workspaces feature is enabled:
*   - Personal workspace: uses legacy (/customers)
*   - Team workspace: uses workspace (/billing)
*/
/**
* Formats a cent value to display credits.
* Backend returns cents despite the *_micros naming convention.
*/
function formatBalance(maybeCents, locale) {
	return formatCreditsFromCents({
		cents: maybeCents ?? 0,
		locale,
		numberOptions: {
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}
	});
}
function useSubscriptionCredits() {
	const billingContext = useBillingContext();
	const { locale } = useI18n();
	return {
		totalCredits: computed(() => {
			return formatBalance(toValue(billingContext.balance)?.amountMicros, locale.value);
		}),
		monthlyBonusCredits: computed(() => {
			return formatBalance(toValue(billingContext.balance)?.cloudCreditBalanceMicros, locale.value);
		}),
		prepaidCredits: computed(() => {
			return formatBalance(toValue(billingContext.balance)?.prepaidBalanceMicros, locale.value);
		}),
		isLoadingBalance: computed(() => toValue(billingContext.isLoading))
	};
}
//#endregion
//#region src/platform/cloud/subscription/utils/tierBenefits.ts
function getCommonTierBenefits(key, t, n) {
	const benefits = [];
	const isFree = key === "free";
	if (isFree) {
		const credits = getTierCredits(key);
		if (credits !== null) benefits.push({
			key: "monthlyCredits",
			type: "metric",
			value: n(credits),
			label: t("subscription.monthlyCreditsLabel")
		});
	}
	benefits.push({
		key: "maxDuration",
		type: "metric",
		value: t(`subscription.maxDuration.${key}`),
		label: t("subscription.maxDurationLabel")
	});
	benefits.push({
		key: "gpu",
		type: "feature",
		label: t("subscription.gpuLabel")
	});
	if (!isFree) benefits.push({
		key: "addCredits",
		type: "feature",
		label: t("subscription.addCreditsLabel")
	});
	if (getTierFeatures(key).customLoRAs) benefits.push({
		key: "customLoRAs",
		type: "feature",
		label: t("subscription.customLoRAsLabel")
	});
	return benefits;
}
//#endregion
export { useSubscriptionCredits as n, useSubscriptionActions as r, getCommonTierBenefits as t };

//# sourceMappingURL=tierBenefits-OvktL2Vy.js.map