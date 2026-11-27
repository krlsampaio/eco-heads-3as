<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Sources from '$lib/components/Sources.svelte';

	const numeros = [
		{ valor: '10,7 milhões', texto: 'de pessoas no Brasil com algum grau de deficiência auditiva' },
		{ valor: '2,3 milhões', texto: 'com deficiência auditiva severa' },
		{ valor: '87%', texto: 'não utilizam aparelhos auditivos' },
		{ valor: 'R$ 1.000', texto: 'renda média aproximada desse grupo' },
		{ valor: '37%', texto: 'estão empregadas — muitas em cargos informais' },
		{ valor: 'R$ 4 mil a R$ 25 mil', texto: 'faixa de preço de um aparelho auditivo convencional' }
	];

	const dificuldades = [
		'Barreiras na comunicação;',
		'Isolamento social e psicológico;',
		'Falta de acessibilidade em ambientes como trabalho e saúde;',
		'Esforço cognitivo para entender a fala.'
	];

	const barreiras = [
		{
			icon: 'money',
			titulo: 'Dificuldades financeiras',
			texto:
				'Os preços podem ser muito altos para a renda das famílias, e ainda há custos com exames (audiometria e impedanciometria) e consultas com fonoaudiólogos.'
		},
		{
			icon: 'alert',
			titulo: 'Expectativas irreais',
			texto:
				'Muitas pessoas acreditam que o aparelho funcionará como uma audição perfeita, quando na verdade ele exige um processo de adaptação.'
		},
		{
			icon: 'heart',
			titulo: 'Outros problemas de saúde',
			texto:
				'Condições associadas dificultam o processo de reabilitação auditiva e o acompanhamento adequado do usuário.'
		}
	];

	const caro = [
		'Processador de Sinal Digital — o “cérebro” do aparelho e o principal responsável pelo preço;',
		'Softwares avançados e algoritmos modernos de processamento de som;',
		'Conectividade Bluetooth;',
		'Microfones direcionais;',
		'Receptores de alta precisão.'
	];

	const fontes = [
		'https://agenciadenoticias.ibge.gov.br',
		'https://ilocomotiva.com.br/clipping/agencia-brasil-pais-tem-107-milhoes-de-pessoas-com-deficiencia-auditiva-diz-estudo/',
		'https://www.folhape.com.br/noticias/',
		'https://centroauditivolider.com.br/blog/post/168/qual-o-valor-de-um-aparelhoauditivo',
		'https://www.eauriz.com.br/motivacoes-x-barreiras-para-a-busca-da-reabilitacao-auditiva/',
		'https://www.gov.br/saude/pt-br/assuntos/noticias/2021/marco/sus-oferece-assistencia-integral-para-pessoas-com-deficiencia-auditiva',
		'https://www.audionova.com.br/aparelhos-auditivos/precos',
		'https://uniaudioaparelhosauditivos.com.br/preco-dos-auxilios-auditivos-o-que-voce-precisa-saber/'
	];
</script>

<svelte:head>
	<title>Dados e Pesquisas — EcoHeads 3´AS</title>
	<meta
		name="description"
		content="Estatísticas sobre deficiência e hipersensibilidade auditiva no Brasil, custo dos aparelhos, barreiras de acesso e atendimento pelo SUS."
	/>
</svelte:head>

<PageHero
	eyebrow="Dados e Pesquisas"
	title="O que a pesquisa mostra sobre a audição no Brasil"
	text="Reunimos aqui os dados que motivaram o projeto: quantas pessoas precisam de aparelhos auditivos, quanto eles custam, por que são caros e o que impede o acesso."
/>

<section id="deficiencia" class="section">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Contexto do problema</span>
			<h2>Deficiência e hipersensibilidade auditiva</h2>
			<p class="lead">Duas condições diferentes que afetam a relação da pessoa com o som.</p>
		</div>

		<div class="grid grid--2">
			<article class="card conceito">
				<div class="card__icon"><Icon name="ear" /></div>
				<h3>Deficiência auditiva</h3>
				<p>
					Refere-se à perda parcial ou total da audição, podendo variar do nível leve (parcial) ao
					profundo (total).
				</p>
			</article>

			<article class="card conceito">
				<div class="card__icon"><Icon name="wave" /></div>
				<h3>Hipersensibilidade auditiva</h3>
				<p>
					É caracterizada pelo incômodo ao ouvir sons: a pessoa tem uma tolerância muito baixa aos
					ruídos, mesmo em níveis normais.
				</p>
			</article>
		</div>
	</div>
</section>

