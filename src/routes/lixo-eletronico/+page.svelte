<script>
	import { asset, resolve } from '$app/paths';
	import PageHero from '$lib/components/PageHero.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Sources from '$lib/components/Sources.svelte';

	const impactos = [
		{
			icon: 'alert',
			titulo: 'Contaminação do solo, da água e do ar',
			texto:
				'Componentes tóxicos como chumbo, mercúrio, cádmio e outros metais pesados vazam quando os aparelhos são jogados em lixões ou aterros sem tratamento adequado.'
		},
		{
			icon: 'heart',
			titulo: 'Riscos à saúde humana',
			texto:
				'A exposição a esses metais pesados afeta principalmente quem vive e trabalha próximo às áreas de descarte irregular.'
		},
		{
			icon: 'trash',
			titulo: 'Aumento do volume de resíduos',
			texto:
				'O descarte incorreto dificulta a reciclagem e o reaproveitamento dos materiais, ampliando o volume de lixo acumulado.'
		}
	];

	const passos = [
		{
			titulo: 'Separe o aparelho do lixo comum',
			texto:
				'Eletrônicos quebrados ou sem uso — celulares, computadores, televisores, baterias — nunca devem ir para a lixeira doméstica.'
		},
		{
			titulo: 'Leve a um ponto de entrega voluntária',
			texto:
				'O descarte deve ser feito em pontos de entrega voluntária, assistências autorizadas ou cooperativas especializadas. É obrigatório pela legislação brasileira.'
		},
		{
			titulo: 'Os materiais são separados e desmontados',
			texto:
				'Depois da coleta, os equipamentos são separados, desmontados e reciclados, permitindo o reaproveitamento de metais e componentes.'
		},
		{
			titulo: 'Componentes voltam para a cadeia produtiva',
			texto:
				'É exatamente nessa etapa que o EcoHeads 3´AS entra: peças recuperadas podem virar novos aparelhos auditivos acessíveis.'
		}
	];

	const iniciativas = [
		{ nome: 'Instituto LOOP', texto: 'Atua na logística reversa de eletrônicos no Brasil.' },
		{ nome: 'GreenEletron', texto: 'Gestora de logística reversa de eletroeletrônicos.' },
		{ nome: 'Ecobraz', texto: 'Recolhimento e encaminhamento correto de eletrônicos.' },
		{ nome: 'Reciclotech', texto: 'Programa público de reaproveitamento de equipamentos.' }
	];

	const fontes = [
		'https://www.todoestudo.com.br/biologia/lixo-eletronico',
		'https://www.ecycle.com.br/lixo-eletronico/',
		'https://saneamentobasico.com.br/residuos-solidos/descarte-lixo-eletronico/',
		'https://www.institutoloop.org.br/o-desafio-do-lixo-eletronico-no-brasil-e-o-papel-do-instituto-loop-na-logistica-reversa/',
		'https://www.gov.br/mme/pt-br/assuntos/secretarias/geologia-mineracao-e-transformacao-mineral/pnm-2050/estudos/caderno-3-cadeias-produtivas-dos-minerais-para-transicao-energetica/',
		'https://logreversa.com.br/reciclagem-de-lixo-eletronico/'
	];
</script>

<svelte:head>
	<title>Lixo Eletrônico — EcoHeads 3´AS</title>
	<meta
		name="description"
		content="O que é lixo eletrônico, os impactos do descarte incorreto no meio ambiente e na saúde, e como fazer o descarte correto no Brasil."
	/>
</svelte:head>

<PageHero
	eyebrow="Lixo Eletrônico"
	title="O que acontece com os eletrônicos que jogamos fora"
	text="O lixo eletrônico é o conjunto de aparelhos eletrônicos descartados — celulares, computadores, televisores, baterias e outros equipamentos que não são mais utilizados ou estão quebrados."
/>

