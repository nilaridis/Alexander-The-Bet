<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faUnlock, faClock } from '@fortawesome/free-solid-svg-icons'

    const funBets = [
        {
            src: 'https://i.imgur.com/4kXcPu4.png',
        },
        {
            src: 'https://i.imgur.com/4kXcPu4.png',
        },
        {
            src: 'https://i.imgur.com/4kXcPu4.png',
        },
        {
            src: 'https://i.imgur.com/4kXcPu4.png',
        },
        {
            src: 'https://i.imgur.com/4kXcPu4.png',
        },
        {
            src: 'https://i.imgur.com/4kXcPu4.png',
        },
    ];
</script>

<section class="min-h-screen bg-gray-100 px-8 sm:px-12 xl:px-24 font-sans text-center flex flex-col gap-24 items-center">
    <div class="bg-tertiary p-10 rounded-xl mt-20">
        <p class="font-medium text-lg">Τα fun bets είναι χαλαρά στοιχήματα με μεγάλες αποδόσεις και μικρή πιθανότητα επιτυχίας. Δημοσιεύονται για ψυχαγωγικούς σκοπούς και αν υπάρχει ποντάρισμα, τότε συστίνεται να είναι πολύ χαμηλό.</p>
    </div>
    <div class="flex flex-row justify-center items-center gap-2 lg:gap-5">
        <Fa icon={faUnlock} />
        <h1 class="text-xl sm:text-3xl font-semibold underline">Τα fun bets της ημέρας</h1>
        <Fa icon={faUnlock} />
    </div>
    {#if funBets.length === 0}
        <div class="bg-secondary p-10 rounded-xl flex flex-col justify-center items-center mb-20 max-w-xl gap-2">
            <h1 class="text-4xl font-semibold text-gray-100">
                <Fa icon={faClock} />
            </h1>
            <h1 class="text-xl font-medium text-gray-100 mt-5">Προς το παρών δεν έχει δημοσιευθεί κάποιο από τα καθημερίνα fun bets. Μείνετε συντονισμένοι!</h1>
        </div>
    {:else if funBets.length===1}
        <div class="bg-secondary p-2 sm:p-4 md:p-10 rounded-xl mb-20 grid grid-cols-1 justify-center justify-items-center">
            {#each funBets as bet}
                <img src="{bet.src}" alt="Free Bet" class="p-2" />
            {/each}
        </div>
    {:else if funBets.length===2}
        <div class="bg-secondary p-2 sm:p-4 md:p-10 rounded-xl mb-20 grid grid-cols-1 sm:grid-cols-2 justify-center justify-items-center">
            {#each funBets as bet}
                <img src="{bet.src}" alt="Free Bet" class="p-2" />
            {/each}
        </div>
    {:else if funBets.length>2}
        <div class="bg-secondary p-2 sm:p-4 md:p-10 rounded-xl mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center">
            {#each funBets as bet}
                <img src="{bet.src}" alt="Free Bet" class="p-2" />
            {/each}
        </div>
    {/if}
</section>