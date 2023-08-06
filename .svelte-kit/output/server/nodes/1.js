

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.11111e14.js","_app/immutable/chunks/scheduler.0c16bc3d.js","_app/immutable/chunks/index.9868a140.js","_app/immutable/chunks/singletons.dc45071f.js","_app/immutable/chunks/index.55c9ec69.js"];
export const stylesheets = [];
export const fonts = [];
