import { c as create_ssr_component, v as validate_component, i as each, f as add_attribute } from "../../../chunks/ssr.js";
import { F as Fa } from "../../../chunks/fa.js";
import { faUnlock, faClock } from "@fortawesome/free-solid-svg-icons";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const funBets = [
    { src: "https://i.imgur.com/4kXcPu4.png" },
    { src: "https://i.imgur.com/4kXcPu4.png" },
    { src: "https://i.imgur.com/4kXcPu4.png" },
    { src: "https://i.imgur.com/4kXcPu4.png" },
    { src: "https://i.imgur.com/4kXcPu4.png" },
    { src: "https://i.imgur.com/4kXcPu4.png" }
  ];
  return `<section class="min-h-screen bg-gray-100 px-8 sm:px-12 xl:px-24 font-sans text-center flex flex-col gap-24 items-center"><div class="bg-tertiary p-10 rounded-xl mt-20" data-svelte-h="svelte-1h7klh8"><p class="font-medium text-lg">Τα fun bets είναι χαλαρά στοιχήματα με μεγάλες αποδόσεις και μικρή πιθανότητα επιτυχίας. Δημοσιεύονται για ψυχαγωγικούς σκοπούς και αν υπάρχει ποντάρισμα, τότε συστίνεται να είναι πολύ χαμηλό.</p></div> <div class="flex flex-row justify-center items-center gap-2 lg:gap-5">${validate_component(Fa, "Fa").$$render($$result, { icon: faUnlock }, {}, {})} <h1 class="text-xl sm:text-3xl font-semibold underline" data-svelte-h="svelte-13e8ifq">Τα fun bets της ημέρας</h1> ${validate_component(Fa, "Fa").$$render($$result, { icon: faUnlock }, {}, {})}</div> ${funBets.length === 0 ? `<div class="bg-secondary p-10 rounded-xl flex flex-col justify-center items-center mb-20 max-w-xl gap-2"><h1 class="text-4xl font-semibold text-gray-100">${validate_component(Fa, "Fa").$$render($$result, { icon: faClock }, {}, {})}</h1> <h1 class="text-xl font-medium text-gray-100 mt-5" data-svelte-h="svelte-1r01qky">Προς το παρών δεν έχει δημοσιευθεί κάποιο από τα καθημερίνα fun bets. Μείνετε συντονισμένοι!</h1></div>` : `${funBets.length === 1 ? `<div class="bg-secondary p-2 sm:p-4 md:p-10 rounded-xl mb-20 grid grid-cols-1 justify-center justify-items-center">${each(funBets, (bet) => {
    return `<img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="p-2">`;
  })}</div>` : `${funBets.length === 2 ? `<div class="bg-secondary p-2 sm:p-4 md:p-10 rounded-xl mb-20 grid grid-cols-1 sm:grid-cols-2 justify-center justify-items-center">${each(funBets, (bet) => {
    return `<img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="p-2">`;
  })}</div>` : `${funBets.length > 2 ? `<div class="bg-secondary p-2 sm:p-4 md:p-10 rounded-xl mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center">${each(funBets, (bet) => {
    return `<img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="p-2">`;
  })}</div>` : ``}`}`}`}</section>`;
});
export {
  Page as default
};
