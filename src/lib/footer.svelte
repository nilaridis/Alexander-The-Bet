<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faInstagram, faDiscord, faTiktok } from '@fortawesome/free-brands-svg-icons'
</script>

<footer class="bg-secondary py-6 px-8 sm:px-12 xl:px-24 text-white font-sans">
    <div class="flex flex-col justify-center items-center gap-3">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 pr-0 xl:pr-24">
            <div class="flex flex-col items-center justify-center gap-1">
                <p class="text-lg font-bold text-center">Επικοινωνία</p>
                <p class="text-center">Email: <a href=mailto:betalexander777@gmail.com target="_blank" class="hover:underline hover:cursor-pointer">betalexander777@gmail.com</a></p>
                <a href="https://www.google.com/maps/place/θεσσαλονικη" target="_blank" class="text-center hover:underline hover:cursor-pointer">Θεσσαλονίκη, Ελλάδα</a>
            </div>
            <div class="flex flex-col items-center justify-center gap-1">
                <p class="text-lg font-bold text-center">Κοινωνικά Δίκτυα</p>
                <a href="https://www.instagram.com/alexanderthebet/" target="_blank" class="flex flex-row items-center gap-1">
                    <Fa icon={faInstagram} />
                    <p class="text-center hover:underline hover:cursor-pointer">Instagram</p>
                </a>
                <a href="https://discord.gg/h6wFmCAuPP" target="_blank" class="flex flex-row items-center gap-1">
                    <Fa icon={faDiscord} />
                    <p class="text-center hover:underline hover:cursor-pointer">Discord</p>
                </a>
                <a href="https://tiktok.com/@alexanderthebet" target="_blank" class="flex flex-row items-center gap-1">
                    <Fa icon={faTiktok} />
                    <p class="text-center hover:underline hover:cursor-pointer">TikTok</p>
                </a>
            </div>  
            <div class="flex flex-col items-center justify-center gap-1">
                <p class="text-lg font-bold text-center">Ασφάλεια</p>
                <a href="/privacypolicy" class="text-center hover:underline hover:cursor-pointer">Πολιτική Απορρήτου</a>
                <a href="/tos" class="text-center hover:underline hover:cursor-pointer">Όροι χρήσης</a>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center mt-4">
            <p class="text-center">© 2023 Alexander The Bet. All rights reserved.</p>
            <p class="text-center text-sm">Website exclusively created by <a href="https://github.com/iHaz32" target="_blank" class="font-semibold hover:underline hover:cursor-pointer">https://github.com/iHaz32</a></p>
        </div>
    </div>
</footer>
