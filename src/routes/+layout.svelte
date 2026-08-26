<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
<Header />
<main id="conteudo">
	{@render children()}
</main>
<Footer />
