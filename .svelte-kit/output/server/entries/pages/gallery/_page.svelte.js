import { c as create_ssr_component, v as validate_component, i as each, e as escape, f as add_attribute } from "../../../chunks/ssr.js";
import { F as Fa } from "../../../chunks/fa.js";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const gallery = [
  {
    src: "https://i.imgur.com/4kXcPu4.png",
    date: "1/8/2023",
    category: "Δωρεάν"
  },
  {
    src: "https://i.imgur.com/4kXcPu4.png",
    date: "1/8/2023",
    category: "Fun"
  },
  {
    src: "https://i.imgur.com/4kXcPu4.png",
    date: "1/8/2023",
    category: "Diamond"
  },
  {
    src: "https://i.imgur.com/4kXcPu4.png",
    date: "1/8/2023",
    category: "Emerald"
  },
  {
    src: "https://i.imgur.com/4kXcPu4.png",
    date: "1/8/2023",
    category: "Fun"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="min-h-screen bg-gray-100 px-8 sm:px-12 xl:px-24 font-sans text-center flex flex-col gap-24 items-center"><div class="bg-tertiary p-5 rounded-xl mt-10 flex flex-col justify-center items-start" data-svelte-h="svelte-1u0luw3"><h1 class="font-medium text-2xl">Gallery - Showcase</h1> <h3 class="text-lg">Παραθέτουμε μερικές από τις μεγαλύτερες στοιχηματικές νίκες, είτε δικές μας, είτε συνδρομητών μας.</h3></div> <div class="mt-2 bg-secondary text-gray-100 rounded-lg p-10 mb-20">${gallery.length === 0 ? `<div><h1 class="text-4xl font-semibold text-gray-100">${validate_component(Fa, "Fa").$$render($$result, { icon: faClock }, {}, {})}</h1> <h1 class="text-xl font-medium text-gray-100 mt-5" data-svelte-h="svelte-1m29x53">Προς το παρών δεν έχει αρχιοθετηθεί κάποιο στοίχημα. Μείνετε συντονισμένοι!</h1></div>` : `${gallery.length === 1 ? `<div class="grid grid-cols-1 justify-center justify-items-center">${each(gallery, (bet) => {
    return `<div class="flex flex-col"><div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2"><h2 class="font-bold text-lg ">${escape(bet.category)}</h2> <h3 class="ml-auto">${escape(bet.date)}</h3></div> <img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96"> </div>`;
  })}</div>` : `${gallery.length === 2 ? `<div class="grid grid-cols-1 sm:grid-cols-2 justify-center justify-items-center gap-10">${each(gallery, (bet) => {
    return `<div class="flex flex-col"><div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2"><h2 class="font-bold text-lg ">${escape(bet.category)}</h2> <h3 class="ml-auto">${escape(bet.date)}</h3></div> <img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96"> </div>`;
  })}</div>` : `${gallery.length > 2 ? `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center gap-10 h-96 overflow-y-auto">${each(gallery, (bet) => {
    return `<div class="flex flex-col"><div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2"><h2 class="font-bold text-lg ">${escape(bet.category)}</h2> <h3 class="ml-auto">${escape(bet.date)}</h3></div> <img${add_attribute("src", bet.src, 0)} alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96"> </div>`;
  })}</div>` : ``}`}`}`}</div></section>`;
});
export {
  Page as default
};
