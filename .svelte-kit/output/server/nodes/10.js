

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.c0b725f0.js","_app/immutable/chunks/scheduler.0c16bc3d.js","_app/immutable/chunks/index.9868a140.js","_app/immutable/chunks/footer.35ce440a.js","_app/immutable/chunks/index.706cea86.js","_app/immutable/chunks/common.64c08b78.js","_app/immutable/chunks/index.55c9ec69.js"];
export const stylesheets = ["_app/immutable/assets/index.95b16411.css"];
export const fonts = [];
