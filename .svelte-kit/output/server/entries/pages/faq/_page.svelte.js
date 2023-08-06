import { c as create_ssr_component, b as compute_rest_props, d as get_current_component, a as subscribe, s as setContext, v as validate_component, g as getContext, n as noop, h as createEventDispatcher } from "../../../chunks/ssr.js";
import { F as Fa } from "../../../chunks/fa.js";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { f as forwardEventsBuilder, d as useDisclosureContext, b as useOpenClosed, S as State, D as DisclosureStates, R as Render, F as Features, r as resolveButtonType, e as useTransitionContext, h as useParentNesting, T as TreeStates, N as NESTING_CONTEXT_NAME, i as useOpenClosedProvider, j as RenderStrategy, m as match, a as useId, k as useNesting, l as TRANSITION_CONTEXT_NAME, n as Disclosure } from "../../../chunks/common.js";
import { w as writable } from "../../../chunks/index.js";
let DISCLOSURE_PANEL_CONTEXT_NAME = "headlessui-disclosure-panel-context";
function usePanelContext() {
  return getContext(DISCLOSURE_PANEL_CONTEXT_NAME);
}
const DisclosurePanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let panelStore;
  let visible;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let $openClosedState, $$unsubscribe_openClosedState;
  let $panelStore, $$unsubscribe_panelStore = noop, $$subscribe_panelStore = () => ($$unsubscribe_panelStore(), $$unsubscribe_panelStore = subscribe(panelStore, ($$value) => $panelStore = $$value), panelStore);
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  const api = useDisclosureContext("DisclosurePanel");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let openClosedState = useOpenClosed();
  $$unsubscribe_openClosedState = subscribe(openClosedState, (value) => $openClosedState = value);
  setContext(DISCLOSURE_PANEL_CONTEXT_NAME, $api.panelId);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$subscribe_panelStore(panelStore = $api.panelStore);
    visible = $openClosedState !== null ? $openClosedState === State.Open : $api.disclosureState === DisclosureStates.Open;
    propsWeControl = { id: $api.panelId };
    slotProps = {
      open: $api.disclosureState === DisclosureStates.Open,
      close: $api.close
    };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign(
        {},
        { ...$$restProps, ...propsWeControl },
        { as },
        { slotProps },
        { use: [...use, forwardEvents] },
        { name: "DisclosurePanel" },
        { visible },
        {
          features: Features.RenderStrategy | Features.Static
        },
        { el: $panelStore }
      ),
      {
        el: ($$value) => {
          $panelStore = $$value;
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
  $$unsubscribe_openClosedState();
  $$unsubscribe_panelStore();
  return $$rendered;
});
const DisclosureButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonStore;
  let panelStore;
  let isWithinPanel;
  let type;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "disabled"]);
  let $api, $$unsubscribe_api;
  let $panelStore, $$unsubscribe_panelStore = noop, $$subscribe_panelStore = () => ($$unsubscribe_panelStore(), $$unsubscribe_panelStore = subscribe(panelStore, ($$value) => $panelStore = $$value), panelStore);
  let $ourStore, $$unsubscribe_ourStore = noop, $$subscribe_ourStore = () => ($$unsubscribe_ourStore(), $$unsubscribe_ourStore = subscribe(ourStore, ($$value) => $ourStore = $$value), ourStore);
  let $$unsubscribe_buttonStore = noop, $$subscribe_buttonStore = () => ($$unsubscribe_buttonStore(), $$unsubscribe_buttonStore = subscribe(buttonStore, ($$value) => $$value), buttonStore);
  let { as = "button" } = $$props;
  let { use = [] } = $$props;
  let { disabled = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  const api = useDisclosureContext("DisclosureButton");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  const panelContext = usePanelContext();
  let ourStore = writable(null);
  $$subscribe_ourStore();
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
    $$subscribe_panelStore(panelStore = $api.panelStore);
    isWithinPanel = panelContext === null ? false : panelContext === $api.panelId;
    {
      if (!isWithinPanel)
        $$subscribe_ourStore(ourStore = buttonStore);
    }
    type = resolveButtonType({ type: $$props.type, as }, $ourStore);
    propsWeControl = isWithinPanel ? { type } : {
      id: $api.buttonId,
      type,
      "aria-expanded": disabled ? void 0 : $api.disclosureState === DisclosureStates.Open,
      "aria-controls": $panelStore ? $api.panelId : void 0,
      disabled: disabled ? true : void 0
    };
    slotProps = {
      open: $api.disclosureState === DisclosureStates.Open,
      close: $api.close
    };
    $$rendered = `${isWithinPanel ? `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign({}, { ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "DisclosureButton" }, { el: $ourStore }),
      {
        el: ($$value) => {
          $ourStore = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
        }
      }
    )}` : `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign({}, { ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "DisclosureButton" }, { el: $ourStore }),
      {
        el: ($$value) => {
          $ourStore = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
        }
      }
    )}`}`;
  } while (!$$settled);
  $$unsubscribe_api();
  $$unsubscribe_panelStore();
  $$unsubscribe_ourStore();
  $$unsubscribe_buttonStore();
  return $$rendered;
});
const TransitionChild = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let strategy;
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "as",
    "use",
    "enter",
    "enterFrom",
    "enterTo",
    "entered",
    "leave",
    "leaveFrom",
    "leaveTo"
  ]);
  let $transitionContext, $$unsubscribe_transitionContext;
  let $nestingContext, $$unsubscribe_nestingContext;
  let $$unsubscribe_nesting;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  let { enter = "" } = $$props;
  let { enterFrom = "" } = $$props;
  let { enterTo = "" } = $$props;
  let { entered = "" } = $$props;
  let { leave = "" } = $$props;
  let { leaveFrom = "" } = $$props;
  let { leaveTo = "" } = $$props;
  const dispatch = createEventDispatcher();
  const forwardEvents = forwardEventsBuilder(get_current_component(), ["introstart", "introend", "outrostart", "outroend"]);
  let container = null;
  let transitionContext = useTransitionContext();
  $$unsubscribe_transitionContext = subscribe(transitionContext, (value) => $transitionContext = value);
  let nestingContext = useParentNesting();
  $$unsubscribe_nestingContext = subscribe(nestingContext, (value) => $nestingContext = value);
  let state = $transitionContext.initialShow || $$props.unmount !== false ? TreeStates.Visible : TreeStates.Hidden;
  let id = useId();
  let nesting = writable(useNesting(() => {
    {
      state = TreeStates.Hidden;
      $nestingContext.unregister(id);
      dispatch("outroend");
    }
  }));
  $$unsubscribe_nesting = subscribe(nesting, (value) => value);
  function splitClasses(classes2 = "") {
    return classes2.split(" ").filter((className) => className.trim().length > 1);
  }
  setContext(NESTING_CONTEXT_NAME, nesting);
  let openClosedState = writable(State.Closed);
  useOpenClosedProvider(openClosedState);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.enter === void 0 && $$bindings.enter && enter !== void 0)
    $$bindings.enter(enter);
  if ($$props.enterFrom === void 0 && $$bindings.enterFrom && enterFrom !== void 0)
    $$bindings.enterFrom(enterFrom);
  if ($$props.enterTo === void 0 && $$bindings.enterTo && enterTo !== void 0)
    $$bindings.enterTo(enterTo);
  if ($$props.entered === void 0 && $$bindings.entered && entered !== void 0)
    $$bindings.entered(entered);
  if ($$props.leave === void 0 && $$bindings.leave && leave !== void 0)
    $$bindings.leave(leave);
  if ($$props.leaveFrom === void 0 && $$bindings.leaveFrom && leaveFrom !== void 0)
    $$bindings.leaveFrom(leaveFrom);
  if ($$props.leaveTo === void 0 && $$bindings.leaveTo && leaveTo !== void 0)
    $$bindings.leaveTo(leaveTo);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    strategy = $$props.unmount === false ? RenderStrategy.Hidden : RenderStrategy.Unmount;
    {
      {
        (() => {
          if (strategy !== RenderStrategy.Hidden)
            return;
          if (!id)
            return;
          if ($transitionContext.show && state !== TreeStates.Visible) {
            state = TreeStates.Visible;
            return;
          }
          match(state, {
            [TreeStates.Hidden]: () => $nestingContext.unregister(id),
            [TreeStates.Visible]: () => $nestingContext.register(id)
          });
        })();
      }
    }
    splitClasses(enter);
    splitClasses(enterFrom);
    splitClasses(enterTo);
    splitClasses(entered);
    splitClasses(leave);
    splitClasses(leaveFrom);
    splitClasses(leaveTo);
    {
      openClosedState.set(match(state, {
        [TreeStates.Visible]: State.Open,
        [TreeStates.Hidden]: State.Closed
      }));
    }
    classes = `${$$props.class || ""} ${entered}`;
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign({}, $$restProps, { as }, { use: [...use, forwardEvents] }, { slotProps: {} }, { name: "TransitionChild" }, { class: classes }, { visible: state === TreeStates.Visible }, { features: Features.RenderStrategy }, { el: container }),
      {
        el: ($$value) => {
          container = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_transitionContext();
  $$unsubscribe_nestingContext();
  $$unsubscribe_nesting();
  return $$rendered;
});
const TransitionRoot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["as", "use", "show", "appear"]);
  let $$unsubscribe_nestingBag;
  let $openClosedState, $$unsubscribe_openClosedState;
  const forwardEvents = forwardEventsBuilder(get_current_component(), ["introstart", "introend", "outrostart", "outroend"]);
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  let { show = void 0 } = $$props;
  let { appear = false } = $$props;
  let openClosedState = useOpenClosed();
  $$unsubscribe_openClosedState = subscribe(openClosedState, (value) => $openClosedState = value);
  function computeShow(show2, openClosedState2) {
    if (show2 === void 0 && openClosedState2 !== void 0) {
      return match(openClosedState2, {
        [State.Open]: true,
        [State.Closed]: false
      });
    }
    return show2;
  }
  let shouldShow = computeShow(show, openClosedState !== void 0 ? $openClosedState : void 0);
  let initialShow = shouldShow;
  let state = shouldShow ? TreeStates.Visible : TreeStates.Hidden;
  let nestingBag = writable(useNesting(() => {
    state = TreeStates.Hidden;
  }));
  $$unsubscribe_nestingBag = subscribe(nestingBag, (value) => value);
  let initial = true;
  let transitionBag = writable();
  setContext(NESTING_CONTEXT_NAME, nestingBag);
  setContext(TRANSITION_CONTEXT_NAME, transitionBag);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.appear === void 0 && $$bindings.appear && appear !== void 0)
    $$bindings.appear(appear);
  {
    {
      shouldShow = computeShow(show, openClosedState !== void 0 ? $openClosedState : void 0);
      if (shouldShow !== true && shouldShow !== false) {
        throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
      }
    }
  }
  {
    transitionBag.set({
      show: !!shouldShow,
      appear: appear || !initial,
      initialShow: !!initialShow
    });
  }
  $$unsubscribe_nestingBag();
  $$unsubscribe_openClosedState();
  return `${state === TreeStates.Visible || $$props.unmount === false ? `${validate_component(TransitionChild, "TransitionChild").$$render($$result, Object.assign({}, $$restProps, { as }, { use: [...use, forwardEvents] }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="min-h-screen bg-gray-100 sm:px-12 xl:px-24 font-sans text-center flex flex-col gap-24 items-center"><div class="mt-20 flex flex-row justify-center items-center gap-2 lg:gap-5">${validate_component(Fa, "Fa").$$render($$result, { icon: faQuestion }, {}, {})} <h1 class="text-xl sm:text-2xl font-semibold underline" data-svelte-h="svelte-hbjplq">Συχνές Ερωτήσεις (FAQ)</h1> ${validate_component(Fa, "Fa").$$render($$result, { icon: faQuestion }, {}, {})}</div> <div class="mb-20 bg-tertiary bg-opacity-40 p-5 rounded-xl w-1/2 flex flex-col gap-2 text-sm sm:text-base">${validate_component(Disclosure, "Disclosure").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
        $$result,
        {
          class: "bg-secondary bg-opacity-95 hover:bg-opacity-100 p-2 text-gray-100 rounded-lg w-full font-semibold"
        },
        {},
        {
          default: () => {
            return `Τι είναι η συνδρομή &quot;Emerald Member&quot; και ποια είναι η διαφορά από τη συνδρομή &quot;Diamond Member&quot;?`;
          }
        }
      )} ${validate_component(TransitionRoot, "Transition").$$render(
        $$result,
        {
          enter: "transition duration-100 ease-out",
          enterFrom: "transform scale-95 opacity-0",
          enterTo: "transform scale-100 opacity-100",
          leave: "transition duration-75 ease-out",
          leaveFrom: "transform scale-100 opacity-100",
          leaveTo: "transform scale-95 opacity-0"
        },
        {},
        {
          default: () => {
            return `${validate_component(DisclosurePanel, "DisclosurePanel").$$render($$result, { class: "font-medium rounded-lg mt-1" }, {}, {
              default: () => {
                return `Η συνδρομή &quot;Emerald Member&quot; προσφέρει πρόσβαση σε αποκλειστικά προγνωστικά που ετοιμάζονται αποκλειστικά από την ομάδα μας. Είναι ιδανική για όσους θέλουν να απολαμβάνουν τον αθλητισμό και να παίρνουν ευκαιρίες για επιτυχημένα στοιχήματα.
                    Από την άλλη, η συνδρομή &quot;Diamond Member&quot; παρέχει πρόσβαση σε όλα τα Emerald bets, καθώς και άλλα... ματς, που προσφέρουν μια εντελώς νέα διάσταση στον αθλητισμό και μοναδικές ευκαιρίες για επιτυχημένα στοιχήματα.`;
              }
            })}`;
          }
        }
      )}`;
    }
  })} ${validate_component(Disclosure, "Disclosure").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
        $$result,
        {
          class: "bg-secondary bg-opacity-95 hover:bg-opacity-100 p-2 text-gray-100 rounded-lg w-full font-semibold"
        },
        {},
        {
          default: () => {
            return `Πώς μπορώ να εγγραφώ στη συνδρομή &quot;Emerald Member&quot; ή &quot;Diamond Member&quot;?`;
          }
        }
      )} ${validate_component(TransitionRoot, "Transition").$$render(
        $$result,
        {
          enter: "transition duration-100 ease-out",
          enterFrom: "transform scale-95 opacity-0",
          enterTo: "transform scale-100 opacity-100",
          leave: "transition duration-75 ease-out",
          leaveFrom: "transform scale-100 opacity-100",
          leaveTo: "transform scale-95 opacity-0"
        },
        {},
        {
          default: () => {
            return `${validate_component(DisclosurePanel, "DisclosurePanel").$$render($$result, { class: "font-medium rounded-lg mt-1" }, {}, {
              default: () => {
                return `Για να εγγραφείτε στη συνδρομή &quot;Emerald Member&quot; ή &quot;Diamond Member,&quot; απλά επισκεφθείτε τον ιστότοπό μας και ακολουθήστε τις οδηγίες για την εγγραφή. Συμπληρώστε τα απαραίτητα στοιχεία και επιλέξτε το επίπεδο συνδρομής που σας ενδιαφέρει. Στη συνέχεια, ακολουθήστε τις απλές οδηγίες για την ολοκλήρωση της διαδικασίας εγγραφής.`;
              }
            })}`;
          }
        }
      )}`;
    }
  })} ${validate_component(Disclosure, "Disclosure").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
        $$result,
        {
          class: "bg-secondary bg-opacity-95 hover:bg-opacity-100 p-2 text-gray-100 rounded-lg w-full font-semibold"
        },
        {},
        {
          default: () => {
            return `Ποιες μέθοδοι πληρωμής διατίθενται για τις συνδρομές;`;
          }
        }
      )} ${validate_component(TransitionRoot, "Transition").$$render(
        $$result,
        {
          enter: "transition duration-100 ease-out",
          enterFrom: "transform scale-95 opacity-0",
          enterTo: "transform scale-100 opacity-100",
          leave: "transition duration-75 ease-out",
          leaveFrom: "transform scale-100 opacity-100",
          leaveTo: "transform scale-95 opacity-0"
        },
        {},
        {
          default: () => {
            return `${validate_component(DisclosurePanel, "DisclosurePanel").$$render($$result, { class: "font-medium rounded-lg mt-1" }, {}, {
              default: () => {
                return `Διαθέτουμε διάφορες μέθοδους πληρωμής για τις συνδρομές μας, συμπεριλαμβανομένων πιστωτικών καρτών, χρεωστικών καρτών αλλά και Paypal. Μπορείτε να επιλέξετε τη μέθοδο που σας βολεύει περισσότερο κατά τη διάρκεια της εγγραφής.`;
              }
            })}`;
          }
        }
      )}`;
    }
  })} ${validate_component(Disclosure, "Disclosure").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
        $$result,
        {
          class: "bg-secondary bg-opacity-95 hover:bg-opacity-100 p-2 text-gray-100 rounded-lg w-full font-semibold"
        },
        {},
        {
          default: () => {
            return `Πώς λαμβάνω τις προγνώσεις και τις ενημερώσεις για νέα προγνωστικά;`;
          }
        }
      )} ${validate_component(TransitionRoot, "Transition").$$render(
        $$result,
        {
          enter: "transition duration-100 ease-out",
          enterFrom: "transform scale-95 opacity-0",
          enterTo: "transform scale-100 opacity-100",
          leave: "transition duration-75 ease-out",
          leaveFrom: "transform scale-100 opacity-100",
          leaveTo: "transform scale-95 opacity-0"
        },
        {},
        {
          default: () => {
            return `${validate_component(DisclosurePanel, "DisclosurePanel").$$render($$result, { class: "font-medium rounded-lg mt-1" }, {}, {
              default: () => {
                return `Ως μέλος της συνδρομής μας, θα λαμβάνετε τις προγνώσεις και τις ενημερώσεις μέσω μηνυμάτων στο Discord server μας στο σχετικό κανάλι , ενώ παράλληλα θα ανεβαίνει story στο  Instagram μας  . Επίσης, μπορείτε να ελέγξετε τον ιστότοπό μας για να δείτε τις τελευταίες προβλέψεις και να ενημερώνεστε για τυχόν αλλαγές.`;
              }
            })}`;
          }
        }
      )}`;
    }
  })} ${validate_component(Disclosure, "Disclosure").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
        $$result,
        {
          class: "bg-secondary bg-opacity-95 hover:bg-opacity-100 p-2 text-gray-100 rounded-lg w-full font-semibold"
        },
        {},
        {
          default: () => {
            return `Υπάρχουν κάποια όρια στο πόσο μπορώ να στοιχηματίσω με βάση τις προβλέψεις σας;`;
          }
        }
      )} ${validate_component(TransitionRoot, "Transition").$$render(
        $$result,
        {
          enter: "transition duration-100 ease-out",
          enterFrom: "transform scale-95 opacity-0",
          enterTo: "transform scale-100 opacity-100",
          leave: "transition duration-75 ease-out",
          leaveFrom: "transform scale-100 opacity-100",
          leaveTo: "transform scale-95 opacity-0"
        },
        {},
        {
          default: () => {
            return `${validate_component(DisclosurePanel, "DisclosurePanel").$$render($$result, { class: "font-medium rounded-lg mt-1" }, {}, {
              default: () => {
                return `Κατανοούμε την ανάγκη για υπεύθυνο στοίχημα. Σαν εταιρεία, δεν επιτρέπουμε τον υπερβολικό παίξιμο και σας συνιστούμε να τηρείτε τις κατευθυντήριες γραμμές για υπεύθυνο παιχνίδι. Κάντε πάντα τον έλεγχο των πόρων σας και παίξτε υπεύθυνα.`;
              }
            })}`;
          }
        }
      )}`;
    }
  })} ${validate_component(Disclosure, "Disclosure").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(DisclosureButton, "DisclosureButton").$$render(
        $$result,
        {
          class: "bg-secondary bg-opacity-95 hover:bg-opacity-100 p-2 text-gray-100 rounded-lg w-full font-semibold"
        },
        {},
        {
          default: () => {
            return `Πώς μπορώ να επικοινωνήσω μαζί σας για ερωτήσεις ή υποστήριξη;`;
          }
        }
      )} ${validate_component(TransitionRoot, "Transition").$$render(
        $$result,
        {
          enter: "transition duration-100 ease-out",
          enterFrom: "transform scale-95 opacity-0",
          enterTo: "transform scale-100 opacity-100",
          leave: "transition duration-75 ease-out",
          leaveFrom: "transform scale-100 opacity-100",
          leaveTo: "transform scale-95 opacity-0"
        },
        {},
        {
          default: () => {
            return `${validate_component(DisclosurePanel, "DisclosurePanel").$$render($$result, { class: "font-medium rounded-lg mt-1" }, {}, {
              default: () => {
                return `Για οποιεσδήποτε ερωτήσεις ή υποστήριξη, μπορείτε να επικοινωνήσετε μαζί μας μέσω email ή να στείλετε μήνυμα στο Discord σε ενα απο τα Staff Members . Η ομάδα μας θα είναι ευτυχής να σας βοηθήσει και να απαντήσει σε όλες σας τις απορίες. Αυτές είναι μερικές από τις συχνές ερωτήσεις που λαμβάνουμε. Αν έχετε οποιεσδήποτε άλλες ερωτήσεις, μην διστάσετε να επικοινωνήσετε μαζί μας. Ευχαριστούμε που επιλέγετε εμάς για τις αθλητικές σας προβλέψεις και ανυπομονούμε να σας παρέχουμε την καλύτερη δυνατή εμπειρία στον αθλητισμό!`;
              }
            })}`;
          }
        }
      )}`;
    }
  })}</div></section>`;
});
export {
  Page as default
};
