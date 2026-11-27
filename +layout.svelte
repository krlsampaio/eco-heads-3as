<script>
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Pager from '$lib/components/Pager.svelte';
	import ScrollUi from '$lib/components/ScrollUi.svelte';

	let { children } = $props();

	/** @type {HTMLElement | undefined} */
	let main = $state();

	/* Blocos que entram com animação ao aparecer na tela. */
	const ALVOS = [
		'.phero__inner',
		'.hero__copy',
		'.hero__art',
		'.section-head',
		'.grid > *',
		'.split > *',
		'.cta__inner',
		'.table-wrap',
		'figure',
		'.stat-note',
		'.card',
		'.pager'
	].join(',');

	/** Anima números como "10,7 mi" ou "87%" de 0 até o valor final. */
	/** @param {HTMLElement} el */
	function contar(el) {
		const original = el.textContent ?? '';
		const m = original.match(/\d+(?:[.,]\d+)?/);
		if (!m) return;
		const casas = m[0].includes(',') ? m[0].split(',')[1].length : 0;
		const alvo = parseFloat(m[0].replace('.', '').replace(',', '.'));
		const inicio = performance.now();
		const dur = 1300;
		/** @param {number} t */
		const passo = (t) => {
			const p = Math.min(1, (t - inicio) / dur);
			const v = alvo * (1 - Math.pow(1 - p, 3));
			el.textContent = original.replace(m[0], v.toFixed(casas).replace('.', ','));
			if (p < 1) requestAnimationFrame(passo);
			else el.textContent = original;
		};
		requestAnimationFrame(passo);
	}

	/** @type {IntersectionObserver | undefined} */
	let obs;

	function prepararAnimacoes() {
		obs?.disconnect();
		if (!main || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		obs = new IntersectionObserver(
			(entradas) => {
				for (const e of entradas) {
					if (!e.isIntersecting) continue;
					const el = /** @type {HTMLElement} */ (e.target);
					el.classList.add('rv--in');
					el.querySelectorAll('.stat strong').forEach((n) => contar(/** @type {HTMLElement} */ (n)));
					obs?.unobserve(el);
				}
			},
			{ rootMargin: '0px 0px -10% 0px', threshold: 0 }
		);

		/** @type {HTMLElement[]} */
		const els = Array.from(main.querySelectorAll(ALVOS));
		for (const el of els) {
			// não anima um bloco que já está dentro de outro animado
			if (el.parentElement?.closest('.rv')) continue;
			el.classList.add('rv');

			const pai = el.parentElement;
			if (pai?.classList.contains('split') || pai?.classList.contains('hero__inner')) {
				el.classList.add(el === pai.firstElementChild ? 'rv--left' : 'rv--right');
			}
			if (el.matches('.split__art, .hero__art')) el.classList.add('rv--zoom');

			// efeito cascata entre itens irmãos de uma grade
			if (pai?.classList.contains('grid')) {
				const i = Array.prototype.indexOf.call(pai.children, el);
				el.style.setProperty('--rv-delay', `${Math.min(i, 5) * 90}ms`);
			}
			obs.observe(el);
		}
	}

	afterNavigate(() => requestAnimationFrame(prepararAnimacoes));
</script>

<a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
<ScrollUi />
<Header />
<main id="conteudo" bind:this={main}>
	{@render children()}
	<Pager />
</main>
<Footer />
