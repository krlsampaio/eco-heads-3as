<script>
	import { asset, resolve } from '$app/paths';
	import PageHero from '$lib/components/PageHero.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { custosPrototipo } from '$lib/data/site.js';

	const gratuidade = [
		{
			icon: 'hospital',
			titulo: 'Via SUS',
			texto:
				'O SUS já oferece aparelhos auditivos gratuitamente a quem tem deficiência auditiva comprovada.'
		},
		{
			icon: 'people',
			titulo: 'Parcerias com ONGs',
			texto:
				'Instituições de acessibilidade auditiva ou projetos ambientais ligados ao lixo eletrônico.'
		},
		{
			icon: 'chip',
			titulo: 'Patrocínio de empresas de tecnologia',
			texto: 'Empresas do setor podem doar componentes eletrônicos para a produção.'
		},
		{
			icon: 'recycle',
			titulo: 'Programas de reciclagem',
			texto: 'Cada aparelho devolvido gera crédito para a produção de novos dispositivos.'
		},
		{
			icon: 'money',
			titulo: 'Captação via editais públicos',
			texto: 'Como o Inova Saúde ou fundos municipais da pessoa com deficiência.'
		},
		{
			icon: 'heart',
			titulo: 'Campanhas solidárias',
			texto: 'Doações organizadas em escolas e comunidades.'
		},
		{
			icon: 'bulb',
			titulo: 'Produção estudantil',
			texto: 'A montagem feita por estudantes reduz os custos ao mínimo.'
		}
	];
</script>

<svelte:head>
	<title>Custo-Benefício — EcoHeads 3´AS</title>
	<meta
		name="description"
		content="Custo estimado de produção do protótipo EcoHeads 3´AS, faixa de preço para o público-alvo e caminhos para oferta gratuita ou subsidiada."
	/>
</svelte:head>

<PageHero
	eyebrow="Custo-Benefício"
	title="Quanto custa produzir um EcoHeads 3´AS"
	text="Com base nos materiais pesquisados e em seus valores de mercado, elaboramos uma estimativa de preço para a produção do protótipo."
/>

<section class="section">
	<div class="container">
		<div class="compare">
			<div class="compare__item compare__item--bad">
				<span class="compare__lbl">Aparelho convencional</span>
				<strong>R$ 4.000 – R$ 25.000</strong>
				<p>Preço de mercado, variando conforme tecnologia, marca e funções.</p>
			</div>
			<div class="compare__arrow" aria-hidden="true">→</div>
			<div class="compare__item compare__item--good">
				<span class="compare__lbl">EcoHeads 3´AS (produção)</span>
				<strong>R$ 70 – R$ 130</strong>
				<p>Custo estimado por unidade, sem subsídio.</p>
			</div>
		</div>
	</div>
</section>

