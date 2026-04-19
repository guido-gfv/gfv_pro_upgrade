import "./rolldown-runtime-DBfy44LZ.js";
import { O as computed } from "./vendor-vue-core-BZypYDY7.js";
import { G as createSharedComposable } from "./vendor-vueuse-ctZ64Ita.js";
import { qi as useTeamWorkspaceStore } from "./dialogService-DNEvvYnU.js";
//#region src/platform/workspace/composables/useWorkspaceUI.ts
function getPermissions(type, role) {
	if (type === "personal") return {
		canViewOtherMembers: false,
		canViewPendingInvites: false,
		canInviteMembers: false,
		canManageInvites: false,
		canRemoveMembers: false,
		canLeaveWorkspace: false,
		canAccessWorkspaceMenu: false,
		canManageSubscription: true,
		canTopUp: true
	};
	if (role === "owner") return {
		canViewOtherMembers: true,
		canViewPendingInvites: true,
		canInviteMembers: true,
		canManageInvites: true,
		canRemoveMembers: true,
		canLeaveWorkspace: true,
		canAccessWorkspaceMenu: true,
		canManageSubscription: true,
		canTopUp: true
	};
	return {
		canViewOtherMembers: true,
		canViewPendingInvites: false,
		canInviteMembers: false,
		canManageInvites: false,
		canRemoveMembers: false,
		canLeaveWorkspace: true,
		canAccessWorkspaceMenu: true,
		canManageSubscription: false,
		canTopUp: false
	};
}
function getUIConfig(type, role) {
	if (type === "personal") return {
		showMembersList: false,
		showPendingTab: false,
		showSearch: false,
		showDateColumn: false,
		showRoleBadge: false,
		membersGridCols: "grid-cols-1",
		pendingGridCols: "grid-cols-[50%_20%_20%_10%]",
		headerGridCols: "grid-cols-1",
		showEditWorkspaceMenuItem: false,
		workspaceMenuAction: null,
		workspaceMenuDisabledTooltip: null
	};
	if (role === "owner") return {
		showMembersList: true,
		showPendingTab: true,
		showSearch: true,
		showDateColumn: true,
		showRoleBadge: true,
		membersGridCols: "grid-cols-[50%_40%_10%]",
		pendingGridCols: "grid-cols-[50%_20%_20%_10%]",
		headerGridCols: "grid-cols-[50%_40%_10%]",
		showEditWorkspaceMenuItem: true,
		workspaceMenuAction: "delete",
		workspaceMenuDisabledTooltip: "workspacePanel.menu.deleteWorkspaceDisabledTooltip"
	};
	return {
		showMembersList: true,
		showPendingTab: false,
		showSearch: true,
		showDateColumn: true,
		showRoleBadge: true,
		membersGridCols: "grid-cols-[1fr_auto]",
		pendingGridCols: "grid-cols-[50%_20%_20%_10%]",
		headerGridCols: "grid-cols-[1fr_auto]",
		showEditWorkspaceMenuItem: false,
		workspaceMenuAction: "leave",
		workspaceMenuDisabledTooltip: null
	};
}
/**
* Internal implementation of UI configuration composable.
*/
function useWorkspaceUIInternal() {
	const store = useTeamWorkspaceStore();
	const workspaceType = computed(() => store.activeWorkspace?.type ?? "personal");
	const workspaceRole = computed(() => store.activeWorkspace?.role ?? "owner");
	return {
		permissions: computed(() => getPermissions(workspaceType.value, workspaceRole.value)),
		uiConfig: computed(() => getUIConfig(workspaceType.value, workspaceRole.value)),
		workspaceType,
		workspaceRole
	};
}
/**
* UI configuration composable derived from workspace state.
* Controls what UI elements are visible/enabled based on role and workspace type.
* Uses createSharedComposable to ensure tab state is shared across components.
*/
var useWorkspaceUI = createSharedComposable(useWorkspaceUIInternal);
//#endregion
export { useWorkspaceUI as t };

//# sourceMappingURL=useWorkspaceUI-DLxRamxi.js.map