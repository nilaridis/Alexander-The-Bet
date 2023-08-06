

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.c17f2831.js","_app/immutable/chunks/scheduler.0c16bc3d.js","_app/immutable/chunks/index.9868a140.js"];
export const stylesheets = ["_app/immutable/assets/app.43aab179.css"];
export const fonts = [];
