import "./rolldown-runtime-DBfy44LZ.js";
import { s as script } from "./vendor-primevue-DBMopt9T.js";
import { At as ref, J as nextTick, K as mergeModels, L as createVNode, M as createElementBlock, O as computed, Vt as normalizeClass, dt as useModel, k as createBaseVNode, tt as openBlock, x as withModifiers, y as vShow, yt as withDirectives, z as defineComponent, zt as unref } from "./vendor-vue-core-BZypYDY7.js";
import "./vendor-markdown-BJR1tkAv.js";
import { t as renderMarkdownToHtml } from "./markdownRendererUtil-DVjNVant.js";
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetMarkdown.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["innerHTML"];
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetMarkdown.vue
var WidgetMarkdown_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetMarkdown",
	props: /* @__PURE__ */ mergeModels({ widget: {} }, {
		"modelValue": { default: "" },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const isEditing = ref(false);
		const textareaRef = ref();
		const renderedHtml = computed(() => {
			return renderMarkdownToHtml(modelValue.value || "");
		});
		const startEditing = async () => {
			if (isEditing.value || __props.widget.options?.read_only) return;
			isEditing.value = true;
			await nextTick();
			textareaRef.value?.$el?.focus();
		};
		const handleBlur = () => {
			isEditing.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "widget-markdown relative w-full",
				onDblclick: startEditing
			}, [createBaseVNode("div", {
				class: normalizeClass(["comfy-markdown-content size-full min-h-[60px] overflow-y-auto rounded-lg text-sm", isEditing.value === false ? "visible" : "invisible"]),
				tabindex: "0",
				"data-capture-wheel": "true",
				innerHTML: renderedHtml.value
			}, null, 10, _hoisted_1), withDirectives(createVNode(unref(script), {
				ref_key: "textareaRef",
				ref: textareaRef,
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
				"aria-label": `${_ctx.$t("g.edit")} ${_ctx.widget.name || _ctx.$t("g.markdown")} ${_ctx.$t("g.content")}`,
				class: "absolute inset-0 min-h-[60px] w-full resize-none",
				pt: { root: {
					class: "text-sm w-full h-full",
					onBlur: handleBlur
				} },
				"data-capture-wheel": "true",
				onPointerdownCapture: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"])),
				onPointermoveCapture: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"])),
				onPointerupCapture: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"])),
				onClick: _cache[4] || (_cache[4] = withModifiers(() => {}, ["stop"])),
				onKeydown: _cache[5] || (_cache[5] = withModifiers(() => {}, ["stop"]))
			}, null, 8, [
				"modelValue",
				"aria-label",
				"pt"
			]), [[vShow, isEditing.value]])], 32);
		};
	}
});
//#endregion
export { WidgetMarkdown_default as default };

//# sourceMappingURL=WidgetMarkdown-BHqGkk4l.js.map