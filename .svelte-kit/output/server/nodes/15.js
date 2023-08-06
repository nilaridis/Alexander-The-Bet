

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gallery/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/15.eb4e2843.js","_app/immutable/chunks/scheduler.0c16bc3d.js","_app/immutable/chunks/index.9868a140.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.706cea86.js"];
export const stylesheets = ["_app/immutable/assets/index.95b16411.css"];
export const fonts = [];
