const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CloudLayoutView-D7eoo-gm.js","./_plugin-vue_export-helper-DhKZ6h9r.js","./rolldown-runtime-DBfy44LZ.js","./vendor-primevue-DBMopt9T.js","./vendor-vue-core-BZypYDY7.js","./dialogService-DNEvvYnU.js","./vendor-other-Bwg2XU9O.js","./vendor-firebase-CW7q45Qc.js","./vendor-three-DR5nWP9y.js","./vendor-tiptap-DCOyDD5A.js","./vendor-reka-ui-DSBnIgrB.js","./vendor-i18n-B4rt6w-9.js","./vendor-sentry-CpCyDgNy.js","./vendor-vueuse-ctZ64Ita.js","./vendor-axios-CEUcXtjS.js","./vendor-markdown-BJR1tkAv.js","./vendor-zod-D-pZHtXX.js","./formatUtil-BrmPt11w.js","./src-BorKTv-H.js","./downloadUtil-D3N-czcI.js","./i18n-Bti21m_L.js","./types-BqIM6TDt.js","./toastStore-VVLBmmzn.js","./WaveAudioPlayer-BmrB2yRe.js","./Button-C-moMp8y.js","./Slider-CcrI1CG4.js","./api-DyWqG5-m.js","./vendor-yjs-DH6avz3u.js","./widget-W78njY6p.js","./colorUtil-B4LmkIZp.js","./Loader-BjJV6X5u.js","./Popover-pEJct6yy.js","./SelectValue-DIo2uSEg.js","./useCopyToClipboard-CQ0qJD1x.js","./useErrorHandling-Ch3yRrgJ.js","./useExternalLink-Ci40lNMZ.js","./envUtil-iYCo4Y6R.js","./useFeatureFlags-CaushwdG.js","./VideoPlayOverlay-Dirk-x3z.js","./assetMetadataUtils-C4X4hjOE.js","./telemetry-BglHASuB.js","./dialogStore-BzMbsXyV.js","./electronDownloadStore-Sv0ABKT3.js","./userStore-BR8OofxE.js","./widgetTypes-Dpe-o7oG.js","./markdownRendererUtil-DVjNVant.js","./GlobalToast-oW5Dx0xU.js","./BaseViewTemplate-Dqh5AUR_.js","./vendor-other-DODGPXtn.css","./dialogService-CBLXvn0_.css","./CloudLayoutView-DROL9oAr.css","./CloudLoginView-ClxogMIu.js","./previousFullPath-Bjla9iox.js","./signInSchema-CPz5QRti.js","./CloudLoginView-K9ms0jc0.css","./useCurrentUser-DE_37qTA.js","./CloudSignupView-pOWWJCOX.js","./PasswordFields-ccPBbqK8.js","./SignUpForm-COLp0tj9.js","./CloudSignupView-BlUYDr6L.css","./CloudForgotPasswordView-Bj2BJCfI.js","./CloudForgotPasswordView-DBj5Yxev.css","./CloudSurveyView-4EcyjB7r.js","./auth-BR1puiPR.js","./CloudSurveyView-CJ05EnUH.css","./UserCheckView-BCvKea7_.js","./CloudSorryContactSupportView-D3BsP5zH.js","./CloudSorryContactSupportView-Cg1Fm-bz.css","./CloudAuthTimeoutView-93MEhJ3b.js","./CloudSubscriptionRedirectView-eQ6bM3hj.js","./comfy-logo-single-DbeSQd73.js","./subscriptionCheckoutUtil-KxQ1XtMo.js"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-DBfy44LZ.js";
import { ct as __vitePreload } from "./vendor-primevue-DBMopt9T.js";
//#region src/platform/cloud/onboarding/onboardingCloudRoutes.ts
var cloudOnboardingRoutes = [{
	path: "/cloud",
	component: () => __vitePreload(() => import("./CloudLayoutView-D7eoo-gm.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), import.meta.url),
	children: [
		{
			path: "login",
			name: "cloud-login",
			component: () => __vitePreload(() => import("./CloudLoginView-ClxogMIu.js"), __vite__mapDeps([51,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,52,53,48,49,54]), import.meta.url),
			beforeEnter: async (to, _from, next) => {
				if (!to.query.switchAccount) {
					const { useCurrentUser } = await __vitePreload(async () => {
						const { useCurrentUser } = await import("./useCurrentUser-DE_37qTA.js");
						return { useCurrentUser };
					}, __vite__mapDeps([55,3,2,4,5,1,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,48,49]), import.meta.url);
					const { isLoggedIn } = useCurrentUser();
					if (isLoggedIn.value) return next({ name: "cloud-user-check" });
				}
				next();
			}
		},
		{
			path: "signup",
			name: "cloud-signup",
			component: () => __vitePreload(() => import("./CloudSignupView-pOWWJCOX.js"), __vite__mapDeps([56,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,57,58,53,52,48,49,59]), import.meta.url),
			beforeEnter: async (to, _from, next) => {
				if (!to.query.switchAccount) {
					const { useCurrentUser } = await __vitePreload(async () => {
						const { useCurrentUser } = await import("./useCurrentUser-DE_37qTA.js");
						return { useCurrentUser };
					}, __vite__mapDeps([55,3,2,4,5,1,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,48,49]), import.meta.url);
					const { isLoggedIn } = useCurrentUser();
					if (isLoggedIn.value) return next({ name: "cloud-user-check" });
				}
				next();
			}
		},
		{
			path: "forgot-password",
			name: "cloud-forgot-password",
			component: () => __vitePreload(() => import("./CloudForgotPasswordView-Bj2BJCfI.js"), __vite__mapDeps([60,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,48,49,61]), import.meta.url)
		},
		{
			path: "survey",
			name: "cloud-survey",
			component: () => __vitePreload(() => import("./CloudSurveyView-4EcyjB7r.js"), __vite__mapDeps([62,1,2,3,4,6,7,8,9,10,11,15,24,18,26,13,14,27,16,20,28,21,22,29,37,63,12,40,48,64]), import.meta.url),
			meta: { requiresAuth: true }
		},
		{
			path: "user-check",
			name: "cloud-user-check",
			component: () => __vitePreload(() => import("./UserCheckView-BCvKea7_.js"), __vite__mapDeps([65,2,3,4,6,7,8,9,10,13,15,24,18,26,14,27,16,20,11,28,21,22,29,34,37,63,12,48]), import.meta.url),
			meta: { requiresAuth: true }
		},
		{
			path: "sorry-contact-support",
			name: "cloud-sorry-contact-support",
			component: () => __vitePreload(() => import("./CloudSorryContactSupportView-D3BsP5zH.js"), __vite__mapDeps([66,1,2,11,4,67]), import.meta.url)
		},
		{
			path: "auth-timeout",
			name: "cloud-auth-timeout",
			component: () => __vitePreload(() => import("./CloudAuthTimeoutView-93MEhJ3b.js"), __vite__mapDeps([68,2,3,4,5,1,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,48,49]), import.meta.url),
			props: true
		},
		{
			path: "subscribe",
			name: "cloud-subscribe",
			component: () => __vitePreload(() => import("./CloudSubscriptionRedirectView-eQ6bM3hj.js"), __vite__mapDeps([69,2,3,4,5,1,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,70,71,48,49]), import.meta.url),
			meta: { requiresAuth: true }
		}
	]
}];
//#endregion
export { cloudOnboardingRoutes };

//# sourceMappingURL=onboardingCloudRoutes-DvxAE2xT.js.map