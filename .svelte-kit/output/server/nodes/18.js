

export const index = 18;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/18.db4f1688.js","_app/immutable/chunks/scheduler.0c16bc3d.js","_app/immutable/chunks/index.9868a140.js"];
export const stylesheets = [];
export const fonts = [];
