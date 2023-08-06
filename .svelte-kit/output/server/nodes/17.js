

export const index = 17;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/statistics/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/17.0def2f44.js","_app/immutable/chunks/scheduler.0c16bc3d.js","_app/immutable/chunks/index.9868a140.js","_app/immutable/chunks/index.706cea86.js","_app/immutable/chunks/fun.01e5d352.js"];
export const stylesheets = ["_app/immutable/assets/index.95b16411.css"];
export const fonts = [];
