<script>
	import { asset, resolve } from '$app/paths';
	import PageHero from '$lib/components/PageHero.svelte';
	import Icon from '$lib/components/Icon.svelte';

	const partes = [
		{
			nome: 'Microfone',
			texto: 'Capta os sons do ambiente. Usamos microfones MEMS: pequenos, baratos e com boa qualidade de captação.'
		},
		{
			nome: 'Amplificador',
			texto: 'Processa e reforça o sinal captado, ajustando o volume conforme a necessidade da pessoa.'
		},
		{
			nome: 'Receptor',
			texto: 'Entrega o som já amplificado dentro do canal auditivo, na ponta do fio.'
		},
		{
			nome: 'Suporte para a orelha',
			texto: 'Peça que apoia o aparelho atrás da orelha e mantém o conjunto firme e confortável.'
		},
		{
			nome: 'Fonte de energia',
			texto: 'Bateria recarregável simples, escolhida para reduzir o descarte de pilhas descartáveis.'
		},
		{
			nome: 'Botão de ligar/desligar',
			texto: 'Controle físico simples, pensado para ser fácil de usar por crianças e idosos.'
		}
	];

	const materiais = [
		{
			nome: 'Plástico reciclado (ABS ou PET)',
			texto: 'Pode ser usado na carcaça do aparelho.'
		},
		{
			nome: 'Bioplásticos (PLA)',
			texto: 'Produzido a partir de amido de milho ou cana-de-açúcar, biodegradável.'
		},
		{
			nome: 'Metais recicláveis (alumínio, cobre)',
			texto: 'Utilizados nos circuitos internos.'
		},
		{
			nome: 'Componentes eletrônicos reaproveitados',
			texto: 'Retirados de equipamentos eletrônicos descartados.'
		}
	];

	const tecnologias = [
		{
			nome: 'Microcontroladores acessíveis',
			texto: 'Como ESP32 ou Arduino Nano, para controlar as funções do aparelho com baixo custo.'
		},
		{
			nome: 'Microfones MEMS',
			texto: 'Pequenos, baratos e com boa qualidade de captação.'
		},
		{
			nome: 'Aplicativos open source',
			texto: 'Para controle e ajuste do aparelho pelo celular.'
		},
		{
			nome: 'Bluetooth de baixo consumo (BLE)',
			texto: 'Para conectividade com o celular e ajustes finos.'
		}
	];

	const dicas = [
		'Guarde o aparelho em local seco, longe de umidade e de calor excessivo.',
		'Limpe a carcaça e o receptor com um pano seco e macio, sem produtos de limpeza.',
		'Retire o aparelho antes de tomar banho, nadar ou usar secador de cabelo.',
		'Desligue o dispositivo quando não estiver em uso para preservar a bateria.',
		'Evite quedas: manuseie o aparelho sobre uma superfície macia ao colocá-lo ou retirá-lo.',
		'Quando o aparelho chegar ao fim da vida útil, devolva-o em um ponto de coleta em vez de jogá-lo no lixo comum.'
	];
</script>

<svelte:head>
	<title>O Aparelho — EcoHeads 3´AS</title>
	<meta
		name="description"
		content="Protótipo digital do EcoHeads 3´AS: partes principais, materiais recicláveis, tecnologias de baixo custo e dicas de conservação."
	/>
</svelte:head>

<PageHero
	eyebrow="O Aparelho"
	title="Como funciona o EcoHeads 3´AS"
	text="Um aparelho retroauricular simples: o microfone capta o som, o amplificador reforça o sinal e o receptor entrega o áudio dentro do canal auditivo — tudo controlado por um microcontrolador de baixo custo."
/>

