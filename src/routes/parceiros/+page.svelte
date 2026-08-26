<script>
	import { asset, resolve } from '$app/paths';
	import PageHero from '$lib/components/PageHero.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { ongs } from '$lib/data/site.js';

	const ambientais = [
		{
			nome: 'Instituto LOOP',
			texto: 'Trabalha a logística reversa de eletrônicos e a destinação correta dos resíduos.'
		},
		{
			nome: 'GreenEletron',
			texto: 'Gestora de logística reversa de equipamentos eletroeletrônicos no Brasil.'
		},
		{ nome: 'Ecobraz', texto: 'Faz o recolhimento e o encaminhamento correto de eletrônicos.' },
		{
			nome: 'Reciclotech',
			texto: 'Programa público de reaproveitamento e reciclagem de equipamentos de informática.'
		}
	];
</script>

<svelte:head>
	<title>Parceiros — EcoHeads 3´AS</title>
	<meta
		name="description"
		content="ONGs e iniciativas pesquisadas pelo projeto EcoHeads 3´AS: FENEIS, Instituto Santa Teresinha, INES e organizações ligadas ao lixo eletrônico."
	/>
</svelte:head>

<PageHero
	eyebrow="Parceiros"
	title="Organizações que inspiram e podem apoiar o projeto"
	text="Durante a pesquisa, mapeamos instituições que já atuam na defesa dos direitos das pessoas surdas e na destinação correta de eletrônicos. São elas os principais parceiros em potencial do EcoHeads 3´AS."
/>

<section class="section">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">ONGs pesquisadas</span>
			<h2>Acessibilidade e inclusão auditiva</h2>
		</div>

		<div class="grid grid--3">
			{#each ongs as ong (ong.sigla)}
				<article class="ong card">
					<div class="card__icon"><Icon name="people" /></div>
					<h3>{ong.sigla}</h3>
					<p class="ong__nome">{ong.nome}</p>
					<p>{ong.texto}</p>
					<h4>Principais ações</h4>
					<ul>
						{#each ong.acoes as acao (acao)}
							<li><Icon name="check" /> {acao}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section section--soft">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Meio ambiente</span>
			<h2>Iniciativas de logística reversa</h2>
			<p class="lead">
				Organizações que já recolhem e encaminham eletrônicos descartados — potenciais fornecedoras
				dos componentes reaproveitados no aparelho.
			</p>
		</div>

		<div class="grid grid--4">
			{#each ambientais as a (a.nome)}
				<div class="mini">
					<div class="card__icon"><Icon name="recycle" /></div>
					<h3>{a.nome}</h3>
					<p>{a.texto}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Como colaborar</span>
			<h2>Formas de apoiar o EcoHeads 3´AS</h2>
		</div>

		<div class="grid grid--3">
			<article class="card">
				<div class="card__icon"><Icon name="chip" /></div>
				<h3>Doando componentes</h3>
				<p>
					Empresas de tecnologia podem doar microcontroladores, microfones, baterias e placas — novos
					ou recuperados de equipamentos fora de uso.
				</p>
			</article>
			<article class="card">
				<div class="card__icon"><Icon name="money" /></div>
				<h3>Financiando a produção</h3>
				<p>
					Editais públicos como o Inova Saúde, fundos municipais da pessoa com deficiência e
					campanhas solidárias em escolas e comunidades.
				</p>
			</article>
			<article class="card">
				<div class="card__icon"><Icon name="spark" /></div>
				<h3>Divulgando o projeto</h3>
				<p>
					Levando as campanhas de conscientização sobre inclusão auditiva e descarte correto de
					eletrônicos a mais pessoas.
				</p>
			</article>
		</div>

		<div class="cta-box">
			<div>
				<h3>Sua instituição pode ser parceira</h3>
				<p>Estamos abertos a conversas com ONGs, escolas, cooperativas e empresas.</p>
			</div>
			<a class="btn btn--primary" href={resolve('/contato')}>Propor uma parceria</a>
		</div>
	</div>
</section>

<style>
	.ong h3 {
		font-size: 1.15rem;
		margin-bottom: 2px;
	}

	.ong__nome {
		font-size: 0.85rem;
		color: var(--muted);
		margin-bottom: 12px;
	}

	.ong h4 {
		font-family: var(--font-display);
		font-size: 0.74rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--green-600);
		margin: 20px 0 10px;
		padding-top: 16px;
		border-top: 1px dashed var(--green-200);
	}

	.ong ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.ong li {
		display: flex;
		align-items: center;
		gap: 9px;
		font-size: 0.9rem;
		margin-bottom: 7px;
	}

	.ong li :global(svg) {
		width: 15px;
		height: 15px;
		color: var(--green-500);
		flex-shrink: 0;
	}

	.mini {
		border-top: 3px solid var(--green-500);
		padding-top: 20px;
	}

	.mini h3 {
		font-size: 1.05rem;
		margin-bottom: 6px;
	}

	.mini p {
		font-size: 0.92rem;
		margin: 0;
	}

	.cta-box {
		margin-top: 40px;
		background: var(--green-50);
		border: 1px solid var(--green-200);
		border-radius: var(--radius-lg);
		padding: clamp(26px, 3.5vw, 38px);
		display: grid;
		gap: 20px;
		align-items: center;
	}

	@media (min-width: 780px) {
		.cta-box {
			grid-template-columns: 1fr auto;
			gap: 36px;
		}
	}

	.cta-box h3 {
		margin-bottom: 6px;
	}

	.cta-box p {
		margin: 0;
	}
</style>
