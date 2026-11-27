<script>
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { nav } from '$lib/data/site.js';

	/* Navegação "anterior / próxima" no fim de cada página, seguindo a ordem do menu,
	   para o visitante ler o site como uma história sem precisar abrir o menu. */
	const i = $derived(nav.findIndex((item) => item.href === page.route.id));
	const anterior = $derived(i > 0 ? nav[i - 1] : null);
	const proxima = $derived(i >= 0 && i < nav.length - 1 ? nav[i + 1] : null);
</script>

{#if i > 0}
	<nav class="container pager" aria-label="Continuar navegando">
		<p class="pager__passo">Página {i + 1} de {nav.length}</p>
		<div class="pager__bar" aria-hidden="true">
			{#each nav as item, j (item.href)}
				<span class:on={j <= i}></span>
			{/each}
		</div>
		<div class="pager__links">
			{#if anterior}
				<a class="pager__link" href={resolve(anterior.href)}>
					<small>← Anterior</small>
					<strong>{anterior.label}</strong>
				</a>
			{/if}
			{#if proxima}
				<a class="pager__link pager__link--next" href={resolve(proxima.href)}>
					<small>Próxima →</small>
					<strong>{proxima.label}</strong>
				</a>
			{/if}
		</div>
	</nav>
{/if}

<style>
	.pager {
		padding-top: clamp(36px, 5vw, 56px);
		padding-bottom: clamp(44px, 6vw, 72px);
		border-top: 1px solid var(--line);
	}

	.pager__passo {
		font-family: var(--font-display);
		font-size: 0.76rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--green-600);
		margin-bottom: 10px;
	}

	.pager__bar {
		display: flex;
		gap: 5px;
		margin-bottom: 22px;
	}

	.pager__bar span {
		flex: 1;
		height: 5px;
		border-radius: 99px;
		background: var(--green-100);
	}

	.pager__bar span.on {
		background: var(--green-500);
	}

	.pager__links {
		display: grid;
		gap: 12px;
	}

	@media (min-width: 640px) {
		.pager__links {
			grid-template-columns: 1fr 1fr;
		}
		.pager__link--next {
			grid-column: 2;
			text-align: right;
		}
	}

	.pager__link {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 18px 22px;
		border-radius: var(--radius);
		border: 1px solid var(--line);
		background: #fff;
		box-shadow: var(--shadow);
		color: var(--green-900);
		transition:
			transform 0.18s ease,
			border-color 0.18s ease;
	}

	.pager__link:hover {
		text-decoration: none;
		transform: translateY(-3px);
		border-color: var(--green-200);
	}

	.pager__link--next {
		background: var(--green-700);
		border-color: var(--green-700);
		color: #fff;
	}

	.pager__link--next:hover {
		border-color: var(--green-800);
		background: var(--green-800);
	}

	.pager__link small {
		font-size: 0.8rem;
		opacity: 0.75;
	}

	.pager__link strong {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 1.08rem;
	}
</style>
