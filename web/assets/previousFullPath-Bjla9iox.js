import "./rolldown-runtime-DBfy44LZ.js";
import { At as ref, O as computed } from "./vendor-vue-core-BZypYDY7.js";
import { i as remoteConfig } from "./useFeatureFlags-CaushwdG.js";
import { la as getTierCredits } from "./dialogService-DNEvvYnU.js";
//#region src/platform/cloud/onboarding/composables/useFreeTierOnboarding.ts
function useFreeTierOnboarding() {
	const showEmailForm = ref(false);
	const freeTierCredits = computed(() => getTierCredits("free"));
	const isFreeTierEnabled = computed(() => remoteConfig.value.new_free_tier_subscriptions ?? false);
	function switchToEmailForm() {
		showEmailForm.value = true;
	}
	function switchToSocialLogin() {
		showEmailForm.value = false;
	}
	return {
		showEmailForm,
		freeTierCredits,
		isFreeTierEnabled,
		switchToEmailForm,
		switchToSocialLogin
	};
}
//#endregion
//#region src/platform/cloud/onboarding/utils/previousFullPath.ts
var decodeQueryParam = (value) => {
	try {
		return decodeURIComponent(value);
	} catch {
		return null;
	}
};
var isSafeInternalRedirectPath = (path) => {
	return path.startsWith("/") && !path.startsWith("//");
};
var getSafePreviousFullPath = (query) => {
	const raw = query.previousFullPath;
	const value = Array.isArray(raw) ? raw[0] : raw;
	if (!value) return null;
	const decoded = decodeQueryParam(value);
	if (!decoded) return null;
	return isSafeInternalRedirectPath(decoded) ? decoded : null;
};
//#endregion
export { useFreeTierOnboarding as n, getSafePreviousFullPath as t };

//# sourceMappingURL=previousFullPath-Bjla9iox.js.map