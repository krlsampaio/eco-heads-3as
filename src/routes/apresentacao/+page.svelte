<script>
	import { etapas, apresentadores } from '$lib/data/apresentacao.js';
	import { pres, irPara, sair } from '$lib/apresentacao.svelte.js';

	/** Agrupa etapas seguidas da mesma pessoa em blocos. */
	const blocos = $derived.by(() => {
		/** @type {{ quem: string, itens: { i: number, e: (typeof etapas)[number] }[] }[]} */
		const out = [];
		etapas.forEach((e, i) => {
			const ultimo = out[out.length - 1];
			if (ultimo && ultimo.quem === e.quem) ultimo.itens.push({ i, e });
			else out.push({ quem: e.quem, itens: [{ i, e }] });
		});
		return out;
	});
</script>

<svelte:head>
	<title>Modo apresentação · EcoHeads 3´AS</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="section ap">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Banca de projetos</span>
			<h1>Modo apresentação</h1>
			<p class="lead">
				Apresente o EcoHeads 3´AS usando só o site. A barra embaixo da tela leva cada pessoa direto
				para a parte certa, na ordem dos slides.
			</p>
		</div>

		<div class="ap__acoes">
			<button type="button" class="btn btn--primary" onclick={() => irPara(pres.ativo ? pres.i : 0)}>
				{pres.ativo && pres.i > 0 ? `Continuar da etapa ${pres.i + 1}` : 'Começar apresentação'}
			</button>
			{#if pres.ativo && pres.i > 0}
				<button type="button" class="btn btn--ghost" onclick={() => irPara(0)}>Recomeçar do início</button>
			{/if}
			{#if pres.ativo}
				<button type="button" class="btn btn--ghost" onclick={sair}>Sair do modo apresentação</button>
			{/if}
		</div>

		<ul class="ap__dicas">
			<li><kbd>→</kbd> ou <kbd>Page Down</kbd>: próxima etapa (funciona com passador de slides)</li>
			<li><kbd>←</kbd> ou <kbd>Page Up</kbd>: etapa anterior</li>
			<li><kbd>F</kbd>: tela cheia · a rolagem normal continua funcionando</li>
		</ul>

		<ol class="ap__lista">
			{#each blocos as b, bi (bi)}
				<li class="ap__bloco" style="--cor: {apresentadores[b.quem]?.cor}">
					<h2 class="ap__quem">{b.quem}</h2>
					<ol>
						{#each b.itens as { i, e } (i)}
							<li>
								<button
									type="button"
									class="ap__etapa"
									class:ap__etapa--atual={pres.ativo && pres.i === i}
									onclick={() => irPara(i)}
								>
									<span class="ap__n">{i + 1}</span>
									<span class="ap__txt">
										<strong>{e.titulo}</strong>
										<small>{e.fala}</small>
									</span>
									<span class="ap__slide">{e.slides === 'novo' ? 'novo' : `slide ${e.slides}`}</span>
								</button>
							</li>
						{/each}
					</ol>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.ap h1 {
		margin-bottom: 0.3em;
	}

	.ap__acoes {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-bottom: 22px;
	}

	.ap__dicas {
		list-style: none;
		padding: 0;
		margin: 0 0 36px;
		display: grid;
		gap: 6px;
		font-size: 0.9rem;
		color: var(--muted);
	}

	@media (hover: none) {
		.ap__dicas {
			display: none;
		}
	}

	kbd {
		font-family: var(--font-display);
		font-size: 0.78rem;
		padding: 2px 7px;
		border-radius: 6px;
		border: 1px solid var(--line);
		background: #fff;
		color: var(--green-900);
		box-shadow: 0 1px 0 var(--line);
	}

	.ap__lista,
	.ap__lista ol {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.ap__lista {
		display: grid;
		gap: 26px;
	}

	.ap__bloco {
		border-left: 4px solid var(--cor);
		padding-left: 16px;
	}

	.ap__quem {
		font-size: 1.05rem;
		color: var(--cor);
		margin: 0 0 10px;
	}

	.ap__bloco ol {
		display: grid;
		gap: 8px;
	}

	.ap__etapa {
		width: 100%;
		display: grid;
		grid-template-columns: 34px 1fr auto;
		gap: 12px;
		align-items: start;
		text-align: left;
		padding: 14px 16px;
		border-radius: var(--radius);
		border: 1px solid var(--line);
		background: #fff;
		cursor: pointer;
		font: inherit;
		color: inherit;
		transition:
			border-color 0.15s ease,
			transform 0.15s ease;
	}

	.ap__etapa:hover {
		border-color: var(--cor);
		transform: translateX(3px);
	}

	.ap__etapa--atual {
		border-color: var(--cor);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--cor) 22%, transparent);
	}

	.ap__n {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: var(--cor);
		color: #fff;
		display: grid;
		place-items: center;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 0.85rem;
	}

	.ap__txt {
		display: flex;
		flex-direction: column;
		gap: 3px;
		min-width: 0;
	}

	.ap__txt strong {
		font-family: var(--font-display);
		font-weight: 600;
		color: var(--green-900);
	}

	.ap__txt small {
		font-size: 0.86rem;
		line-height: 1.5;
		color: var(--body);
	}

	.ap__slide {
		font-size: 0.74rem;
		color: var(--muted);
		white-space: nowrap;
		padding-top: 4px;
	}
</style>
