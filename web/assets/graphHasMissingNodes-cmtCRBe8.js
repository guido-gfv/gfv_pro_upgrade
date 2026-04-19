import "./rolldown-runtime-DBfy44LZ.js";
import { A as createBlock, N as createPropsRestProxy, it as renderSlot, q as mergeProps, tt as openBlock, vt as withCtx, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
import { it as collectAllNodes } from "./api-DyWqG5-m.js";
import { Dt as Primitive, kt as useForwardProps } from "./vendor-reka-ui-DSBnIgrB.js";
import { t as cn } from "./src-BorKTv-H.js";
//#endregion
//#region src/components/ui/button-group/ButtonGroup.vue
var ButtonGroup_default = /* @__PURE__ */ defineComponent({
	__name: "ButtonGroup",
	props: {
		class: { default: "" },
		asChild: { type: Boolean },
		as: { default: "div" }
	},
	setup(__props) {
		const forwardedProps = useForwardProps(createPropsRestProxy(__props, ["as", "class"]));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(unref(forwardedProps), {
				as: _ctx.as,
				class: unref(cn)("inline-flex items-stretch overflow-hidden rounded-md", __props.class)
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["as", "class"]);
		};
	}
});
//#endregion
//#region src/workbench/extensions/manager/utils/graphHasMissingNodes.ts
var isNodeMissingDefinition = (node, nodeDefsByName) => {
	const nodeName = node?.type;
	if (!nodeName) return false;
	return !nodeDefsByName[nodeName];
};
var collectMissingNodes = (graph, nodeDefsByName) => {
	if (!graph) return [];
	const lookup = unref(nodeDefsByName);
	return collectAllNodes(graph, (node) => isNodeMissingDefinition(node, lookup));
};
var graphHasMissingNodes = (graph, nodeDefsByName) => {
	return collectMissingNodes(graph, nodeDefsByName).length > 0;
};
//#endregion
export { ButtonGroup_default as n, graphHasMissingNodes as t };

//# sourceMappingURL=graphHasMissingNodes-cmtCRBe8.js.map