import "./rolldown-runtime-DBfy44LZ.js";
import "./vendor-primevue-DBMopt9T.js";
import "./vendor-firebase-CW7q45Qc.js";
import "./vendor-other-Bwg2XU9O.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
import { n as useFeatureFlags } from "./useFeatureFlags-CaushwdG.js";
import { r as api } from "./api-DyWqG5-m.js";
import "./toastStore-VVLBmmzn.js";
import "./vendor-markdown-BJR1tkAv.js";
import "./colorUtil-B4LmkIZp.js";
import "./i18n-Bti21m_L.js";
import "./vendor-reka-ui-DSBnIgrB.js";
import "./Button-C-moMp8y.js";
import { In as useExtensionService, Xi as useAuthStore } from "./dialogService-DNEvvYnU.js";
import "./formatUtil-BrmPt11w.js";
import "./dialogStore-BzMbsXyV.js";
import "./userStore-BR8OofxE.js";
import "./useErrorHandling-Ch3yRrgJ.js";
import "./downloadUtil-D3N-czcI.js";
import "./useCopyToClipboard-CQ0qJD1x.js";
import "./vendor-tiptap-DCOyDD5A.js";
import "./WaveAudioPlayer-BmrB2yRe.js";
import "./Popover-pEJct6yy.js";
import "./electronDownloadStore-Sv0ABKT3.js";
import "./markdownRendererUtil-DVjNVant.js";
import "./useExternalLink-Ci40lNMZ.js";
//#region src/platform/auth/session/useSessionCookie.ts
/**
* Session cookie management for cloud authentication.
* Creates and deletes session cookies on the ComfyUI server.
*/
var useSessionCookie = () => {
	/**
	* Creates or refreshes the session cookie.
	* Called after login and on token refresh.
	*
	* When team_workspaces_enabled is true, uses Firebase token directly
	* (since getAuthHeader() returns workspace token which shouldn't be used for session creation).
	* When disabled, uses getAuthHeader() for backward compatibility.
	*/
	const createSession = async () => {
		if (!isCloud) return;
		const { flags } = useFeatureFlags();
		try {
			const authStore = useAuthStore();
			let authHeader;
			if (flags.teamWorkspacesEnabled) {
				const firebaseToken = await authStore.getIdToken();
				if (!firebaseToken) {
					console.warn("Failed to create session cookie:", "No Firebase token available for session creation");
					return;
				}
				authHeader = { Authorization: `Bearer ${firebaseToken}` };
			} else {
				const header = await authStore.getAuthHeader();
				if (!header) {
					console.warn("Failed to create session cookie:", "No auth header available for session creation");
					return;
				}
				authHeader = header;
			}
			const response = await fetch(api.apiURL("/auth/session"), {
				method: "POST",
				credentials: "include",
				headers: {
					...authHeader,
					"Content-Type": "application/json"
				}
			});
			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				console.warn("Failed to create session cookie:", errorData.message || response.statusText);
			}
		} catch (error) {
			console.warn("Failed to create session cookie:", error);
		}
	};
	/**
	* Deletes the session cookie.
	* Called on logout.
	*/
	const deleteSession = async () => {
		if (!isCloud) return;
		try {
			const response = await fetch(api.apiURL("/auth/session"), {
				method: "DELETE",
				credentials: "include"
			});
			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				console.warn("Failed to delete session cookie:", errorData.message || response.statusText);
			}
		} catch (error) {
			console.warn("Failed to delete session cookie:", error);
		}
	};
	return {
		createSession,
		deleteSession
	};
};
//#endregion
//#region src/extensions/core/cloudSessionCookie.ts
/**
* Cloud-only extension that manages session cookies for authentication.
* Creates session cookie on login, refreshes it when token refreshes, and deletes on logout.
*/
useExtensionService().registerExtension({
	name: "Comfy.Cloud.SessionCookie",
	onAuthUserResolved: async () => {
		const { createSession } = useSessionCookie();
		await createSession();
	},
	onAuthTokenRefreshed: async () => {
		const { createSession } = useSessionCookie();
		await createSession();
	},
	onAuthUserLogout: async () => {
		const { deleteSession } = useSessionCookie();
		await deleteSession();
	}
});
//#endregion

//# sourceMappingURL=cloudSessionCookie-B37C22Fr.js.map