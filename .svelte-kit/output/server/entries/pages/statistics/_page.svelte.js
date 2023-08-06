import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { F as Fa } from "../../../chunks/fa.js";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { f as free, a as fun, e as emerald, d as diamond } from "../../../chunks/fun.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const calculateWinnings = (arr) => {
    let winnings = 0;
    const bet = 100;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].won) {
        winnings += bet * arr[i].odds - bet;
      } else {
        winnings -= bet;
      }
    }
    return winnings;
  };
  const calculateWinningRate = (arr) => {
    const bets = arr.length;
    if (bets) {
      const wins = arr.filter((el) => el.won).length;
      const winningRate = Math.round(wins / bets * 100);
      return [bets, wins, winningRate];
    } else {
      return [0, 0, 0];
    }
  };
  const assignToArr = (arr, arrPar) => {
    arr[0] = calculateWinnings(arrPar);
    arr[1] = calculateWinningRate(arrPar)[0];
    arr[2] = calculateWinningRate(arrPar)[1];
    arr[3] = calculateWinningRate(arrPar)[2];
    return arr;
  };
  let freeInfo = [], funInfo = [], emeraldInfo = [], diamondInfo = [];
  assignToArr(freeInfo, free);
  assignToArr(funInfo, fun);
  assignToArr(emeraldInfo, emerald);
  assignToArr(diamondInfo, diamond);
  return `<section class="min-h-screen bg-gray-100 px-8 sm:px-12 xl:px-24 font-sans text-center flex flex-col gap-24 items-center"><div class="flex flex-col"><div class="flex flex-row justify-center items-center gap-2 mt-20 lg:gap-5">${validate_component(Fa, "Fa").$$render($$result, { icon: faWallet }, {}, {})} <h1 class="text-xl sm:text-3xl font-semibold underline text-center" data-svelte-h="svelte-58zgxc">Στατιστικά στοιχημάτων</h1> ${validate_component(Fa, "Fa").$$render($$result, { icon: faWallet }, {}, {})}</div> <span class="text-base opacity-70 font-medium" data-svelte-h="svelte-mq79x1">(Τα κέρδη υπολογίζονται με 100€ ανά δελτίο.)</span></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"><div class="p-6 bg-white rounded-xl shadow-md"><h2 class="text-2xl font-semibold mb-2 text-center" data-svelte-h="svelte-dikr5d">Δωρεάν Στοιχήματα</h2> ${freeInfo[1] > 0 ? `${freeInfo[0] > 0 ? `<h3 class="text-xl font-semibold text-green-600 text-center">Κέρδη: ${escape(freeInfo[0])}€</h3>` : `${freeInfo[0] < 0 ? `<h3 class="text-xl font-semibold text-red-600 text-center">Ζημιά: ${escape(freeInfo[0] * -1)}€</h3>` : `<h3 class="text-xl font-semibold text-gray-600 text-center" data-svelte-h="svelte-1w2q3l4">Σταθερότητα (ούτε κέρδος / ούτε ζημιά)</h3>`}`} <p>Συνολικά στοιχήματα: ${escape(freeInfo[1])}</p> <p>Κερδισμένα στοιχήματα: ${escape(freeInfo[2])}</p> <p>Ποσοστό επιτυχίας: ${escape(freeInfo[3])}%</p>` : `<h3 class="text-xl font-semibold text-black text-opacity-80 text-center mt-6" data-svelte-h="svelte-yhow0z">Δεν υπάρχουν δελτία στη συγκεκριμένη κατηγορία!</h3>`}</div> <div class="p-6 bg-white rounded-xl shadow-md"><h2 class="text-2xl font-semibold mb-2 text-center" data-svelte-h="svelte-16aavvi">Fun Bets</h2> ${funInfo[1] > 0 ? `${funInfo[0] > 0 ? `<h3 class="text-xl font-semibold text-green-600 text-center">Κέρδη: ${escape(funInfo[0])}€</h3>` : `${funInfo[0] < 0 ? `<h3 class="text-xl font-semibold text-red-600 text-center">Ζημιά: ${escape(funInfo[0] * -1)}€</h3>` : `<h3 class="text-xl font-semibold text-gray-600 text-center" data-svelte-h="svelte-1w2q3l4">Σταθερότητα (ούτε κέρδος / ούτε ζημιά)</h3>`}`} <p>Συνολικά στοιχήματα: ${escape(funInfo[1])}</p> <p>Κερδισμένα στοιχήματα: ${escape(funInfo[2])}</p> <p>Ποσοστό επιτυχίας: ${escape(funInfo[3])}%</p>` : `<h3 class="text-xl font-semibold text-black text-opacity-80 text-center mt-6" data-svelte-h="svelte-yhow0z">Δεν υπάρχουν δελτία στη συγκεκριμένη κατηγορία!</h3>`}</div> <div class="p-6 bg-white rounded-xl shadow-md"><h2 class="text-2xl font-semibold mb-2 text-center" data-svelte-h="svelte-1rclcm7">Emerald Στοιχήματα</h2> ${emeraldInfo[1] > 0 ? `${emeraldInfo[0] > 0 ? `<h3 class="text-xl font-semibold text-green-600 text-center">Κέρδη: ${escape(emeraldInfo[0])}€</h3>` : `${emeraldInfo[0] < 0 ? `<h3 class="text-xl font-semibold text-red-600 text-center">Ζημιά: ${escape(emeraldInfo[0] * -1)}€</h3>` : `<h3 class="text-xl font-semibold text-gray-600 text-center" data-svelte-h="svelte-1w2q3l4">Σταθερότητα (ούτε κέρδος / ούτε ζημιά)</h3>`}`} <p>Συνολικά στοιχήματα: ${escape(emeraldInfo[1])}</p> <p>Κερδισμένα στοιχήματα: ${escape(emeraldInfo[2])}</p> <p>Ποσοστό επιτυχίας: ${escape(emeraldInfo[3])}%</p>` : `<h3 class="text-xl font-semibold text-black text-opacity-80 text-center mt-6" data-svelte-h="svelte-yhow0z">Δεν υπάρχουν δελτία στη συγκεκριμένη κατηγορία!</h3>`}</div> <div class="p-6 bg-white rounded-xl shadow-md mb-20 sm:mb-0"><h2 class="text-2xl font-semibold mb-2 text-center" data-svelte-h="svelte-ihwzov">Diamond Στοιχήματα</h2> ${diamondInfo[1] > 0 ? `${diamondInfo[0] > 0 ? `<h3 class="text-xl font-semibold text-green-600 text-center">Κέρδη: ${escape(diamondInfo[0])}€</h3>` : `${diamondInfo[0] < 0 ? `<h3 class="text-xl font-semibold text-red-600 text-center">Ζημιά: ${escape(diamondInfo[0] * -1)}€</h3>` : `<h3 class="text-xl font-semibold text-gray-600 text-center" data-svelte-h="svelte-1w2q3l4">Σταθερότητα (ούτε κέρδος / ούτε ζημιά)</h3>`}`} <p>Συνολικά στοιχήματα: ${escape(diamondInfo[1])}</p> <p>Κερδισμένα στοιχήματα: ${escape(diamondInfo[2])}</p> <p>Ποσοστό επιτυχίας: ${escape(diamondInfo[3])}%</p>` : `<h3 class="text-xl font-semibold text-black text-opacity-80 text-center mt-6" data-svelte-h="svelte-yhow0z">Δεν υπάρχουν δελτία στη συγκεκριμένη κατηγορία!</h3>`}</div></div></section>`;
});
export {
  Page as default
};
