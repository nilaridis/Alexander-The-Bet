import { c as create_ssr_component, b as compute_rest_props, d as get_current_component, a as subscribe, v as validate_component, n as noop, o as onDestroy, f as add_attribute } from "./ssr.js";
import { F as Fa } from "./fa.js";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { f as forwardEventsBuilder, u as useMenuContext, r as resolveButtonType, M as MenuStates, R as Render, a as useId, b as useOpenClosed, S as State, F as Features, c as Menu } from "./common.js";
import { faInstagram, faDiscord, faTiktok } from "@fortawesome/free-brands-svg-icons";
const logo = "/_app/immutable/assets/logo.b7989ff4.png";
const MenuButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonStore;
  let itemsStore;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "disabled"]);
  let $api, $$unsubscribe_api;
  let $itemsStore, $$unsubscribe_itemsStore = noop, $$subscribe_itemsStore = () => ($$unsubscribe_itemsStore(), $$unsubscribe_itemsStore = subscribe(itemsStore, ($$value) => $itemsStore = $$value), itemsStore);
  let $buttonStore, $$unsubscribe_buttonStore = noop, $$subscribe_buttonStore = () => ($$unsubscribe_buttonStore(), $$unsubscribe_buttonStore = subscribe(buttonStore, ($$value) => $buttonStore = $$value), buttonStore);
  let { as = "button" } = $$props;
  let { use = [] } = $$props;
  let { disabled = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  const api = useMenuContext("MenuButton");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  const id = `headlessui-menu-button-${useId()}`;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$subscribe_buttonStore(buttonStore = $api.buttonStore);
    $$subscribe_itemsStore(itemsStore = $api.itemsStore);
    propsWeControl = {
      id,
      type: resolveButtonType({ type: $$props.type, as }, $buttonStore),
      disabled: disabled ? true : void 0,
      "aria-haspopup": true,
      "aria-controls": $itemsStore?.id,
      "aria-expanded": disabled ? void 0 : $api.menuState === MenuStates.Open
    };
    slotProps = { open: $api.menuState === MenuStates.Open };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign({}, { ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "MenuButton" }, { el: $buttonStore }),
      {
        el: ($$value) => {
          $buttonStore = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_api();
  $$unsubscribe_itemsStore();
  $$unsubscribe_buttonStore();
  return $$rendered;
});
function treeWalker({ container, accept, walk, enabled }) {
  let root = container;
  if (!root)
    return;
  if (enabled !== void 0 && !enabled)
    return;
  let acceptNode = Object.assign((node) => accept(node), {
    acceptNode: accept
  });
  let walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT,
    acceptNode,
    // @ts-ignore-error Typescript bug thinks this can only have 3 args
    false
  );
  while (walker.nextNode())
    walk(walker.currentNode);
}
const MenuItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonStore;
  let itemsStore;
  let visible;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let $buttonStore, $$unsubscribe_buttonStore = noop, $$subscribe_buttonStore = () => ($$unsubscribe_buttonStore(), $$unsubscribe_buttonStore = subscribe(buttonStore, ($$value) => $buttonStore = $$value), buttonStore);
  let $itemsStore, $$unsubscribe_itemsStore = noop, $$subscribe_itemsStore = () => ($$unsubscribe_itemsStore(), $$unsubscribe_itemsStore = subscribe(itemsStore, ($$value) => $itemsStore = $$value), itemsStore);
  let $openClosedState, $$unsubscribe_openClosedState;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  const api = useMenuContext("MenuItems");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  const id = `headlessui-menu-items-${useId()}`;
  let openClosedState = useOpenClosed();
  $$unsubscribe_openClosedState = subscribe(openClosedState, (value) => $openClosedState = value);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$subscribe_buttonStore(buttonStore = $api.buttonStore);
    $$subscribe_itemsStore(itemsStore = $api.itemsStore);
    visible = openClosedState !== void 0 ? $openClosedState === State.Open : $api.menuState === MenuStates.Open;
    {
      treeWalker({
        container: $itemsStore,
        enabled: $api.menuState === MenuStates.Open,
        accept(node) {
          if (node.getAttribute("role") === "menuitem")
            return NodeFilter.FILTER_REJECT;
          if (node.hasAttribute("role"))
            return NodeFilter.FILTER_SKIP;
          return NodeFilter.FILTER_ACCEPT;
        },
        walk(node) {
          node.setAttribute("role", "none");
        }
      });
    }
    propsWeControl = {
      "aria-activedescendant": $api.activeItemIndex === null ? void 0 : $api.items[$api.activeItemIndex]?.id,
      "aria-labelledby": $buttonStore?.id,
      id,
      role: "menu",
      tabIndex: 0
    };
    slotProps = { open: $api.menuState === MenuStates.Open };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign(
        {},
        { ...$$restProps, ...propsWeControl },
        { as },
        { slotProps },
        { use: [...use, forwardEvents] },
        { name: "MenuItems" },
        { visible },
        {
          features: Features.RenderStrategy | Features.Static
        },
        { el: $itemsStore }
      ),
      {
        el: ($$value) => {
          $itemsStore = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_api();
  $$unsubscribe_buttonStore();
  $$unsubscribe_itemsStore();
  $$unsubscribe_openClosedState();
  return $$rendered;
});
const MenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let buttonStore;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "disabled"]);
  let $api, $$unsubscribe_api;
  let $$unsubscribe_buttonStore = noop, $$subscribe_buttonStore = () => ($$unsubscribe_buttonStore(), $$unsubscribe_buttonStore = subscribe(buttonStore, ($$value) => $$value), buttonStore);
  let { as = "a" } = $$props;
  let { use = [] } = $$props;
  let { disabled = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component(), [
    {
      name: "click",
      shouldExclude: () => disabled
    }
  ]);
  const api = useMenuContext("MenuItem");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  const id = `headlessui-menu-item-${useId()}`;
  let elementRef;
  onDestroy(() => {
    $api.unregisterItem(id);
  });
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    active = $api.activeItemIndex !== null ? $api.items[$api.activeItemIndex].id === id : false;
    $$subscribe_buttonStore(buttonStore = $api.buttonStore);
    elementRef?.textContent?.toLowerCase().trim() || "";
    propsWeControl = {
      id,
      role: "menuitem",
      tabIndex: disabled === true ? void 0 : -1,
      "aria-disabled": disabled === true ? true : void 0
    };
    slotProps = { active, disabled };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign({}, { ...$$restProps, ...propsWeControl }, { use: [...use, forwardEvents] }, { as }, { slotProps }, { name: "MenuItem" }, { el: elementRef }),
      {
        el: ($$value) => {
          elementRef = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_api();
  $$unsubscribe_buttonStore();
  return $$rendered;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="w-full bg-secondary py-8 px-8 sm:px-12 xl:px-24 flex flex-row items-center"><a href="/" class="flex flex-row items-center gap-2 lg:gap-5"><img${add_attribute("src", logo, 0)} alt="Logo" class="w-20 sm:w-28"> <h1 class="text-center text-lg sm:text-3xl text-tertiary font-oswald" data-svelte-h="svelte-16io9uh">ALEXANDER<br>THE BET</h1></a> <div class="ml-auto hidden lg:flex gap-4 2xl:gap-10 text-xl font-sans items-center" data-svelte-h="svelte-o21zed"><a href="/freebets" class="text-white hover:text-tertiary transition-colors duration-300">Free Bets</a> <a href="/funbets" class="text-white hover:text-tertiary transition-colors duration-300">Fun Bets</a> <a href="/coupons" class="text-white hover:text-tertiary transition-colors duration-300">Δελτία</a> <a href="/statistics" class="text-white hover:text-tertiary transition-colors duration-300">Στατιστική</a> <a href="/gallery" class="text-white hover:text-tertiary transition-colors duration-300">Gallery</a> <a href="/faq" class="text-white hover:text-tertiary transition-colors duration-300">FAQ</a> <a href="mailto:betalexander777@gmail.com" target="_blank" class="text-white hover:text-tertiary transition-colors duration-300">Επικοινωνία</a></div> <div class="ml-auto">${validate_component(Menu, "Menu").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MenuButton, "MenuButton").$$render($$result, { class: "flex lg:hidden" }, {}, {
        default: () => {
          return `${validate_component(Fa, "Fa").$$render(
            $$result,
            {
              class: "text-xl sm:text-4xl",
              icon: faBars
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(MenuItems, "MenuItems").$$render(
        $$result,
        {
          class: "divide-y-2 divide-secondary top-0 right-0 h-screen w-44 bg-gray-100 bg-opacity-90 shadow-2xl transition-all absolute z-50 flex flex-col opacity-100 lg:hidden"
        },
        {},
        {
          default: () => {
            return `${validate_component(MenuItem, "MenuItem").$$render($$result, { class: "p-2 mt-5" }, {}, {
              default: ({ active }) => {
                return `<a href="/freebets" class="block text-center text-xl font-semibold opacity-95" data-svelte-h="svelte-52vdd3">Free Bets</a>`;
              }
            })} ${validate_component(MenuItem, "MenuItem").$$render($$result, { class: "p-2" }, {}, {
              default: ({ active }) => {
                return `<a href="/funbets" class="block text-center text-xl font-semibold opacity-95" data-svelte-h="svelte-195n7nf">Fun Bets</a>`;
              }
            })} ${validate_component(MenuItem, "MenuItem").$$render($$result, { class: "p-2" }, {}, {
              default: ({ active }) => {
                return `<a href="/coupons" class="block text-center text-xl font-semibold opacity-95" data-svelte-h="svelte-1cowo2">Δελτία</a>`;
              }
            })} ${validate_component(MenuItem, "MenuItem").$$render($$result, { class: "p-2" }, {}, {
              default: ({ active }) => {
                return `<a href="/statistics" class="block text-center text-xl font-semibold opacity-95" data-svelte-h="svelte-1vr3ndt">Στατιστική</a>`;
              }
            })} ${validate_component(MenuItem, "MenuItem").$$render($$result, { class: "p-2" }, {}, {
              default: ({ active }) => {
                return `<a href="/gallery" class="block text-center text-xl font-semibold opacity-95" data-svelte-h="svelte-l7ohnp">Gallery</a>`;
              }
            })} ${validate_component(MenuItem, "MenuItem").$$render($$result, { class: "p-2" }, {}, {
              default: ({ active }) => {
                return `<a href="/faq" class="block text-center text-xl font-semibold opacity-95" data-svelte-h="svelte-y9n3c1">FAQ</a>`;
              }
            })} ${validate_component(MenuItem, "MenuItem").$$render($$result, { class: "p-2" }, {}, {
              default: ({ active }) => {
                return `<a href="mailto:betalexander777@gmail.com" target="_blank" class="block text-center text-xl font-semibold opacity-95" data-svelte-h="svelte-5x18dp">Επικοινωνία</a>`;
              }
            })}`;
          }
        }
      )}`;
    }
  })}</div></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="bg-secondary py-6 px-8 sm:px-12 xl:px-24 text-white font-sans"><div class="flex flex-col justify-center items-center gap-3"><div class="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 pr-0 xl:pr-24"><div class="flex flex-col items-center justify-center gap-1" data-svelte-h="svelte-10st1op"><p class="text-lg font-bold text-center">Επικοινωνία</p> <p class="text-center">Email: <a href="mailto:betalexander777@gmail.com" target="_blank" class="hover:underline hover:cursor-pointer">betalexander777@gmail.com</a></p> <a href="https://www.google.com/maps/place/θεσσαλονικη" target="_blank" class="text-center hover:underline hover:cursor-pointer">Θεσσαλονίκη, Ελλάδα</a></div> <div class="flex flex-col items-center justify-center gap-1"><p class="text-lg font-bold text-center" data-svelte-h="svelte-121j3bv">Κοινωνικά Δίκτυα</p> <a href="https://www.instagram.com/alexanderthebet/" target="_blank" class="flex flex-row items-center gap-1">${validate_component(Fa, "Fa").$$render($$result, { icon: faInstagram }, {}, {})} <p class="text-center hover:underline hover:cursor-pointer" data-svelte-h="svelte-1okl8ri">Instagram</p></a> <a href="https://discord.gg/h6wFmCAuPP" target="_blank" class="flex flex-row items-center gap-1">${validate_component(Fa, "Fa").$$render($$result, { icon: faDiscord }, {}, {})} <p class="text-center hover:underline hover:cursor-pointer" data-svelte-h="svelte-fqm7uy">Discord</p></a> <a href="https://tiktok.com/@alexanderthebet" target="_blank" class="flex flex-row items-center gap-1">${validate_component(Fa, "Fa").$$render($$result, { icon: faTiktok }, {}, {})} <p class="text-center hover:underline hover:cursor-pointer" data-svelte-h="svelte-11lqp90">TikTok</p></a></div> <div class="flex flex-col items-center justify-center gap-1" data-svelte-h="svelte-73ogrg"><p class="text-lg font-bold text-center">Ασφάλεια</p> <a href="/privacypolicy" class="text-center hover:underline hover:cursor-pointer">Πολιτική Απορρήτου</a> <a href="/tos" class="text-center hover:underline hover:cursor-pointer">Όροι χρήσης</a></div></div> <div class="flex flex-col items-center justify-center mt-4" data-svelte-h="svelte-10whbcn"><p class="text-center">© 2023 Alexander The Bet. All rights reserved.</p> <p class="text-center text-sm">Website exclusively created by <a href="https://github.com/iHaz32" target="_blank" class="font-semibold hover:underline hover:cursor-pointer">https://github.com/iHaz32</a></p></div></div></footer>`;
});
export {
  Footer as F,
  Navbar as N
};
