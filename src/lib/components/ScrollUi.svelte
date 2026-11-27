<script>
	let scrollY = $state(0);
	let innerHeight = $state(800);
	let altura = $state(1);

	const progresso = $derived(Math.min(1, scrollY / Math.max(1, altura - innerHeight)));
	const mostrarTopo = $derived(scrollY > innerHeight * 0.9);

	function medir() {
		altura = document.documentElement.scrollHeight;
	}

	function topo() {
		const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		window.scrollTo({ top: 0, behavior: suave ? 'smooth' : 'auto' });
	}

	$effect(() => {
		medir();
		const ro = new ResizeObserver(medir);
		ro.observe(document.body);
		return () => ro.disconnect();
	});
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class="progresso" style="transform: scaleX({progresso})" aria-hidden="true"></div>

<button
	type="button"
	class="topo"
	class:topo--on={mostrarTopo}
	onclick={topo}
	aria-label="Voltar ao topo"
	tabindex={mostrarTopo ? 0 : -1}
>
	<svg viewBox="0 0 24 24" aria-hidden="true">
		<path
			d="M12 19V5M5.5 11.5 12 5l6.5 6.5"
			fill="none"
			stroke="currentColor"
			stroke-width="2.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</button>

<style>
	.progresso {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, var(--green-500), var(--green-700));
		transform-origin: 0 50%;
		z-index: 300;
		pointer-events: none;
	}

	.topo {
		position: fixed;
		right: max(16px, env(safe-area-inset-right));
		bottom: max(18px, env(safe-area-inset-bottom));
		z-index: 150;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: none;
		background: var(--green-700);
		color: #fff;
		display: grid;
		place-items: center;
		box-shadow: 0 10px 26px rgba(20, 87, 47, 0.32);
		cursor: pointer;
		opacity: 0;
		transform: translateY(16px) scale(0.85);
		pointer-events: none;
		transition:
			opacity 0.25s ease,
			transform 0.25s ease,
			background 0.16s ease;
	}

	.topo--on {
		opacity: 1;
		transform: none;
		pointer-events: auto;
	}

	.topo:hover {
		background: var(--green-800);
	}

	.topo svg {
		width: 22px;
		height: 22px;
	}
</style>