<section class="section section--tight">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Estimativa</span>
			<h2>Custo de produção do protótipo</h2>
		</div>

		<div class="table-wrap">
			<table>
				<caption class="sr-only">
					Estimativa de custo dos itens necessários para produzir uma unidade do protótipo
				</caption>
				<thead>
					<tr>
						<th scope="col">Item</th>
						<th scope="col">Custo estimado</th>
					</tr>
				</thead>
				<tbody>
					{#each custosPrototipo as linha (linha.item)}
						<tr>
							<td>{linha.item}</td>
							<td>{linha.custo}</td>
						</tr>
					{/each}
				</tbody>
				<tfoot>
					<tr>
						<td>Total (sem subsídio)</td>
						<td>R$ 70 a R$ 130</td>
					</tr>
				</tfoot>
			</table>
		</div>

		<p class="table-note">
			<Icon name="alert" />
			<span>
				Esse valor é <strong>unitário</strong>. Caso o usuário precise de um par de aparelhos, o valor
				dobra.
			</span>
		</p>
	</div>
</section>

<section class="section section--soft">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Preço final</span>
			<h2>Custo estimado para o público-alvo</h2>
		</div>

		<div class="grid grid--2 preco">
			<article class="card preco__box">
				<span class="preco__lbl">Valor de venda estimado</span>
				<strong class="preco__val">R$ 80 a R$ 200</strong>
				<p>
					Com base na renda média do nosso público-alvo, essa é a faixa em que o aparelho seria
					comercializado.
				</p>
			</article>

			<article class="card">
				<div class="card__icon"><Icon name="money" /></div>
				<h3>Por que acima do custo de produção?</h3>
				<p>
					O valor fica um pouco mais alto para gerar algum lucro mínimo ou permitir reinvestimento no
					projeto — e, ao mesmo tempo, manter os aparelhos acessíveis para quem mais precisa.
				</p>
				<p class="preco__sub">
					<strong>Com subsídio parcial</strong>, o preço cairia para uma média de
					<strong>R$ 30 a R$ 80</strong>.
				</p>
			</article>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Acesso gratuito</span>
			<h2>Como o aparelho poderia ser oferecido gratuitamente?</h2>
			<p class="lead">
				Sete caminhos possíveis para que o EcoHeads 3´AS chegue sem custo a quem não pode pagar nem
				mesmo o valor subsidiado.
			</p>
		</div>

		<div class="grid grid--3">
			{#each gratuidade as g (g.titulo)}
				<article class="card">
					<div class="card__icon"><Icon name={g.icon} /></div>
					<h3>{g.titulo}</h3>
					<p>{g.texto}</p>
				</article>
			{/each}
		</div>

		<div class="cta-box">
			<div>
				<h3>Quer ajudar a viabilizar isso?</h3>
				<p>
					Parcerias, doações de componentes e apoio institucional são o que permitem baixar o preço
					final para o usuário.
				</p>
			</div>
			<a class="btn btn--primary" href={resolve('/contato')}>Entrar em contato</a>
		</div>
	</div>
</section>

<style>
	.compare {
		display: grid;
		gap: 18px;
		align-items: center;
	}

	@media (min-width: 820px) {
		.compare {
			grid-template-columns: 1fr auto 1fr;
			gap: 26px;
		}
	}

	.compare__item {
		border-radius: var(--radius-lg);
		padding: clamp(26px, 3.5vw, 38px);
		border: 1px solid var(--line);
	}

	.compare__item--bad {
		background: #fbf7f3;
		border-color: #ecdfd2;
	}

	.compare__item--good {
		background: var(--green-800);
		border-color: var(--green-800);
		color: rgba(255, 255, 255, 0.85);
		box-shadow: var(--shadow-lg);
	}

	.compare__lbl {
		display: block;
		font-family: var(--font-display);
		font-size: 0.76rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		margin-bottom: 10px;
		color: var(--muted);
	}

	.compare__item--good .compare__lbl {
		color: var(--green-200);
	}

	.compare__item strong {
		display: block;
		font-family: var(--font-display);
		font-size: clamp(1.6rem, 4vw, 2.3rem);
		font-weight: 600;
		line-height: 1.1;
		margin-bottom: 10px;
		color: var(--ink);
	}

	.compare__item--good strong {
		color: #fff;
	}

	.compare__item p {
		margin: 0;
		font-size: 0.93rem;
	}

	.compare__arrow {
		font-size: 1.8rem;
		color: var(--green-500);
		text-align: center;
	}

	@media (max-width: 819px) {
		.compare__arrow {
			transform: rotate(90deg);
		}
	}

	.table-note {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		margin-top: 18px;
		font-size: 0.9rem;
		color: var(--muted);
	}

	.table-note :global(svg) {
		width: 18px;
		height: 18px;
		flex-shrink: 0;
		margin-top: 3px;
		color: var(--green-600);
	}

	.preco {
		align-items: stretch;
	}

	.preco__box {
		background: var(--green-100);
		border-color: var(--green-200);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.preco__lbl {
		font-family: var(--font-display);
		font-size: 0.76rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--green-700);
	}

	.preco__val {
		display: block;
		font-family: var(--font-display);
		font-size: clamp(1.9rem, 4.5vw, 2.7rem);
		font-weight: 600;
		color: var(--green-900);
		line-height: 1.1;
		margin: 8px 0 12px;
	}

	.preco__sub {
		margin: 0;
		padding-top: 14px;
		border-top: 1px dashed var(--green-200);
		font-size: 0.93rem;
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
