// Shim for extensions/core/experimentalGraphLayout.ts
console.warn('[ComfyUI Notice] "extensions/core/experimentalGraphLayout.js" is an internal module, not part of the public API. Future updates may break this import.');
export const isNodeAutoLayoutable = window.comfyAPI.experimentalGraphLayout.isNodeAutoLayoutable;
export const runExperimentalAutoLayout = window.comfyAPI.experimentalGraphLayout.runExperimentalAutoLayout;
export const runSmartAutoLayout = window.comfyAPI.experimentalGraphLayout.runSmartAutoLayout;
