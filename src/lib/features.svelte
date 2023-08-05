<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faCheckCircle, faTrophy, faChartLine, faEnvelope } from '@fortawesome/free-solid-svg-icons'
</script>

<section class="py-16 px-8 sm:px-12 xl:px-24 bg-gray-100 font-sans">
    <h2 class="text-3xl sm:text-5xl font-bold text-center mb-12">Τι προσφέρουμε</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="p-6 bg-white rounded-xl shadow-md">
            <Fa class="text-4xl mb-4" icon={faCheckCircle}/>
            <h3 class="text-xl font-semibold mb-2">Δωρεάν Στοιχήματα</h3>
            <p>Καθημερίνα, η ομάδα μας δημοσιέυει δωρεάν στοιχήματα προσβάσιμα από όλους.</p>
        </div>
        <div class="p-6 bg-white rounded-xl shadow-md">
            <Fa class="text-4xl mb-4" icon={faTrophy}/>
            <h3 class="text-xl font-semibold mb-2">Μεγάλα Κέρδη</h3>
            <p>Μείνε ενημερωμένος και εγγράψου στις συνδρομές μας για να αυξήσεις όσο το δυνατόν περισσότερο τα κέρδη σου.</p>
        </div>
        <div class="p-6 bg-white rounded-xl shadow-md">
            <Fa class="text-4xl mb-4" icon={faChartLine}/>
            <h3 class="text-xl font-semibold mb-2">Στατιστικά</h3>
            <p>Παραθέτουμε τα στατιστικά επιτυχίας των δωρέαν στοιχημάτων αλλά και της κάθε συνδρομής για οποιαδήποτε χρονική περίοδο.</p>
        </div>
        <div class="p-6 bg-white rounded-xl shadow-md">
            <Fa class="text-4xl mb-4" icon={faEnvelope}/>
            <h3 class="text-xl font-semibold mb-2">Βοήθεια</h3>
            <p>Για οποιαδήποτε ερώτηση, είμαστε εγκαίρως στη διάθεσή σας.</p>
        </div>
    </div>
</section>