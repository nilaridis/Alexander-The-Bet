import { c as create_ssr_component } from "../../chunks/ssr.js";
/* empty css                */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="app"><main class="min-h-screen bg-gray-100">${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
