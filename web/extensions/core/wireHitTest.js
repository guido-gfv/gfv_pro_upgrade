// Shim for extensions/core/wireHitTest.ts
console.warn('[ComfyUI Notice] "extensions/core/wireHitTest.js" is an internal module, not part of the public API. Future updates may break this import.');
export const graphCoordsFromPointer = window.comfyAPI.wireHitTest.graphCoordsFromPointer;
export const findLinkIdsForCutLine = window.comfyAPI.wireHitTest.findLinkIdsForCutLine;
export const removeLinksByIds = window.comfyAPI.wireHitTest.removeLinksByIds;
