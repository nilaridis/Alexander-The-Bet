<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faClock } from '@fortawesome/free-solid-svg-icons'
    import { gallery } from './gallery';
</script>

<section class="min-h-screen bg-gray-100 px-8 sm:px-12 xl:px-24 font-sans text-center flex flex-col gap-24 items-center">
    <div class="bg-tertiary p-5 rounded-xl mt-10 flex flex-col justify-center items-start">
        <h1 class="font-medium text-2xl">Gallery - Showcase</h1>
        <h3 class="text-lg">Παραθέτουμε μερικές από τις μεγαλύτερες στοιχηματικές νίκες, είτε δικές μας, είτε συνδρομητών μας.</h3>
    </div>
    <div class="mt-2 bg-secondary text-gray-100 rounded-lg p-10 mb-20">
        {#if gallery.length === 0}
            <div>
                <h1 class="text-4xl font-semibold text-gray-100">
                    <Fa icon={faClock} />
                </h1>
                <h1 class="text-xl font-medium text-gray-100 mt-5">Προς το παρών δεν έχει αρχιοθετηθεί κάποιο στοίχημα. Μείνετε συντονισμένοι!</h1>
            </div>
        {:else if gallery.length===1}
            <div class="grid grid-cols-1 justify-center justify-items-center">
                {#each gallery as bet}
                <div class="flex flex-col">
                    <div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">
                        <h2 class="font-bold text-lg ">{bet.category}</h2>
                        <h3 class="ml-auto">{bet.date}</h3>
                    </div>
                    <img src="{bet.src}" alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96" />
                </div>
                {/each}
            </div>
        {:else if gallery.length===2}
            <div class="grid grid-cols-1 sm:grid-cols-2 justify-center justify-items-center gap-10">
                {#each gallery as bet}
                    <div class="flex flex-col">
                        <div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">
                            <h2 class="font-bold text-lg ">{bet.category}</h2>
                            <h3 class="ml-auto">{bet.date}</h3>
                        </div>
                        <img src="{bet.src}" alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96" />
                    </div>
                {/each}
            </div>
        {:else if gallery.length>2}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center gap-10 h-96 overflow-y-auto">
                {#each gallery as bet}
                    <div class="flex flex-col">
                        <div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">
                            <h2 class="font-bold text-lg ">{bet.category}</h2>
                            <h3 class="ml-auto">{bet.date}</h3>
                        </div>
                        <img src="{bet.src}" alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96" />
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</section>