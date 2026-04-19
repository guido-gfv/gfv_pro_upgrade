import "./rolldown-runtime-DBfy44LZ.js";
import { At as ref, c as defineStore } from "./vendor-vue-core-BZypYDY7.js";
import { ct as forEachNode } from "./api-DyWqG5-m.js";
import { t as adjustColor } from "./colorUtil-B4LmkIZp.js";
//#region src/stores/nodeTypeColorStore.ts
var STORAGE_KEY = "Comfy.NodeTypeColorDefaults.v1";
/**
* Persisted default colors per Comfy node.type + UI flag for the palette dialog.
*/
var useNodeTypeColorStore = defineStore("nodeTypeColorDefaults", () => {
	const paletteOpen = ref(false);
	const typeColors = ref({});
	function loadFromStorage() {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) typeColors.value = JSON.parse(raw);
		} catch {}
	}
	function persist() {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(typeColors.value));
		} catch {}
	}
	loadFromStorage();
	function openPalette() {
		paletteOpen.value = true;
	}
	function closePalette() {
		paletteOpen.value = false;
	}
	function togglePalette() {
		paletteOpen.value = !paletteOpen.value;
	}
	function setTypeDefault(nodeType, pair) {
		typeColors.value = {
			...typeColors.value,
			[nodeType]: { ...pair }
		};
		persist();
	}
	function clearTypeDefault(nodeType) {
		if (!(nodeType in typeColors.value)) return;
		const next = { ...typeColors.value };
		delete next[nodeType];
		typeColors.value = next;
		persist();
	}
	function clearAllTypeDefaults() {
		if (!Object.keys(typeColors.value).length) return;
		typeColors.value = {};
		persist();
	}
	function getTypeDefault(nodeType) {
		return typeColors.value[nodeType];
	}
	return {
		paletteOpen,
		typeColors,
		openPalette,
		closePalette,
		togglePalette,
		setTypeDefault,
		clearTypeDefault,
		clearAllTypeDefaults,
		getTypeDefault,
		loadFromStorage
	};
});
//#endregion
//#region src/utils/nodeColorApply.ts
/**
* Apply header/body colors and notify Vue node layer (property triggers).
*/
function applyNodeColorPair(node, color, bgcolor) {
	const g = node.graph;
	if (!g) return;
	const oldC = node.color;
	const oldBg = node.bgcolor;
	if (oldC === color && oldBg === bgcolor) return;
	g.beforeChange(node);
	node.color = color;
	node.bgcolor = bgcolor;
	g.afterChange();
	if (oldC !== color) g.trigger("node:property:changed", {
		nodeId: node.id,
		property: "color",
		oldValue: oldC,
		newValue: color
	});
	if (oldBg !== bgcolor) g.trigger("node:property:changed", {
		nodeId: node.id,
		property: "bgcolor",
		oldValue: oldBg,
		newValue: bgcolor
	});
}
/** Derive Comfy-style header/body pair from one accent (Houdini-like pick). */
function pairFromAccentHex(hex) {
	const h = hex.startsWith("#") ? hex : `#${hex}`;
	return {
		color: adjustColor(h, { lightness: -.06 }),
		bgcolor: adjustColor(h, { lightness: .1 })
	};
}
/**
* Remove custom color/bgcolor/boxcolor so the node uses class/theme defaults again.
*/
function clearNodeColorOverrides(node) {
	const g = node.graph;
	if (!g) return;
	if (node.boxcolor !== void 0) {
		g.beforeChange(node);
		node.boxcolor = void 0;
		g.afterChange();
	}
	applyNodeColorPair(node, void 0, void 0);
}
/**
* Clear custom node colors everywhere under the root graph (including nested subgraphs).
*/
function clearAllNodeColorOverridesInHierarchy(rootGraph) {
	if (!rootGraph) return;
	forEachNode(rootGraph, (node) => {
		clearNodeColorOverrides(node);
	});
}
//#endregion
export { useNodeTypeColorStore as i, clearAllNodeColorOverridesInHierarchy as n, pairFromAccentHex as r, applyNodeColorPair as t };

//# sourceMappingURL=nodeColorApply-tJLi3UH-.js.map