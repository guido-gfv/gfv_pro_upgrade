import "./rolldown-runtime-DBfy44LZ.js";
import { u as storeToRefs } from "./vendor-vue-core-BZypYDY7.js";
import { qi as useTeamWorkspaceStore } from "./dialogService-DNEvvYnU.js";
//#region src/platform/workspace/composables/useWorkspaceSwitch.ts
function useWorkspaceSwitch() {
	const workspaceStore = useTeamWorkspaceStore();
	const { activeWorkspace } = storeToRefs(workspaceStore);
	async function switchWorkspace(workspaceId) {
		if (activeWorkspace.value?.id === workspaceId) return true;
		try {
			await workspaceStore.switchWorkspace(workspaceId);
			return true;
		} catch {
			return false;
		}
	}
	return { switchWorkspace };
}
//#endregion
export { useWorkspaceSwitch as t };

//# sourceMappingURL=useWorkspaceSwitch-47Iuer74.js.map