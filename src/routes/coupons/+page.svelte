<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faClock, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

    import {
        Tab,
        TabGroup,
        TabList,
        TabPanel,
        TabPanels,
    } from "@rgossiaux/svelte-headlessui";
    import { free } from './free';
    import { emerald } from './emerald';
    import { diamond } from './diamond';
    import { fun } from './fun';
</script>

<section class="min-h-screen bg-gray-100 px-8 sm:px-12 xl:px-24 font-sans flex flex-col gap-24">
    <TabGroup class="mt-20">
        <TabList class="flex flex-col xl:flex-row gap-4 xl:gap-10 rounded-xl bg-secondary px-6 sm:px-10 py-5 w-full xl:w-max">
          <Tab class="font-medium text-base sm:text-xl text-gray-100 text-opacity-80 hover:text-opacity-100">Δωρεάν Στοιχήματα</Tab>
          <div class="w-full h-1 xl:w-1 xl:h-auto bg-gray-100" />
          <Tab class="font-medium text-base sm:text-xl text-gray-100 text-opacity-80 hover:text-opacity-100">Fun Bets</Tab>
          <div class="w-full h-1 xl:w-1 xl:h-auto bg-gray-100" />
          <Tab class="font-medium text-base sm:text-xl text-gray-100 text-opacity-80 hover:text-opacity-100">Emerald Στοιχήματα</Tab>
          <div class="w-full h-1 xl:w-1 xl:h-auto bg-gray-100" />
          <Tab class="font-medium text-base sm:text-xl text-gray-100 text-opacity-80 hover:text-opacity-100">Diamond Στοιχήματα</Tab>
          
        </TabList>
        <TabPanels class="mt-2 bg-secondary text-gray-100 rounded-lg p-10 mb-20">
          <TabPanel>
            <div class="flex justify-center">
                <h1 class="text-2xl font-medium text-gray-100 underline mb-10">Δωρεάν Στοιχήματα</h1>
            </div>
            <div>
                {#if free.length === 0}
                    <div>
                        <h1 class="text-4xl font-semibold text-gray-100">
                            <Fa icon={faClock} />
                        </h1>
                        <h1 class="text-xl font-medium text-gray-100 mt-5">Προς το παρών δεν έχει αρχιοθετηθεί κάποιο από τα δωρεάν στοιχήματα. Μείνετε συντονισμένοι!</h1>
                    </div>
                {:else if free.length===1}
                    <div class="grid grid-cols-1 justify-center justify-items-center">
                        {#each free as bet}
                        <div class="flex flex-col">
                            <div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">
                                {#if bet.won}
                                    <Fa icon={faCheck}/>
                                    <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                                {:else}
                                    <Fa icon={faXmark} />
                                    <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                                {/if}
                                <h3 class="ml-auto">{bet.date}</h3>
                            </div>
                            <img src="{bet.src}" alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96" />
                        </div>
                        {/each}
                    </div>
                {:else if free.length===2}
                <div class="grid grid-cols-1 sm:grid-cols-2 justify-center justify-items-center gap-10">
                    {#each free as bet}
                    <div class="flex flex-col">
                        <div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">
                            {#if bet.won}
                                <Fa icon={faCheck}/>
                                <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {:else}
                                <Fa icon={faXmark} />
                                <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {/if}
                            <h3 class="ml-auto">{bet.date}</h3>
                        </div>
                        <img src="{bet.src}" alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96" />
                    </div>
                    {/each}
                </div>
                {:else if free.length>2}
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center gap-10 h-96 overflow-y-auto">
                    {#each free as bet}
                    <div class="flex flex-col">
                        <div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">
                            {#if bet.won}
                                <Fa icon={faCheck}/>
                                <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {:else}
                                <Fa icon={faXmark} />
                                <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {/if}
                            <h3 class="ml-auto">{bet.date}</h3>
                        </div>
                        <img src="{bet.src}" alt="Free Bet" class="h-auto w-auto sm:h-96 sm:w-96" />
                    </div>
                    {/each}
                </div>
                {/if}
            </div>
          </TabPanel>
          <TabPanel>
            <div class="flex justify-center">
                <h1 class="text-2xl font-medium text-gray-100 underline mb-10">Fun Bets</h1>
            </div>
            <div>
                {#if fun.length === 0}
                    <div>
                        <h1 class="text-4xl font-semibold text-gray-100">
                            <Fa icon={faClock} />
                        </h1>
                        <h1 class="text-xl font-medium text-gray-100 mt-5">Προς το παρών δεν έχει αρχιοθετηθεί κάποιο από τα fun bets. Μείνετε συντονισμένοι!</h1>
                    </div>
                {:else if fun.length===1}
                    <div class="grid grid-cols-1 justify-center justify-items-center">
                        {#each fun as bet}
                        <div class="flex flex-col">
                            <div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">
                                {#if bet.won}
                                    <Fa icon={faCheck}/>
                                    <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                                {:else}
                                    <Fa icon={faXmark} />
                                    <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                                {/if}
                                <h3 class="ml-auto">{bet.date}</h3>
                            </div>
                            <img src="{bet.src}" alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96" />
                        </div>
                        {/each}
                    </div>
                {:else if fun.length===2}
                <div class="grid grid-cols-1 sm:grid-cols-2 justify-center justify-items-center gap-10">
                    {#each fun as bet}
                    <div class="flex flex-col">
                        <div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">
                            {#if bet.won}
                                <Fa icon={faCheck}/>
                                <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {:else}
                                <Fa icon={faXmark} />
                                <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {/if}
                            <h3 class="ml-auto">{bet.date}</h3>
                        </div>
                        <img src="{bet.src}" alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96" />
                    </div>
                    {/each}
                </div>
                {:else if fun.length>2}
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center gap-10 h-96 overflow-y-auto">
                    {#each fun as bet}
                    <div class="flex flex-col">
                        <div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">
                            {#if bet.won}
                                <Fa icon={faCheck}/>
                                <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {:else}
                                <Fa icon={faXmark} />
                                <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {/if}
                            <h3 class="ml-auto">{bet.date}</h3>
                        </div>
                        <img src="{bet.src}" alt="Free Bet" class="h-auto w-auto sm:h-96 sm:w-96" />
                    </div>
                    {/each}
                </div>
                {/if}
            </div>
          </TabPanel>
          <TabPanel>
            <div class="flex justify-center">
                <h1 class="text-2xl font-medium text-gray-100 underline mb-10">Emerald Στοιχήματα</h1>
            </div>
            <div>
                {#if emerald.length === 0}
                    <div>
                        <h1 class="text-4xl font-semibold text-gray-100">
                            <Fa icon={faClock} />
                        </h1>
                        <h1 class="text-xl font-medium text-gray-100 mt-5">Προς το παρών δεν έχει αρχιοθετηθεί κάποιο από τα emerald στοιχήματα. Μείνετε συντονισμένοι!</h1>
                    </div>
                {:else if emerald.length===1}
                    <div class="grid grid-cols-1 justify-center justify-items-center">
                        {#each emerald as bet}
                        <div class="flex flex-col">
                            <div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">
                                {#if bet.won}
                                    <Fa icon={faCheck}/>
                                    <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                                {:else}
                                    <Fa icon={faXmark} />
                                    <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                                {/if}
                                <h3 class="ml-auto">{bet.date}</h3>
                            </div>
                            <img src="{bet.src}" alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96" />
                        </div>
                        {/each}
                    </div>
                {:else if emerald.length===2}
                <div class="grid grid-cols-1 sm:grid-cols-2 justify-center justify-items-center gap-10">
                    {#each emerald as bet}
                    <div class="flex flex-col">
                        <div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">
                            {#if bet.won}
                                <Fa icon={faCheck}/>
                                <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {:else}
                                <Fa icon={faXmark} />
                                <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {/if}
                            <h3 class="ml-auto">{bet.date}</h3>
                        </div>
                        <img src="{bet.src}" alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96" />
                    </div>
                    {/each}
                </div>
                {:else if emerald.length>2}
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center gap-10 h-96 overflow-y-auto">
                    {#each emerald as bet}
                    <div class="flex flex-col">
                        <div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">
                            {#if bet.won}
                                <Fa icon={faCheck}/>
                                <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {:else}
                                <Fa icon={faXmark} />
                                <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {/if}
                            <h3 class="ml-auto">{bet.date}</h3>
                        </div>
                        <img src="{bet.src}" alt="Free Bet" class="h-auto w-auto sm:h-96 sm:w-96" />
                    </div>
                    {/each}
                </div>
                {/if}
            </div>
          </TabPanel>
          <TabPanel>
            <div class="flex justify-center">
                <h1 class="text-2xl font-medium text-gray-100 underline">Diamond Στοιχήματα</h1>
            </div>
            <div>
                {#if diamond.length === 0}
                    <div>
                        <h1 class="text-4xl font-semibold text-gray-100">
                            <Fa icon={faClock} />
                        </h1>
                        <h1 class="text-xl font-medium text-gray-100 mt-5">Προς το παρών δεν έχει αρχιοθετηθεί κάποιο από τα diamond στοιχήματα. Μείνετε συντονισμένοι!</h1>
                    </div>
                {:else if diamond.length===1}
                    <div class="grid grid-cols-1 justify-center justify-items-center">
                        {#each diamond as bet}
                        <div class="flex flex-col">
                            <div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">
                                {#if bet.won}
                                    <Fa icon={faCheck}/>
                                    <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                                {:else}
                                    <Fa icon={faXmark} />
                                    <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                                {/if}
                                <h3 class="ml-auto">{bet.date}</h3>
                            </div>
                            <img src="{bet.src}" alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96" />
                        </div>
                        {/each}
                    </div>
                {:else if diamond.length===2}
                <div class="grid grid-cols-1 sm:grid-cols-2 justify-center justify-items-center gap-10">
                    {#each diamond as bet}
                    <div class="flex flex-col">
                        <div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">
                            {#if bet.won}
                                <Fa icon={faCheck}/>
                                <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {:else}
                                <Fa icon={faXmark} />
                                <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {/if}
                            <h3 class="ml-auto">{bet.date}</h3>
                        </div>
                        <img src="{bet.src}" alt="Free Bet" class="h-64 w-64 sm:h-96 sm:w-96" />
                    </div>
                    {/each}
                </div>
                {:else if diamond.length>2}
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center gap-10 h-96 overflow-y-auto">
                    {#each diamond as bet}
                    <div class="flex flex-col">
                        <div class="bg-gray-100 text-black flex flex-row px-4 rounded-t-lg justify-center items-center gap-2">
                            {#if bet.won}
                                <Fa icon={faCheck}/>
                                <h2 class="font-bold text-lg text-green-600">Κερδισμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {:else}
                                <Fa icon={faXmark} />
                                <h2 class="font-bold text-lg text-red-600">Χαμένο <span class="text-sm opacity-90">({bet.odds})</span> </h2>
                            {/if}
                            <h3 class="ml-auto">{bet.date}</h3>
                        </div>
                        <img src="{bet.src}" alt="Free Bet" class="h-auto w-auto sm:h-96 sm:w-96" />
                    </div>
                    {/each}
                </div>
                {/if}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
      
</section>