<section class="section">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Contexto do problema</span>
			<h2>Por que o descarte incorreto é grave</h2>
			<p class="lead">
				Se esses aparelhos forem descartados incorretamente, podem causar impactos significativos no
				meio ambiente e na saúde humana.
			</p>
		</div>

		<div class="grid grid--3">
			{#each impactos as i (i.titulo)}
				<article class="card">
					<div class="card__icon card__icon--warn"><Icon name={i.icon} /></div>
					<h3>{i.titulo}</h3>
					<p>{i.texto}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section section--soft">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Conteúdo educativo</span>
			<h2>Como fazer o descarte correto</h2>
			<p class="lead">
				O descarte correto do lixo eletrônico é obrigatório pela legislação brasileira. Ainda assim,
				parte desses resíduos é enviada para outros países e a adesão da população ao descarte
				adequado permanece baixa.
			</p>
		</div>

		<ol class="passos">
			{#each passos as p, i (p.titulo)}
				<li>
					<span class="passos__num" aria-hidden="true">{i + 1}</span>
					<div>
						<h3>{p.titulo}</h3>
						<p>{p.texto}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Iniciativas existentes</span>
			<h2>Quem já faz esse trabalho no Brasil</h2>
			<p class="lead">
				Diversas iniciativas fazem o recolhimento e o encaminhamento correto dos eletrônicos.
			</p>
		</div>

		<div class="grid grid--4">
			{#each iniciativas as ini (ini.nome)}
				<div class="mini">
					<div class="card__icon"><Icon name="recycle" /></div>
					<h3>{ini.nome}</h3>
					<p>{ini.texto}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section section--deep">
	<div class="container split">
		<div>
			<span class="eyebrow">Logística reversa</span>
			<h2>O sistema de coleta do EcoHeads 3´AS</h2>
			<p class="lead">
				A EcoHeads 3´AS também pode criar seu próprio sistema de logística reversa, com pontos de
				coleta, parcerias e incentivos para devolução de aparelhos usados.
			</p>
			<p>
				Apesar dos custos de estrutura e transporte, os benefícios ambientais são grandes: redução da
				contaminação, economia de recursos naturais e fortalecimento da economia circular.
			</p>
			<ul class="benef">
				<li><Icon name="check" /> Menos contaminação do solo e da água</li>
				<li><Icon name="check" /> Economia de recursos naturais</li>
				<li><Icon name="check" /> Fortalecimento da economia circular</li>
				<li><Icon name="check" /> Crédito para produção de novos aparelhos</li>
			</ul>
			<a class="btn btn--light" href={resolve('/custo-beneficio')}>Ver como isso barateia o aparelho</a>
		</div>

		<div class="split__art">
			<img src={asset('/images/reciclagem.png')} alt="" width="411" height="402" />
		</div>
	</div>
</section>

<section class="section section--tight">
	<div class="container">
		<div class="campanha">
			<div class="card__icon"><Icon name="spark" /></div>
			<div>
				<h3>Campanhas de conscientização</h3>
				<p>
					Uma das frentes do projeto é a divulgação de campanhas de conscientização ambiental em
					escolas e comunidades, incentivando a devolução de eletrônicos e explicando o caminho que
					esses materiais percorrem depois da coleta.
				</p>
			</div>
		</div>

		<Sources links={fontes} />
	</div>
</section>

<style>
	.card__icon--warn {
		background: #fdf1d8;
		color: #a2701a;
	}

	.passos {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 18px;
	}

	@media (min-width: 860px) {
		.passos {
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
		}
	}

	.passos li {
		display: flex;
		gap: 16px;
		margin: 0;
		background: #fff;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 24px 22px;
		box-shadow: var(--shadow);
	}

	.passos__num {
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

	.passos h3 {
		font-size: 1.05rem;
		margin-bottom: 5px;
	}

	.passos p {
		margin: 0;
		font-size: 0.94rem;
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

	.split {
		display: grid;
		gap: 36px;
		align-items: center;
	}

	@media (min-width: 900px) {
		.split {
			grid-template-columns: 1.25fr 0.75fr;
			gap: 56px;
		}
	}

	.split__art {
		display: grid;
		place-items: center;
	}

	.split__art img {
		width: min(70%, 250px);
		filter: brightness(1.25) drop-shadow(0 18px 30px rgba(0, 0, 0, 0.25));
	}

	.benef {
		list-style: none;
		padding: 0;
		margin: 20px 0 26px;
	}

	.benef li {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 9px;
		font-size: 0.95rem;
	}

	.benef :global(svg) {
		width: 17px;
		height: 17px;
		color: var(--green-400);
		flex-shrink: 0;
	}

	.campanha {
		display: flex;
		gap: 20px;
		align-items: flex-start;
		background: var(--green-100);
		border-radius: var(--radius);
		padding: 26px;
	}

	.campanha .card__icon {
		background: #fff;
		flex-shrink: 0;
		margin-bottom: 0;
	}

	.campanha h3 {
		margin-bottom: 8px;
	}

	.campanha p {
		margin: 0;
	}
</style>
