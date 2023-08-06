import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                   */import { N as Navbar, F as Footer } from "../../../chunks/footer.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="app"><main>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main></div>`;
});
export {
  Layout as default
};
