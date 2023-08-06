import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { N as Navbar, F as Footer } from "../../chunks/footer.js";
import { F as Fa } from "../../chunks/fa.js";
import { faCheckCircle, faTrophy, faChartLine, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-secondary py-24 px-8 sm:px-12 xl:px-24 text-center text-white mt-10 font-sans" data-svelte-h="svelte-ezrlj0"><h2 class="text-3xl sm:text-5xl font-bold">Καλώς ήρθατε στο Alexander The Bet!</h2> <p class="mt-4 text-xl sm:text-2xl">Το καλύτερο μέρος για προγνωστικά και άλλα... στον στοιχηματισμό!</p> <p class="mt-4 text-xl sm:text-2xl">Μπορείς να συμβουλεύεσαι τα δωρεάν δελτία που προσφέρει η ομάδα μας καθημερίνα, όμως αν θες το κάτι παραπάνω μη χάνεις χρόνο και εγγράψου στις συνδρομές μας!</p> <div class="mt-20"><a href="https://whop.com/alexander-the-bet" target="_blank"><button class="text-lg bg-gray-100 text-black p-4 font-semibold rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Εγγραφή σε συνδρομή</button></a></div></section>`;
});
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="py-16 px-8 sm:px-12 xl:px-24 bg-gray-100 font-sans"><h2 class="text-3xl sm:text-5xl font-bold text-center mb-12" data-svelte-h="svelte-tsq0lr">Τι προσφέρουμε</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"><div class="p-6 bg-white rounded-xl shadow-md">${validate_component(Fa, "Fa").$$render(
    $$result,
    {
      class: "text-4xl mb-4",
      icon: faCheckCircle
    },
    {},
    {}
  )} <h3 class="text-xl font-semibold mb-2" data-svelte-h="svelte-3b2vi8">Δωρεάν Στοιχήματα</h3> <p data-svelte-h="svelte-d2ditf">Καθημερίνα, η ομάδα μας δημοσιέυει δωρεάν στοιχήματα προσβάσιμα από όλους.</p></div> <div class="p-6 bg-white rounded-xl shadow-md">${validate_component(Fa, "Fa").$$render($$result, { class: "text-4xl mb-4", icon: faTrophy }, {}, {})} <h3 class="text-xl font-semibold mb-2" data-svelte-h="svelte-67j14l">Μεγάλα Κέρδη</h3> <p data-svelte-h="svelte-1upe3xq">Μείνε ενημερωμένος και εγγράψου στις συνδρομές μας για να αυξήσεις όσο το δυνατόν περισσότερο τα κέρδη σου.</p></div> <div class="p-6 bg-white rounded-xl shadow-md">${validate_component(Fa, "Fa").$$render(
    $$result,
    {
      class: "text-4xl mb-4",
      icon: faChartLine
    },
    {},
    {}
  )} <h3 class="text-xl font-semibold mb-2" data-svelte-h="svelte-1lml9kb">Στατιστικά</h3> <p data-svelte-h="svelte-vscree">Παραθέτουμε τα στατιστικά επιτυχίας των δωρέαν στοιχημάτων αλλά και της κάθε συνδρομής για οποιαδήποτε χρονική περίοδο.</p></div> <div class="p-6 bg-white rounded-xl shadow-md">${validate_component(Fa, "Fa").$$render($$result, { class: "text-4xl mb-4", icon: faEnvelope }, {}, {})} <h3 class="text-xl font-semibold mb-2" data-svelte-h="svelte-1kesicy">Βοήθεια</h3> <p data-svelte-h="svelte-1cs7bm2">Για οποιαδήποτε ερώτηση, είμαστε εγκαίρως στη διάθεσή σας.</p></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<head data-svelte-h="svelte-ctjwke"><title>Alexander The Bet</title></head> <header>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</header> <section>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Features, "Features").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
