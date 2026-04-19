import "./rolldown-runtime-DBfy44LZ.js";
import { rt as script, st as script$1 } from "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import { A as createBlock, At as ref, I as createTextVNode, L as createVNode, M as createElementBlock, Wt as toDisplayString, j as createCommentVNode, k as createBaseVNode, o as useRouter, tt as openBlock, vt as withCtx, x as withModifiers, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-other-Bwg2XU9O.js";
import "./useFeatureFlags-CaushwdG.js";
import "./api-DyWqG5-m.js";
import "./toastStore-VVLBmmzn.js";
import "./vendor-markdown-BJR1tkAv.js";
import "./colorUtil-B4LmkIZp.js";
import { n as useI18n } from "./vendor-i18n-B4rt6w-9.js";
import "./i18n-Bti21m_L.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import { t as Button_default } from "./Button-C-moMp8y.js";
import { Li as useAuthActions } from "./dialogService-DNEvvYnU.js";
import "./formatUtil-BrmPt11w.js";
import "./dialogStore-BzMbsXyV.js";
import "./userStore-BR8OofxE.js";
import "./useErrorHandling-Ch3yRrgJ.js";
import "./downloadUtil-D3N-czcI.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DhKZ6h9r.js";
import "./useCopyToClipboard-CQ0qJD1x.js";
import "./vendor-tiptap-DCOyDD5A.js";
import "./WaveAudioPlayer-BmrB2yRe.js";
import "./Popover-pEJct6yy.js";
import "./electronDownloadStore-Sv0ABKT3.js";
import "./markdownRendererUtil-DVjNVant.js";
import "./useExternalLink-Ci40lNMZ.js";
//#region src/platform/cloud/onboarding/CloudForgotPasswordView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex h-full items-center justify-center p-8" };
var _hoisted_2 = { class: "max-w-[100vw] p-2 lg:w-96" };
var _hoisted_3 = { class: "mb-8 flex flex-col gap-4" };
var _hoisted_4 = { class: "my-0 text-xl/normal font-medium" };
var _hoisted_5 = { class: "my-0 text-base text-muted" };
var _hoisted_6 = { class: "flex flex-col gap-2" };
var _hoisted_7 = {
	class: "mb-2 text-base font-medium opacity-80",
	for: "reset-email"
};
var _hoisted_8 = {
	key: 0,
	class: "text-red-500"
};
var _hoisted_9 = { class: "flex flex-col gap-4" };
var _hoisted_10 = { class: "mt-5 text-sm text-gray-600" };
//#endregion
//#region src/platform/cloud/onboarding/CloudForgotPasswordView.vue
var CloudForgotPasswordView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "CloudForgotPasswordView",
	setup(__props) {
		const { t } = useI18n();
		const router = useRouter();
		const authActions = useAuthActions();
		const email = ref("");
		const loading = ref(false);
		const errorMessage = ref("");
		const successMessage = ref("");
		const navigateToLogin = () => {
			router.push({ name: "cloud-login" });
		};
		const handleSubmit = async () => {
			if (!email.value) {
				errorMessage.value = t("cloudForgotPassword_emailRequired");
				return;
			}
			loading.value = true;
			errorMessage.value = "";
			successMessage.value = "";
			try {
				await authActions.sendPasswordReset(email.value);
				successMessage.value = t("cloudForgotPassword_passwordResetSent");
				setTimeout(() => {
					navigateToLogin();
				}, 3e3);
			} catch (error) {
				console.error("Password reset error:", error);
				errorMessage.value = t("cloudForgotPassword_passwordResetError");
			} finally {
				loading.value = false;
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
				createBaseVNode("div", _hoisted_3, [createBaseVNode("h1", _hoisted_4, toDisplayString(unref(t)("cloudForgotPassword_title")), 1), createBaseVNode("p", _hoisted_5, toDisplayString(unref(t)("cloudForgotPassword_instructions")), 1)]),
				createBaseVNode("form", {
					class: "flex flex-col gap-6",
					onSubmit: withModifiers(handleSubmit, ["prevent"])
				}, [
					createBaseVNode("div", _hoisted_6, [
						createBaseVNode("label", _hoisted_7, toDisplayString(unref(t)("cloudForgotPassword_emailLabel")), 1),
						createVNode(unref(script), {
							id: "reset-email",
							modelValue: email.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => email.value = $event),
							type: "email",
							placeholder: unref(t)("cloudForgotPassword_emailPlaceholder"),
							class: "h-10",
							invalid: !!errorMessage.value && !email.value,
							autocomplete: "email",
							required: ""
						}, null, 8, [
							"modelValue",
							"placeholder",
							"invalid"
						]),
						errorMessage.value ? (openBlock(), createElementBlock("small", _hoisted_8, toDisplayString(errorMessage.value), 1)) : createCommentVNode("", true)
					]),
					successMessage.value ? (openBlock(), createBlock(unref(script$1), {
						key: 0,
						severity: "success"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(successMessage.value), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					createBaseVNode("div", _hoisted_9, [createVNode(Button_default, {
						type: "submit",
						loading: loading.value,
						disabled: !email.value || loading.value,
						class: "h-10 font-medium text-white"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("cloudForgotPassword_sendResetLink")), 1)]),
						_: 1
					}, 8, ["loading", "disabled"]), createVNode(Button_default, {
						type: "button",
						variant: "secondary",
						class: "h-10 bg-charcoal-500",
						onClick: navigateToLogin
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("cloudForgotPassword_backToLogin")), 1)]),
						_: 1
					})])
				], 32),
				createBaseVNode("p", _hoisted_10, toDisplayString(unref(t)("cloudForgotPassword_didntReceiveEmail")), 1)
			])]);
		};
	}
}), [["__scopeId", "data-v-c8997a82"]]);
//#endregion
export { CloudForgotPasswordView_default as default };

//# sourceMappingURL=CloudForgotPasswordView-Bj2BJCfI.js.map