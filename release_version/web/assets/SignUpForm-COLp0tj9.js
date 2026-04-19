import "./rolldown-runtime-DBfy44LZ.js";
import { i as script, n as zodResolver, r as script$1, rt as script$2, tt as script$3 } from "./vendor-primevue-DBMopt9T.js";
import { A as createBlock, I as createTextVNode, L as createVNode, M as createElementBlock, O as computed, Wt as toDisplayString, j as createCommentVNode, k as createBaseVNode, tt as openBlock, vt as withCtx, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
import { rt as useThrottleFn } from "./vendor-vueuse-ctZ64Ita.js";
import { n as useI18n } from "./vendor-i18n-B4rt6w-9.js";
import { t as Button_default } from "./Button-C-moMp8y.js";
import { Xi as useAuthStore } from "./dialogService-DNEvvYnU.js";
import { r as signUpSchema } from "./signInSchema-CPz5QRti.js";
import { t as PasswordFields_default } from "./PasswordFields-ccPBbqK8.js";
//#region src/components/dialog/content/signin/SignUpForm.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	class: "mb-2 text-base font-medium opacity-80",
	for: "comfy-org-sign-up-email"
};
var _hoisted_2 = {
	key: 0,
	class: "text-red-500"
};
//#endregion
//#region src/components/dialog/content/signin/SignUpForm.vue
var SignUpForm_default = /* @__PURE__ */ defineComponent({
	__name: "SignUpForm",
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const { t } = useI18n();
		const authStore = useAuthStore();
		const loading = computed(() => authStore.loading);
		const emit = __emit;
		const onSubmit = useThrottleFn((event) => {
			if (event.valid) emit("submit", event.values);
		}, 1500);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(script), {
				class: "flex flex-col gap-6",
				resolver: unref(zodResolver)(unref(signUpSchema)),
				onSubmit: unref(onSubmit)
			}, {
				default: withCtx(($form) => [
					createVNode(unref(script$1), {
						name: "email",
						class: "flex flex-col gap-2"
					}, {
						default: withCtx(($field) => [
							createBaseVNode("label", _hoisted_1, toDisplayString(unref(t)("auth.signup.emailLabel")), 1),
							createVNode(unref(script$2), {
								"pt:root:id": "comfy-org-sign-up-email",
								"pt:root:autocomplete": "email",
								class: "h-10",
								type: "text",
								placeholder: unref(t)("auth.signup.emailPlaceholder"),
								invalid: $field.invalid
							}, null, 8, ["placeholder", "invalid"]),
							$field.error ? (openBlock(), createElementBlock("small", _hoisted_2, toDisplayString($field.error.message), 1)) : createCommentVNode("", true)
						]),
						_: 1
					}),
					createVNode(PasswordFields_default),
					loading.value ? (openBlock(), createBlock(unref(script$3), {
						key: 0,
						class: "mx-auto size-8"
					})) : (openBlock(), createBlock(Button_default, {
						key: 1,
						type: "submit",
						class: "mt-4 h-10 font-medium",
						disabled: !$form.valid
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("auth.signup.signUpButton")), 1)]),
						_: 2
					}, 1032, ["disabled"]))
				]),
				_: 1
			}, 8, ["resolver", "onSubmit"]);
		};
	}
});
//#endregion
export { SignUpForm_default as t };

//# sourceMappingURL=SignUpForm-COLp0tj9.js.map