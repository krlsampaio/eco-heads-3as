<script>
	import { resolve } from '$app/paths';
	import { etapas, apresentadores } from '$lib/data/apresentacao.js';
	import { pres, carregar, proxima, anterior, sair } from '$lib/apresentacao.svelte.js';

	$effect(() => {
		carregar();
	});

	const etapa = $derived(etapas[pres.i]);
	const seguinte = $derived(etapas[pres.i + 1]);
	const troca = $derived(seguinte && seguinte.quem !== etapa.quem ? seguinte.quem : null);
	const cor = $derived(apresentadores[etapa.quem]?.cor ?? '#1b7a4e');

	let telaCheia = $state(false);

	function alternarTelaCheia() {
		if (document.fullscreenElement) document.exitFullscreen?.();
		else document.documentElement.requestFullscreen?.().catch(() => {});
	}

	/** Setas e passador de slides (que envia PageUp/PageDown) trocam de etapa. */
	/** @param {KeyboardEvent} e */
	function tecla(e) {
		if (!pres.ativo || e.altKey || e.ctrlKey || e.metaKey) return;
		const alvo = /** @type {HTMLElement} */ (e.target);
		if (alvo.closest('input, textarea, select, [contenteditable]')) return;
		if (['ArrowRight', 'PageDown'].includes(e.key)) {
			e.preventDefault();
			if (seguinte) proxima();
		} else if (['ArrowLeft', 'PageUp'].includes(e.key)) {
			e.preventDefault();
			if (pres.i > 0) anterior();
		} else if (e.key === 'f' || e.key === 'F') {
			alternarTelaCheia();
		}
	}
</script>

<svelte:window onkeydown={tecla} />
<svelte:document onfullscreenchange={() => (telaCheia = !!document.fullscreenElement)} />

{#if pres.ativo}
	<div class="pbar" role="region" aria-label="Controle da apresentação" style="--cor: {cor}">
		<button
			type="button"
			class="pbar__btn"
			onclick={anterior}
			disabled={pres.i === 0}
			aria-label="Etapa anterior"
		>
			<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
		</button>

		<a class="pbar__info" href={resolve('/apresentacao')} title="Ver o roteiro completo">
			<span class="pbar__top">
				<span class="pbar__quem">{etapa.quem}</span>
				<span class="pbar__num">{pres.i + 1}/{etapas.length}</span>
				{#if etapa.slides !== 'novo'}
					<span class="pbar__slide">slide {etapa.slides}</span>
				{/if}
			</span>
			<span class="pbar__titulo">{etapa.titulo}</span>
			{#if troca}
				<span class="pbar__troca">Depois: {troca}</span>
			{/if}
		</a>

		<button
			type="button"
			class="pbar__btn pbar__btn--next"
			onclick={proxima}
			disabled={!seguinte}
			aria-label="Próxima etapa"
		>
			<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
		</button>

		<span class="pbar__sep" aria-hidden="true"></span>

		<button
			type="button"
			class="pbar__mini pbar__fs"
			onclick={alternarTelaCheia}
			aria-label={telaCheia ? 'Sair da tela cheia' : 'Tela cheia'}
			title="Tela cheia (F)"
		>
			{#if telaCheia}
				<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" /></svg>
			{:else}
				<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
			{/if}
		</button>
		<button
			type="button"
			class="pbar__mini"
			onclick={sair}
			aria-label="Sair do modo apresentação"
			title="Sair do modo apresentação"
		>
			<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
		</button>
	</div>
{/if}

<style>
	.pbar {
		position: fixed;
		left: 50%;
		bottom: max(14px, env(safe-area-inset-bottom));
		transform: translateX(-50%);
		z-index: 260;
		width: min(calc(100% - 20px), 680px);
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px;
		border-radius: 20px;
		background: rgba(255, 255, 255, 0.96);
		backdrop-filter: blur(10px);
		border: 1px solid var(--line);
		box-shadow: 0 18px 44px rgba(15, 61, 36, 0.22);
		animation: subir 0.35s cubic-bezier(0.2, 0.7, 0.2, 1);
	}

	@keyframes subir {
		from {
			opacity: 0;
			transform: translate(-50%, 20px);
		}
	}

	.pbar svg {
		width: 22px;
		height: 22px;
		fill: none;
		stroke: currentColor;
		stroke-width: 2.4;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.pbar__btn {
		flex: none;
		width: 52px;
		height: 52px;
		border-radius: 14px;
		border: 1px solid var(--line);
		background: #fff;
		color: var(--green-800);
		display: grid;
		place-items: center;
		cursor: pointer;
		transition:
			background 0.15s ease,
			transform 0.15s ease;
	}

	.pbar__btn:active {
		transform: scale(0.94);
	}

	.pbar__btn--next {
		background: var(--cor);
		border-color: var(--cor);
		color: #fff;
	}

	.pbar__btn:disabled {
		opacity: 0.35;
		cursor: default;
	}

	.pbar__info {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 1px;
		padding: 2px 4px;
		color: var(--ink);
	}

	.pbar__info:hover {
		text-decoration: none;
	}

	.pbar__top {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 0.74rem;
	}

	.pbar__quem {
		font-family: var(--font-display);
		font-weight: 600;
		color: #fff;
		background: var(--cor);
		padding: 2px 9px;
		border-radius: 99px;
		white-space: nowrap;
	}

	.pbar__num,
	.pbar__slide {
		color: var(--muted);
		white-space: nowrap;
	}

	.pbar__titulo {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 0.95rem;
		color: var(--green-900);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.pbar__troca {
		font-size: 0.74rem;
		color: var(--cor);
		font-weight: 600;
	}

	.pbar__sep {
		width: 1px;
		align-self: stretch;
		background: var(--line);
		margin: 4px 0;
	}

	.pbar__mini {
		flex: none;
		width: 38px;
		height: 38px;
		border-radius: 12px;
		border: none;
		background: transparent;
		color: var(--muted);
		display: grid;
		place-items: center;
		cursor: pointer;
	}

	.pbar__mini:hover {
		background: var(--green-50);
		color: var(--green-800);
	}

	.pbar__mini svg {
		width: 18px;
		height: 18px;
	}

	@media (max-width: 560px) {
		.pbar {
			gap: 6px;
			padding: 6px;
			border-radius: 18px;
		}
		.pbar__btn {
			width: 46px;
			height: 46px;
		}
		.pbar__slide,
		.pbar__fs {
			display: none;
		}
		.pbar__mini {
			width: 32px;
		}
		.pbar__sep {
			display: none;
		}
	}
</style>
