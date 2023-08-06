import { c as create_ssr_component, b as compute_rest_props, d as get_current_component, h as createEventDispatcher, a as subscribe, s as setContext, v as validate_component, g as getContext, n as noop, i as each, e as escape, f as add_attribute } from "../../../chunks/ssr.js";
import { F as Fa } from "../../../chunks/fa.js";
import { faClock, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { f as forwardEventsBuilder, R as Render, g as globals, r as resolveButtonType, a as useId, F as Features } from "../../../chunks/common.js";
import { w as writable } from "../../../chunks/index.js";
import { f as free, a as fun, e as emerald, d as diamond } from "../../../chunks/fun.js";
const { Object: Object_1$2 } = globals;
const TABS_CONTEXT_NAME = "headlessui-tabs-context";
function useTabsContext(component) {
  let context = getContext(TABS_CONTEXT_NAME);
  if (context === void 0) {
    throw new Error(`<${component} /> is missing a parent <TabGroup /> component.`);
  }
  return context;
}
const TabGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "defaultIndex", "vertical", "manual"]);
  let $listRef, $$unsubscribe_listRef;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  let { defaultIndex = 0 } = $$props;
  let { vertical = false } = $$props;
  let { manual = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component(), ["change"]);
  const dispatch = createEventDispatcher();
  let selectedIndex = null;
  let tabs = [];
  let panels = [];
  let listRef = writable(null);
  $$unsubscribe_listRef = subscribe(listRef, (value) => $listRef = value);
  let api = writable({
    selectedIndex,
    orientation: vertical ? "vertical" : "horizontal",
    activation: manual ? "manual" : "auto",
    tabs,
    panels,
    listRef,
    setSelectedIndex(index) {
      if (selectedIndex === index)
        return;
      selectedIndex = index;
      dispatch("change", index);
    },
    registerTab(tab) {
      if (tabs.includes(tab))
        return;
      if (!$listRef) {
        tabs = [...tabs, tab];
        return;
      }
      let currentSelectedTab = selectedIndex !== null ? tabs[selectedIndex] : null;
      let orderMap = Array.from($listRef.querySelectorAll('[id^="headlessui-tabs-tab-"]')).reduce((lookup, element, index) => Object.assign(lookup, { [element.id]: index }), {});
      let nextTabs = [...tabs, tab];
      nextTabs.sort((a, z) => orderMap[a.id] - orderMap[z.id]);
      tabs = nextTabs;
      selectedIndex = (() => {
        if (currentSelectedTab === null)
          return null;
        return tabs.indexOf(currentSelectedTab);
      })();
    },
    unregisterTab(tab) {
      tabs = tabs.filter((t) => t !== tab);
    },
    registerPanel(panel) {
      if (!panels.includes(panel))
        panels = [...panels, panel];
    },
    unregisterPanel(panel) {
      panels = panels.filter((p) => p !== panel);
    }
  });
  setContext(TABS_CONTEXT_NAME, api);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.defaultIndex === void 0 && $$bindings.defaultIndex && defaultIndex !== void 0)
    $$bindings.defaultIndex(defaultIndex);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.manual === void 0 && $$bindings.manual && manual !== void 0)
    $$bindings.manual(manual);
  {
    api.update((obj) => {
      return {
        ...obj,
        selectedIndex,
        orientation: vertical ? "vertical" : "horizontal",
        activation: manual ? "manual" : "auto",
        tabs,
        panels
      };
    });
  }
  slotProps = { selectedIndex };
  $$unsubscribe_listRef();
  return `${validate_component(Render, "Render").$$render($$result, Object_1$2.assign({}, $$restProps, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "TabGroup" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
    }
  })}`;
});
const { Object: Object_1$1 } = globals;
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let myIndex;
  let selected;
  let myPanelRef;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "disabled"]);
  let $api, $$unsubscribe_api;
  let $myPanelRef, $$unsubscribe_myPanelRef = noop, $$subscribe_myPanelRef = () => ($$unsubscribe_myPanelRef(), $$unsubscribe_myPanelRef = subscribe(myPanelRef, ($$value) => $myPanelRef = $$value), myPanelRef);
  let { as = "button" } = $$props;
  let { use = [] } = $$props;
  let { disabled = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let api = useTabsContext("Tab");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let id = `headlessui-tabs-tab-${useId()}`;
  let tabRef = null;
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
    myIndex = tabRef ? $api.tabs.indexOf(tabRef) : -1;
    selected = myIndex === $api.selectedIndex;
    $$subscribe_myPanelRef(myPanelRef = $api.panels[myIndex]?.ref);
    propsWeControl = {
      id,
      role: "tab",
      type: resolveButtonType({ type: $$props.type, as }, tabRef),
      "aria-controls": $myPanelRef ? $api.panels[myIndex]?.id : void 0,
      "aria-selected": selected,
      tabIndex: selected ? 0 : -1,
      disabled: disabled ? true : void 0
    };
    slotProps = { selected };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object_1$1.assign({}, { ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "Tab" }, { el: tabRef }),
      {
        el: ($$value) => {
          tabRef = $$value;
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
  $$unsubscribe_myPanelRef();
  return $$rendered;
});
const TabList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let $listRef, $$unsubscribe_listRef;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let api = useTabsContext("TabList");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let listRef = $api.listRef;
  $$unsubscribe_listRef = subscribe(listRef, (value) => $listRef = value);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    propsWeControl = {
      role: "tablist",
      "aria-orientation": $api.orientation
    };
    slotProps = { selectedIndex: $api.selectedIndex };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign({}, { ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "TabList" }, { el: $listRef }),
      {
        el: ($$value) => {
          $listRef = $$value;
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
  $$unsubscribe_listRef();
  return $$rendered;
});
const TabPanels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let api = useTabsContext("TabPanels");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  slotProps = { selectedIndex: $api.selectedIndex };
  $$unsubscribe_api();
  return `${validate_component(Render, "Render").$$render($$result, Object.assign({}, $$restProps, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "TabPanels" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
    }
  })}`;
});
const { Object: Object_1 } = globals;
const TabPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let panelData;
  let myIndex;
  let selected;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let $elementRef, $$unsubscribe_elementRef;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let elementRef = writable(null);
  $$unsubscribe_elementRef = subscribe(elementRef, (value) => $elementRef = value);
  let api = useTabsContext("TabPanel");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let id = `headlessui-tabs-panel-${useId()}`;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    panelData = { id, ref: elementRef };
    myIndex = $api.panels.indexOf(panelData);
    selected = myIndex === $api.selectedIndex;
    propsWeControl = {
      id,
      role: "tabpanel",
      "aria-labelledby": $api.tabs[myIndex]?.id,
      tabIndex: selected ? 0 : -1
    };
    slotProps = { selected };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object_1.assign(
        {},
        { ...$$restProps, ...propsWeControl },
        { as },
        { use: [...use, forwardEvents] },
        { name: "TabPanel" },
        { slotProps },
        { visible: selected },
        {
          features: Features.RenderStrategy | Features.Static
        },
        { el: $elementRef }
      ),
      {
        el: ($$value) => {
          $elementRef = $$value;
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
  $$unsubscribe_elementRef();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="min-h-screen bg-gray-100 px-8 sm:px-12 xl:px-24 font-sans flex flex-col gap-24">${validate_component(TabGroup, "TabGroup").$$render($$result, { class: "mt-20" }, {}, {
    default: () => {
      return `${validate_component(TabList, "TabList").$$render(
        $$result,
        {
          class: "flex flex-col xl:flex-row gap-4 xl:gap-10 rounded-xl bg-secondary px-6 sm:px-10 py-5 w-full xl:w-max"
        },
        {},
        {
          default: () => {
            return `${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                class: "font-medium text-base sm:text-xl text-gray-100 text-opacity-80 hover:text-opacity-100"
              },
              {},
              {
                default: () => {
                  return `Δωρεάν Στοιχήματα`;
                }
              }
            )} <div class="w-full h-1 xl:w-1 xl:h-auto bg-gray-100"></div> ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                class: "font-medium text-base sm:text-xl text-gray-100 text-opacity-80 hover:text-opacity-100"
              },
              {},
              {
                default: () => {
                  return `Fun Bets`;
                }
              }
            )} <div class="w-full h-1 xl:w-1 xl:h-auto bg-gray-100"></div> ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                class: "font-medium text-base sm:text-xl text-gray-100 text-opacity-80 hover:text-opacity-100"
              },
              {},
              {
                default: () => {
                  return `Emerald Στοιχήματα`;
                }
              }
            )} <div class="w-full h-1 xl:w-1 xl:h-auto bg-gray-100"></div> ${validate_component(Tab, "Tab").$$render(
              $$result,
              {
                class: "font-medium text-base sm:text-xl text-gray-100 text-opacity-80 hover:text-opacity-100"
              },
              {},
              {
                default: () => {
                  return `Diamond Στοιχήματα`;
                }
              }
            )}`;
          }
        }
      )} ${validate_component(TabPanels, "TabPanels").$$render(
        $$result,
        {
          class: "mt-2 bg-secondary text-gray-100 rounded-lg p-10 mb-20"
        },
        {},
        {
          default: () => {
            return `${validate_component(TabPanel, "TabPanel").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="flex justify-center" data-svelte-h="svelte-1lzv99b"><h1 class="text-2xl font-medium text-gray-100 underline mb-10">Δωρεάν Στοιχήματα</h1></div> <div>${free.length === 0 ? `<div><h1 class="text-4xl font-semibold text-gray-100">${validate_component(Fa, "Fa").$$render($$result, { icon: faClock }, {}, {})}</h1> <h1 class="text-xl font-medium text-gray-100 mt-5" data-svelte-h="svelte-bsly3t">Προς το παρών δεν έχει αρχιοθετηθεί κάποιο από τα δωρεάν στοιχήματα. Μείνετε συντονισμένοι!</h1></div>` : `${free.length === 1 ? `<div class="grid grid-cols-1 justify-center justify-items-center">${each(free, (bet) => {
                  return `<div class="flex flex-col"><div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">${bet.won ? `${validate_component(Fa, "Fa").$$render($$result, { icon: faCheck }, {}, {})} <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>` : `${validate_component(Fa, "Fa").$$render($$result, { icon: faXmark }, {}, {})} <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>`} <h3 class="ml-auto">${escape(bet.date)}</h3></div> <img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96"> </div>`;
                })}</div>` : `${free.length === 2 ? `<div class="grid grid-cols-1 sm:grid-cols-2 justify-center justify-items-center gap-10">${each(free, (bet) => {
                  return `<div class="flex flex-col"><div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">${bet.won ? `${validate_component(Fa, "Fa").$$render($$result, { icon: faCheck }, {}, {})} <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>` : `${validate_component(Fa, "Fa").$$render($$result, { icon: faXmark }, {}, {})} <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>`} <h3 class="ml-auto">${escape(bet.date)}</h3></div> <img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96"> </div>`;
                })}</div>` : `${free.length > 2 ? `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center gap-10 h-96 overflow-y-auto">${each(free, (bet) => {
                  return `<div class="flex flex-col"><div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">${bet.won ? `${validate_component(Fa, "Fa").$$render($$result, { icon: faCheck }, {}, {})} <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>` : `${validate_component(Fa, "Fa").$$render($$result, { icon: faXmark }, {}, {})} <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>`} <h3 class="ml-auto">${escape(bet.date)}</h3></div> <img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="h-auto w-auto sm:h-96 sm:w-96"> </div>`;
                })}</div>` : ``}`}`}`}</div>`;
              }
            })} ${validate_component(TabPanel, "TabPanel").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="flex justify-center" data-svelte-h="svelte-3fqclo"><h1 class="text-2xl font-medium text-gray-100 underline mb-10">Fun Bets</h1></div> <div>${fun.length === 0 ? `<div><h1 class="text-4xl font-semibold text-gray-100">${validate_component(Fa, "Fa").$$render($$result, { icon: faClock }, {}, {})}</h1> <h1 class="text-xl font-medium text-gray-100 mt-5" data-svelte-h="svelte-gwc6tk">Προς το παρών δεν έχει αρχιοθετηθεί κάποιο από τα fun bets. Μείνετε συντονισμένοι!</h1></div>` : `${fun.length === 1 ? `<div class="grid grid-cols-1 justify-center justify-items-center">${each(fun, (bet) => {
                  return `<div class="flex flex-col"><div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">${bet.won ? `${validate_component(Fa, "Fa").$$render($$result, { icon: faCheck }, {}, {})} <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>` : `${validate_component(Fa, "Fa").$$render($$result, { icon: faXmark }, {}, {})} <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>`} <h3 class="ml-auto">${escape(bet.date)}</h3></div> <img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96"> </div>`;
                })}</div>` : `${fun.length === 2 ? `<div class="grid grid-cols-1 sm:grid-cols-2 justify-center justify-items-center gap-10">${each(fun, (bet) => {
                  return `<div class="flex flex-col"><div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">${bet.won ? `${validate_component(Fa, "Fa").$$render($$result, { icon: faCheck }, {}, {})} <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>` : `${validate_component(Fa, "Fa").$$render($$result, { icon: faXmark }, {}, {})} <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>`} <h3 class="ml-auto">${escape(bet.date)}</h3></div> <img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96"> </div>`;
                })}</div>` : `${fun.length > 2 ? `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center gap-10 h-96 overflow-y-auto">${each(fun, (bet) => {
                  return `<div class="flex flex-col"><div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">${bet.won ? `${validate_component(Fa, "Fa").$$render($$result, { icon: faCheck }, {}, {})} <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>` : `${validate_component(Fa, "Fa").$$render($$result, { icon: faXmark }, {}, {})} <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>`} <h3 class="ml-auto">${escape(bet.date)}</h3></div> <img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="h-auto w-auto sm:h-96 sm:w-96"> </div>`;
                })}</div>` : ``}`}`}`}</div>`;
              }
            })} ${validate_component(TabPanel, "TabPanel").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="flex justify-center" data-svelte-h="svelte-x6un5j"><h1 class="text-2xl font-medium text-gray-100 underline mb-10">Emerald Στοιχήματα</h1></div> <div>${emerald.length === 0 ? `<div><h1 class="text-4xl font-semibold text-gray-100">${validate_component(Fa, "Fa").$$render($$result, { icon: faClock }, {}, {})}</h1> <h1 class="text-xl font-medium text-gray-100 mt-5" data-svelte-h="svelte-1pehbpf">Προς το παρών δεν έχει αρχιοθετηθεί κάποιο από τα emerald στοιχήματα. Μείνετε συντονισμένοι!</h1></div>` : `${emerald.length === 1 ? `<div class="grid grid-cols-1 justify-center justify-items-center">${each(emerald, (bet) => {
                  return `<div class="flex flex-col"><div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">${bet.won ? `${validate_component(Fa, "Fa").$$render($$result, { icon: faCheck }, {}, {})} <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>` : `${validate_component(Fa, "Fa").$$render($$result, { icon: faXmark }, {}, {})} <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>`} <h3 class="ml-auto">${escape(bet.date)}</h3></div> <img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96"> </div>`;
                })}</div>` : `${emerald.length === 2 ? `<div class="grid grid-cols-1 sm:grid-cols-2 justify-center justify-items-center gap-10">${each(emerald, (bet) => {
                  return `<div class="flex flex-col"><div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">${bet.won ? `${validate_component(Fa, "Fa").$$render($$result, { icon: faCheck }, {}, {})} <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>` : `${validate_component(Fa, "Fa").$$render($$result, { icon: faXmark }, {}, {})} <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>`} <h3 class="ml-auto">${escape(bet.date)}</h3></div> <img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96"> </div>`;
                })}</div>` : `${emerald.length > 2 ? `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center gap-10 h-96 overflow-y-auto">${each(emerald, (bet) => {
                  return `<div class="flex flex-col"><div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">${bet.won ? `${validate_component(Fa, "Fa").$$render($$result, { icon: faCheck }, {}, {})} <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>` : `${validate_component(Fa, "Fa").$$render($$result, { icon: faXmark }, {}, {})} <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>`} <h3 class="ml-auto">${escape(bet.date)}</h3></div> <img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="h-auto w-auto sm:h-96 sm:w-96"> </div>`;
                })}</div>` : ``}`}`}`}</div>`;
              }
            })} ${validate_component(TabPanel, "TabPanel").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="flex justify-center" data-svelte-h="svelte-1foccta"><h1 class="text-2xl font-medium text-gray-100 underline">Diamond Στοιχήματα</h1></div> <div>${diamond.length === 0 ? `<div><h1 class="text-4xl font-semibold text-gray-100">${validate_component(Fa, "Fa").$$render($$result, { icon: faClock }, {}, {})}</h1> <h1 class="text-xl font-medium text-gray-100 mt-5" data-svelte-h="svelte-yfasgj">Προς το παρών δεν έχει αρχιοθετηθεί κάποιο από τα diamond στοιχήματα. Μείνετε συντονισμένοι!</h1></div>` : `${diamond.length === 1 ? `<div class="grid grid-cols-1 justify-center justify-items-center">${each(diamond, (bet) => {
                  return `<div class="flex flex-col"><div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">${bet.won ? `${validate_component(Fa, "Fa").$$render($$result, { icon: faCheck }, {}, {})} <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>` : `${validate_component(Fa, "Fa").$$render($$result, { icon: faXmark }, {}, {})} <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>`} <h3 class="ml-auto">${escape(bet.date)}</h3></div> <img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96"> </div>`;
                })}</div>` : `${diamond.length === 2 ? `<div class="grid grid-cols-1 sm:grid-cols-2 justify-center justify-items-center gap-10">${each(diamond, (bet) => {
                  return `<div class="flex flex-col"><div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">${bet.won ? `${validate_component(Fa, "Fa").$$render($$result, { icon: faCheck }, {}, {})} <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>` : `${validate_component(Fa, "Fa").$$render($$result, { icon: faXmark }, {}, {})} <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>`} <h3 class="ml-auto">${escape(bet.date)}</h3></div> <img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96"> </div>`;
                })}</div>` : `${diamond.length > 2 ? `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center gap-10 h-96 overflow-y-auto">${each(diamond, (bet) => {
                  return `<div class="flex flex-col"><div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">${bet.won ? `${validate_component(Fa, "Fa").$$render($$result, { icon: faCheck }, {}, {})} <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>` : `${validate_component(Fa, "Fa").$$render($$result, { icon: faXmark }, {}, {})} <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">(${escape(bet.odds)})</span> </h2>`} <h3 class="ml-auto">${escape(bet.date)}</h3></div> <img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="h-auto w-auto sm:h-96 sm:w-96"> </div>`;
                })}</div>` : ``}`}`}`}</div>`;
              }
            })}`;
          }
        }
      )}`;
    }
  })}</section>`;
});
export {
  Page as default
};
