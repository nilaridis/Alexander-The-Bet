<script>
	import "../../app.css";
    import Navbar from "../../lib/navbar.svelte"
	import Footer from "../../lib/footer.svelte"
</script>

<div class="app">
	<main>
        <Navbar />
		<slot />
        <Footer />
	</main>
</div>