<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faWallet } from '@fortawesome/free-solid-svg-icons'
    import { free } from '../coupons/free';
    import { emerald } from '../coupons/emerald';
    import { diamond } from '../coupons/diamond';
    import { fun } from '../coupons/fun';

    const calculateWinnings = (arr: any[]) => {
        let winnings=0;
        const bet=100;   // assume that every bet is 100 euros
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].won) {
                winnings+=bet*arr[i].odds - bet;
            } else {
                winnings-=bet;
            }
        }
        return winnings;
    }

    const calculateWinningRate = (arr: any[]) => {
        const bets=arr.length;
        if (bets) {
            const wins=(arr.filter((el: any)=>el.won)).length;
            const winningRate = Math.round(wins/bets * 100);
            return [bets, wins, winningRate];
        } else {
            return [0, 0, 0];
        }
    }

    const assignToArr = (arr: any[], arrPar: any[]) => {
        arr[0]=calculateWinnings(arrPar);
        arr[1]=calculateWinningRate(arrPar)[0];
        arr[2]=calculateWinningRate(arrPar)[1];
        arr[3]=calculateWinningRate(arrPar)[2];
        return arr;
    }

    let freeInfo: any = [], funInfo: any = [], emeraldInfo: any = [], diamondInfo: any = [];
    assignToArr(freeInfo, free);
    assignToArr(funInfo , fun);
    assignToArr(emeraldInfo, emerald);
    assignToArr(diamondInfo, diamond);
</script>

<section class="min-h-screen bg-gray-100 px-8 sm:px-12 xl:px-24 font-sans text-center flex flex-col gap-24 items-center">
    <div class="flex flex-col">
        <div class="flex flex-row justify-center items-center gap-2 mt-20 lg:gap-5">
            <Fa icon={faWallet} />
            <h1 class="text-xl sm:text-3xl font-semibold underline text-center">Στατιστικά στοιχημάτων</h1>
            <Fa icon={faWallet} />
        </div>
        <span class="text-base opacity-70 font-medium">(Τα κέρδη υπολογίζονται με 100€ ανά δελτίο.)</span>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="p-6 bg-white rounded-xl shadow-md">
            <h2 class="text-2xl font-semibold mb-2 text-center">Δωρεάν Στοιχήματα</h2>
            {#if freeInfo[1]>0}
                {#if freeInfo[0]>0}
                    <h3 class="text-xl font-semibold text-green-600 text-center">Κέρδη: {freeInfo[0]}€</h3>
                {:else if freeInfo[0]<0}
                    <h3 class="text-xl font-semibold text-red-600 text-center">Ζημιά: {freeInfo[0]*(-1)}€</h3>
                {:else}
                    <h3 class="text-xl font-semibold text-gray-600 text-center">Σταθερότητα (ούτε κέρδος / ούτε ζημιά)</h3>
                {/if}
                <p>Συνολικά στοιχήματα: {freeInfo[1]}</p>
                <p>Κερδισμένα στοιχήματα: {freeInfo[2]}</p>
                <p>Ποσοστό επιτυχίας: {freeInfo[3]}%</p>
            {:else}

                <h3 class="text-xl font-semibold text-black text-opacity-80 text-center mt-6">Δεν υπάρχουν δελτία στη συγκεκριμένη κατηγορία!</h3>
            {/if}
        </div>
        <div class="p-6 bg-white rounded-xl shadow-md">
            <h2 class="text-2xl font-semibold mb-2 text-center">Fun Bets</h2>
            {#if funInfo[1]>0}
                {#if funInfo[0]>0}
                    <h3 class="text-xl font-semibold text-green-600 text-center">Κέρδη: {funInfo[0]}€</h3>
                {:else if funInfo[0]<0}
                    <h3 class="text-xl font-semibold text-red-600 text-center">Ζημιά: {funInfo[0]*(-1)}€</h3>
                {:else}
                    <h3 class="text-xl font-semibold text-gray-600 text-center">Σταθερότητα (ούτε κέρδος / ούτε ζημιά)</h3>
                {/if}
                <p>Συνολικά στοιχήματα: {funInfo[1]}</p>
                <p>Κερδισμένα στοιχήματα: {funInfo[2]}</p>
                <p>Ποσοστό επιτυχίας: {funInfo[3]}%</p>
            {:else}
                <h3 class="text-xl font-semibold text-black text-opacity-80 text-center mt-6">Δεν υπάρχουν δελτία στη συγκεκριμένη κατηγορία!</h3>
            {/if}
        </div>
        <div class="p-6 bg-white rounded-xl shadow-md">
            <h2 class="text-2xl font-semibold mb-2 text-center">Emerald Στοιχήματα</h2>
            {#if emeraldInfo[1]>0}
                {#if emeraldInfo[0]>0}
                    <h3 class="text-xl font-semibold text-green-600 text-center">Κέρδη: {emeraldInfo[0]}€</h3>
                {:else if emeraldInfo[0]<0}
                    <h3 class="text-xl font-semibold text-red-600 text-center">Ζημιά: {emeraldInfo[0]*(-1)}€</h3>
                {:else}
                    <h3 class="text-xl font-semibold text-gray-600 text-center">Σταθερότητα (ούτε κέρδος / ούτε ζημιά)</h3>
                {/if}
                <p>Συνολικά στοιχήματα: {emeraldInfo[1]}</p>
                <p>Κερδισμένα στοιχήματα: {emeraldInfo[2]}</p>
                <p>Ποσοστό επιτυχίας: {emeraldInfo[3]}%</p>
            {:else}
                <h3 class="text-xl font-semibold text-black text-opacity-80 text-center mt-6">Δεν υπάρχουν δελτία στη συγκεκριμένη κατηγορία!</h3>
            {/if}
        </div>
        <div class="p-6 bg-white rounded-xl shadow-md mb-20 sm:mb-0">
            <h2 class="text-2xl font-semibold mb-2 text-center">Diamond Στοιχήματα</h2>
            {#if diamondInfo[1]>0}
                {#if diamondInfo[0]>0}
                    <h3 class="text-xl font-semibold text-green-600 text-center">Κέρδη: {diamondInfo[0]}€</h3>
                {:else if diamondInfo[0]<0}
                    <h3 class="text-xl font-semibold text-red-600 text-center">Ζημιά: {diamondInfo[0]*(-1)}€</h3>
                {:else}
                    <h3 class="text-xl font-semibold text-gray-600 text-center">Σταθερότητα (ούτε κέρδος / ούτε ζημιά)</h3>
                {/if}
                <p>Συνολικά στοιχήματα: {diamondInfo[1]}</p>
                <p>Κερδισμένα στοιχήματα: {diamondInfo[2]}</p>
                <p>Ποσοστό επιτυχίας: {diamondInfo[3]}%</p>
            {:else}
                <h3 class="text-xl font-semibold text-black text-opacity-80 text-center mt-6">Δεν υπάρχουν δελτία στη συγκεκριμένη κατηγορία!</h3>
            {/if}
        </div>
    </div>
</section>