<section class="section">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Protótipo digital</span>
			<h2>Design e partes principais</h2>
			<p class="lead">
				O protótipo digital foi criado no Adobe Photoshop, com o logotipo desenvolvido em vetor no
				Adobe Illustrator.
			</p>
		</div>

		<div class="proto">
			<figure class="proto__fig">
				<img
					src={asset('/images/prototipo.svg')}
					alt="Protótipo do aparelho auditivo EcoHeads 3´AS: corpo retroauricular cinza com painel verde, botão frontal, fio branco e receptor intra-auricular"
					width="900"
					height="842"
				/>
				<figcaption>Protótipo digital EcoHeads 3´AS — vista lateral</figcaption>
			</figure>

			<ol class="partes">
				{#each partes as parte, i (parte.nome)}
					<li>
						<span class="partes__num" aria-hidden="true">{i + 1}</span>
						<div>
							<h3>{parte.nome}</h3>
							<p>{parte.texto}</p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<section class="section section--soft">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Recursos necessários</span>
			<h2>Do que o aparelho é feito</h2>
			<p class="lead">
				A escolha dos materiais e das tecnologias segue dois critérios simples: baixo custo e menor
				impacto ambiental possível.
			</p>
		</div>

		<div class="grid grid--2">
			<article class="card">
				<div class="card__icon"><Icon name="recycle" /></div>
				<h3>Materiais recicláveis e biodegradáveis</h3>
				<dl class="deflist">
					{#each materiais as m (m.nome)}
						<dt>{m.nome}</dt>
						<dd>{m.texto}</dd>
					{/each}
				</dl>
				<p class="card__foot">Esses materiais ajudam a reduzir o impacto ambiental.</p>
			</article>

			<article class="card">
				<div class="card__icon"><Icon name="chip" /></div>
				<h3>Tecnologias de baixo custo</h3>
				<dl class="deflist">
					{#each tecnologias as t (t.nome)}
						<dt>{t.nome}</dt>
						<dd>{t.texto}</dd>
					{/each}
				</dl>
				<p class="card__foot">
					Essas tecnologias são baratas, sustentáveis e eficientes, ideais para um projeto acessível
					e ecológico.
				</p>
			</article>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Cuidados</span>
			<h2>Dicas de conservação e uso</h2>
			<p class="lead">
				Um aparelho bem cuidado dura mais, funciona melhor e adia a necessidade de substituição — o
				que também significa menos lixo eletrônico.
			</p>
		</div>

		<ul class="dicas">
			{#each dicas as dica (dica)}
				<li>
					<span class="dicas__ico"><Icon name="check" /></span>
					{dica}
				</li>
			{/each}
		</ul>

		<div class="aviso">
			<span class="dicas__ico dicas__ico--warn"><Icon name="alert" /></span>
			<p>
				<strong>Expectativas realistas.</strong> Um aparelho auditivo não devolve uma audição
				perfeita: ele exige um período de adaptação e acompanhamento. Procure sempre um
				fonoaudiólogo para avaliar seu caso e ajustar o dispositivo.
			</p>
		</div>
	</div>
</section>

<style>
	.proto {
		display: grid;
		gap: 36px;
		align-items: start;
	}

	@media (min-width: 940px) {
		.proto {
			grid-template-columns: 0.9fr 1.1fr;
			gap: 52px;
		}
	}

	.proto__fig {
		margin: 0;
		background: var(--green-50);
		border: 1px solid var(--line);
		border-radius: var(--radius-lg);
		padding: 28px;
		text-align: center;
	}

	.proto__fig img {
		width: min(100%, 330px);
		height: auto;
		margin: 0 auto;
	}

	.proto__fig figcaption {
		margin-top: 16px;
		font-size: 0.82rem;
		color: var(--muted);
	}

	.partes {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 18px;
	}

	.partes li {
		display: flex;
		gap: 16px;
		margin: 0;
		padding-bottom: 18px;
		border-bottom: 1px solid var(--line);
	}

	.partes li:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.partes__num {
		flex-shrink: 0;
		width: 34px;
		height: 34px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: var(--green-700);
		color: #fff;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 0.9rem;
	}

	.partes h3 {
		font-size: 1.05rem;
		margin-bottom: 4px;
	}

	.partes p {
		margin: 0;
		font-size: 0.94rem;
	}

	.deflist {
		margin: 0;
	}

	.deflist dt {
		font-family: var(--font-display);
		font-weight: 500;
		color: var(--green-800);
		margin-top: 14px;
	}

	.deflist dt:first-child {
		margin-top: 0;
	}

	.deflist dd {
		margin: 2px 0 0;
		font-size: 0.93rem;
	}

	.card__foot {
		margin: 20px 0 0;
		padding-top: 16px;
		border-top: 1px dashed var(--green-200);
		font-size: 0.9rem;
		color: var(--green-700);
	}

	.dicas {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 14px;
	}

	@media (min-width: 780px) {
		.dicas {
			grid-template-columns: repeat(2, 1fr);
			gap: 14px 30px;
		}
	}

	.dicas li {
		display: flex;
		gap: 13px;
		align-items: flex-start;
		margin: 0;
		font-size: 0.95rem;
	}

	.dicas__ico {
		flex-shrink: 0;
		width: 26px;
		height: 26px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: var(--green-100);
		color: var(--green-700);
		margin-top: 2px;
	}

	.dicas__ico :global(svg) {
		width: 15px;
		height: 15px;
	}

	.dicas__ico--warn {
		background: #fdf1d8;
		color: #a2701a;
	}

	.aviso {
		margin-top: 34px;
		display: flex;
		gap: 14px;
		align-items: flex-start;
		background: #fffaf0;
		border: 1px solid #f2e2c2;
		border-radius: var(--radius);
		padding: 20px 22px;
	}

	.aviso p {
		margin: 0;
		font-size: 0.94rem;
	}
</style>