<section id="acesso" class="section section--soft">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Dados estatísticos</span>
			<h2>Falta de acesso a aparelhos auditivos e tratamentos</h2>
			<p class="lead">
				Estudo feito em conjunto pelo Instituto Locomotiva e a Semana da Acessibilidade Surda estima
				que cerca de 10,7 milhões de pessoas no Brasil apresentem algum grau de deficiência
				auditiva. Dessas, aproximadamente 2,3 milhões têm deficiência auditiva severa. No entanto,
				87% dessa população não utiliza aparelhos auditivos, principalmente devido ao alto custo e à
				falta de acesso a tratamentos adequados.
			</p>
		</div>

		<div class="grid grid--3">
			{#each numeros as n (n.valor)}
				<div class="stat">
					<strong>{n.valor}</strong>
					<span>{n.texto}</span>
				</div>
			{/each}
		</div>

		<div class="dific">
			<h3>Principais dificuldades enfrentadas</h3>
			<p>
				A renda média desse grupo gira em torno de R$ 1.000, valor muito inferior à média nacional.
				Apenas 37% das pessoas com deficiência auditiva estão empregadas, e muitas delas atuam em
				cargos informais ou de baixa remuneração.
			</p>
			<ul>
				{#each dificuldades as d (d)}
					<li>{d}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section id="custo" class="section">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Custo, acesso e direitos</span>
			<h2>Quanto custa e o que impede o acesso</h2>
		</div>

		<article class="destaque">
			<h3>Custo-benefício</h3>
			<p>
				Os aparelhos auditivos melhoram a qualidade de vida, devolvendo autonomia e comunicação ao
				usuário. O preço varia entre <strong>R$ 4.000,00 e R$ 25.000,00</strong>, de acordo com a
				tecnologia, a marca e funções como Bluetooth. Além do dispositivo, há custos com exames
				(audiometria e impedanciometria) e consultas com fonoaudiólogos. Mesmo sendo um investimento
				alto, seu valor é justificado pela melhora que proporciona.
			</p>
		</article>

		<h3 id="barreiras" class="sub">Barreiras de acesso</h3>
		<div class="grid grid--3">
			{#each barreiras as b (b.titulo)}
				<article class="card">
					<div class="card__icon"><Icon name={b.icon} /></div>
					<h3>{b.titulo}</h3>
					<p>{b.texto}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section section--soft">
	<div class="container grid grid--2 grid--start">
		<article id="sus" class="card">
			<div class="card__icon"><Icon name="hospital" /></div>
			<h3>Atendimento pelo SUS</h3>
			<p>
				O SUS disponibiliza aparelhos auditivos <strong>gratuitamente</strong> para pessoas com
				deficiência auditiva comprovada, incluindo exames, consultas e acompanhamento.
			</p>
			<p>
				O sistema é eficaz porque garante acesso a quem não teria condições de pagar, promovendo
				inclusão e melhora na comunicação. No entanto, pode haver limitações, como filas de espera e
				demora no atendimento, que reduzem sua eficiência em alguns locais. Mesmo assim, é uma
				política pública fundamental para ampliar a qualidade de vida de milhares de brasileiros.
			</p>
		</article>

		<article id="caros" class="card">
			<div class="card__icon"><Icon name="chip" /></div>
			<h3>Por que os aparelhos auditivos são caros?</h3>
			<p>
				O preço é alto principalmente por causa do <strong>Processador de Sinal Digital</strong>, que
				é o “cérebro” do aparelho. Somam-se a isso vários componentes de tecnologia sofisticada e
				custo elevado:
			</p>
			<ul>
				{#each caro as c (c)}
					<li>{c}</li>
				{/each}
			</ul>
			<p class="fine">
				O custo também varia conforme as necessidades do usuário: tipo de perda auditiva, formato do
				canal auditivo e estilo de vida.
			</p>
		</article>
	</div>
</section>

<section class="section section--tight">
	<div class="container">
		<Sources links={fontes} />
	</div>
</section>

<style>
	.conceito h3 {
		font-size: 1.2rem;
	}

	.stat {
		background: #fff;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 24px 22px;
		box-shadow: var(--shadow);
	}

	.stat strong {
		display: block;
		font-family: var(--font-display);
		font-size: clamp(1.5rem, 3vw, 2rem);
		font-weight: 600;
		color: var(--green-700);
		line-height: 1.1;
		margin-bottom: 8px;
	}

	.stat span {
		font-size: 0.92rem;
	}

	.dific {
		margin-top: 26px;
		background: #fff;
		border-left: 4px solid var(--green-600);
		border-radius: var(--radius);
		padding: 26px 28px;
		box-shadow: var(--shadow);
	}

	.dific h3 {
		margin-bottom: 10px;
	}

	.dific ul {
		margin-bottom: 0;
	}

	.destaque {
		background: var(--green-800);
		color: rgba(255, 255, 255, 0.88);
		border-radius: var(--radius-lg);
		padding: clamp(26px, 3.5vw, 38px);
		margin-bottom: 40px;
	}

	.destaque h3 {
		color: #fff;
		margin-bottom: 12px;
	}

	.destaque p {
		margin: 0;
	}

	.destaque strong {
		color: #fff;
	}

	.sub {
		margin-bottom: 20px;
	}

	.grid--start {
		align-items: start;
	}

	.fine {
		font-size: 0.9rem;
		color: var(--muted);
		margin-bottom: 0;
	}
</style>
