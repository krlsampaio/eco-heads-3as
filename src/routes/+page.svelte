<script>
	import { asset, resolve } from '$app/paths';
	import Icon from '$lib/components/Icon.svelte';

	const pilares = [
		{
			letra: 'A',
			titulo: 'Acessível',
			icon: 'money',
			texto:
				'Enquanto um aparelho auditivo convencional custa de R$ 4.000 a R$ 25.000, o protótipo do EcoHeads 3´AS é estimado entre R$ 70 e R$ 130 de produção.'
		},
		{
			letra: 'A',
			titulo: 'Adaptável',
			icon: 'chip',
			texto:
				'Feito com microcontroladores de baixo custo, microfones MEMS e Bluetooth de baixo consumo, com ajustes pelo celular por meio de aplicativos open source.'
		},
		{
			letra: 'A',
			titulo: 'Ambiental',
			icon: 'recycle',
			texto:
				'Carcaça em plástico reciclado ou bioplástico, metais recicláveis nos circuitos e componentes reaproveitados de eletrônicos descartados.'
		}
	];

	const numeros = [
		{ valor: '10,7 mi', texto: 'de pessoas no Brasil com algum grau de deficiência auditiva' },
		{ valor: '87%', texto: 'dessa população não utiliza aparelhos auditivos' },
		{ valor: '2,3 mi', texto: 'têm deficiência auditiva severa' },
		{ valor: '37%', texto: 'das pessoas com deficiência auditiva estão empregadas' }
	];

	/** @type {{ icon: string, titulo: string, texto: string, href: import('$app/types').RouteId }[]} */
	const destaques = [
		{
			icon: 'chart',
			titulo: 'Dados e pesquisas',
			texto:
				'Estatísticas sobre deficiência e hipersensibilidade auditiva, custos, barreiras de acesso e o papel do SUS.',
			href: '/dados'
		},
		{
			icon: 'trash',
			titulo: 'Lixo eletrônico',
			texto:
				'O que é, quais impactos causa no meio ambiente e na saúde, e como fazer o descarte correto no Brasil.',
			href: '/lixo-eletronico'
		},
		{
			icon: 'ear',
			titulo: 'O aparelho',
			texto:
				'Protótipo digital, partes principais, materiais utilizados e dicas de conservação do dispositivo.',
			href: '/aparelho'
		},
		{
			icon: 'money',
			titulo: 'Custo-benefício',
			texto:
				'Tabela de custos de produção, faixa de preço para o público-alvo e caminhos para oferta gratuita.',
			href: '/custo-beneficio'
		}
	];
</script>

<svelte:head>
	<title>EcoHeads 3´AS — Aparelho Auditivo Adaptável</title>
	<meta
		name="description"
		content="EcoHeads 3´AS é um projeto de aparelho auditivo adaptável, acessível e sustentável, feito com materiais recicláveis e tecnologia de baixo custo."
	/>
</svelte:head>

<section class="hero">
	<span class="hero__blob hero__blob--tl"></span>
	<span class="hero__blob hero__blob--br"></span>

	<div class="container hero__inner">
		<div class="hero__copy">
			<span class="pill"><Icon name="leaf" /> Projeto de inclusão e sustentabilidade</span>
			<h1>EcoHeads <span>3´AS</span></h1>
			<p class="hero__sub">
				<em>A</em>parelho <em>A</em>uditivo <em>A</em>daptável
			</p>
			<p class="lead">
				Um aparelho auditivo pensado para quem não consegue pagar por um — construído com materiais
				recicláveis, componentes reaproveitados e tecnologia de baixo custo. Inclusão auditiva e
				redução do lixo eletrônico no mesmo projeto.
			</p>
			<div class="hero__actions">
				<a class="btn btn--primary" href={resolve('/projeto')}>Conheça o projeto</a>
				<a class="btn btn--ghost" href={resolve('/aparelho')}>Ver o protótipo</a>
			</div>
			<a class="hero__cue" href="#numeros">
				<span class="hero__mouse" aria-hidden="true"></span>
				Role para conhecer
			</a>
		</div>

		<div class="hero__art">
			<img
				src={asset('/images/prototipo.png')}
				alt="Protótipo digital do aparelho auditivo EcoHeads 3´AS, com carcaça cinza e verde e receptor intra-auricular"
				width="900"
				height="842"
			/>
		</div>
	</div>
</section>

<section class="section section--soft" id="numeros">
	<div class="container">
		<div class="section-head section-head--center">
			<span class="eyebrow">O problema em números</span>
			<h2>Muita gente precisa e quase ninguém alcança</h2>
			<p class="lead">
				Estudo do Instituto Locomotiva com a Semana da Acessibilidade Surda mostra o tamanho da
				lacuna entre quem precisa de um aparelho auditivo e quem consegue usar um.
			</p>
		</div>

		<div class="grid grid--4 stats">
			{#each numeros as n (n.valor)}
				<div class="stat">
					<strong>{n.valor}</strong>
					<span>{n.texto}</span>
				</div>
			{/each}
		</div>

		<p class="stat-note">
			A principal razão é o alto custo e a falta de acesso a tratamentos adequados. A renda média
			desse grupo gira em torno de R$ 1.000, muito abaixo da média nacional.
			<a href={resolve('/dados')}>Ver todos os dados →</a>
		</p>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="section-head section-head--center">
			<span class="eyebrow">Os três "A"</span>
			<h2>O que sustenta o EcoHeads 3´AS</h2>
		</div>

		<div class="grid grid--3">
			{#each pilares as p (p.titulo)}
				<article class="pilar card">
					<div class="card__icon"><Icon name={p.icon} /></div>
					<span class="pilar__letra" aria-hidden="true">{p.letra}</span>
					<h3>{p.titulo}</h3>
					<p>{p.texto}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section section--deep">
	<div class="container split">
		<div>
			<span class="eyebrow">Dois problemas, uma solução</span>
			<h2>Tecnologia que inclui sem poluir</h2>
			<p class="lead">
				De um lado, milhões de pessoas sem acesso a aparelhos auditivos. Do outro, montanhas de
				eletrônicos descartados de forma incorreta, contaminando solo, água e ar com chumbo,
				mercúrio e cádmio.
			</p>
			<p class="lead">
				O EcoHeads 3´AS reaproveita componentes desses aparelhos descartados para construir
				dispositivos auditivos acessíveis, fechando o ciclo entre inclusão social e economia
				circular.
			</p>
			<a class="btn btn--light" href={resolve('/lixo-eletronico')}>Entenda o lixo eletrônico</a>
		</div>
		<div class="split__art">
			<img src={asset('/images/reciclagem.png')} alt="" width="411" height="402" />
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Explore o site</span>
			<h2>O que você encontra por aqui</h2>
			<p class="lead">
				A plataforma reúne as pesquisas, os dados e o conteúdo educativo produzidos ao longo do
				projeto.
			</p>
		</div>

		<div class="grid grid--4 dests">
			{#each destaques as d (d.href)}
				<a class="dest card" href={resolve(d.href)}>
					<div class="card__icon"><Icon name={d.icon} /></div>
					<h3>{d.titulo}</h3>
					<p>{d.texto}</p>
					<span class="dest__go">Acessar →</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="section section--tight cta">
	<div class="container cta__inner">
		<div>
			<h2>Quer apoiar, tirar dúvidas ou sugerir algo?</h2>
			<p class="lead">
				O projeto está aberto a parcerias com ONGs, escolas, empresas de tecnologia e pessoas
				interessadas em acessibilidade auditiva e sustentabilidade.
			</p>
		</div>
		<a class="btn btn--primary" href={resolve('/contato')}>Falar com a equipe</a>
	</div>
</section>

<style>
	/* Hero */
	.hero {
		position: relative;
		overflow: hidden;
		background: #fff;
		padding: clamp(40px, 6vw, 76px) 0 clamp(48px, 7vw, 90px);
	}

	.hero__blob {
		position: absolute;
		border-radius: 50%;
		background: var(--green-700);
		opacity: 0.92;
		pointer-events: none;
	}

	.hero__blob--tl {
		width: 380px;
		height: 380px;
		top: -215px;
		left: -150px;
	}

	/* no celular o círculo ficava por cima do título */
	@media (max-width: 760px) {
		.hero__blob--tl {
			width: 170px;
			height: 170px;
			top: -110px;
			left: -90px;
		}
		.hero__blob--br {
			width: 220px;
			height: 220px;
			bottom: -130px;
			right: -90px;
		}
	}

	.hero__blob--br {
		width: 330px;
		height: 330px;
		bottom: -200px;
		right: -110px;
	}

	.hero__inner {
		position: relative;
		z-index: 1;
		display: grid;
		gap: 40px;
		align-items: center;
	}

	@media (min-width: 940px) {
		.hero__inner {
			grid-template-columns: 1.05fr 0.95fr;
			gap: 56px;
		}
	}

	.hero__copy .pill {
		margin-bottom: 20px;
	}

	.hero__copy .pill :global(svg) {
		width: 16px;
		height: 16px;
	}

	.hero h1 {
		font-size: clamp(2.5rem, 7vw, 4.4rem);
		font-weight: 300;
		letter-spacing: -0.03em;
		color: var(--ink);
		margin-bottom: 6px;
	}

	.hero h1 span {
		font-weight: 500;
	}

	.hero__sub {
		font-family: var(--font-display);
		font-size: clamp(1.05rem, 2.4vw, 1.45rem);
		color: var(--green-900);
		border-top: 1.5px solid var(--green-600);
		padding-top: 10px;
		display: inline-block;
		margin-bottom: 22px;
	}

	.hero__sub em {
		font-style: normal;
		color: var(--green-500);
		font-weight: 600;
	}

	.hero .lead {
		max-width: 52ch;
	}

	.hero__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 26px;
	}

	.hero__art {
		display: grid;
		place-items: center;
	}

	.hero__art img {
		width: min(100%, 400px);
		height: auto;
		filter: drop-shadow(0 26px 40px rgba(20, 87, 47, 0.18));
		animation: flutuar 6s ease-in-out infinite;
	}

	@media (max-width: 939px) {
		.hero__art img {
			width: min(72%, 280px);
		}
	}

	@keyframes flutuar {
		0%,
		100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-12px) rotate(-1.5deg);
		}
	}

	@keyframes girar {
		to {
			transform: rotate(360deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero__art img,
		.split__art img {
			animation: none;
		}
	}

	/* convite para rolar */
	.hero__cue {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin-top: 30px;
		font-family: var(--font-display);
		font-size: 0.85rem;
		color: var(--muted);
	}

	.hero__cue:hover {
		text-decoration: none;
		color: var(--green-700);
	}

	.hero__mouse {
		width: 22px;
		height: 34px;
		border: 2px solid var(--green-600);
		border-radius: 12px;
		position: relative;
	}

	.hero__mouse::after {
		content: '';
		position: absolute;
		left: 50%;
		top: 6px;
		width: 4px;
		height: 7px;
		margin-left: -2px;
		border-radius: 2px;
		background: var(--green-600);
		animation: rolar 1.6s ease-in-out infinite;
	}

	@keyframes rolar {
		0% {
			opacity: 0;
			transform: translateY(0);
		}
		30% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: translateY(12px);
		}
	}

	/* Estatísticas */
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
		font-size: clamp(1.9rem, 4vw, 2.5rem);
		font-weight: 600;
		color: var(--green-700);
		line-height: 1.05;
		margin-bottom: 8px;
	}

	.stat span {
		font-size: 0.92rem;
		color: var(--body);
	}

	/* números lado a lado no celular, em vez de 4 cards empilhados */
	@media (max-width: 699px) {
		.stats {
			grid-template-columns: 1fr 1fr;
			gap: 12px;
		}
		.stat {
			padding: 18px 16px;
		}
		.stat span {
			font-size: 0.84rem;
			line-height: 1.45;
			display: block;
		}
	}

	.stat-note {
		margin: 28px auto 0;
		max-width: 760px;
		text-align: center;
		font-size: 0.94rem;
		color: var(--muted);
	}

	.stat-note a {
		white-space: nowrap;
		font-weight: 500;
	}

	/* Pilares */
	.pilar {
		position: relative;
		overflow: hidden;
	}

	.pilar__letra {
		position: absolute;
		right: 14px;
		top: 2px;
		font-family: var(--font-display);
		font-size: 5.5rem;
		font-weight: 700;
		color: var(--green-100);
		line-height: 1;
		z-index: 0;
	}

	.pilar h3,
	.pilar p,
	.pilar .card__icon {
		position: relative;
		z-index: 1;
	}

	/* Split escuro */
	.split {
		display: grid;
		gap: 36px;
		align-items: center;
	}

	@media (min-width: 900px) {
		.split {
			grid-template-columns: 1.25fr 0.75fr;
			gap: 60px;
		}
	}

	.split .btn {
		margin-top: 10px;
	}

	.split__art {
		display: grid;
		place-items: center;
	}

	.split__art img {
		width: min(70%, 260px);
		filter: brightness(1.25) drop-shadow(0 18px 30px rgba(0, 0, 0, 0.25));
		animation: girar 40s linear infinite;
	}

	/* Destaques */
	.dest {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: var(--body);
		transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
	}

	.dest:hover {
		text-decoration: none;
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--green-200);
	}

	.dest p {
		font-size: 0.93rem;
		flex-grow: 1;
	}

	.dest__go {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: 0.88rem;
		color: var(--green-700);
	}

	/* no celular: linhas compactas, fáceis de tocar */
	@media (max-width: 699px) {
		.dests {
			gap: 10px;
		}
		.dest {
			display: grid;
			grid-template-columns: 46px 1fr auto;
			column-gap: 14px;
			align-items: center;
			padding: 16px 16px;
		}
		.dest .card__icon {
			margin: 0;
			grid-row: span 2;
		}
		.dest h3 {
			margin: 0;
			font-size: 1.02rem;
		}
		.dest p {
			grid-column: 2;
			margin: 2px 0 0;
			font-size: 0.84rem;
			line-height: 1.45;
		}
		.dest__go {
			grid-column: 3;
			grid-row: 1 / span 2;
			font-size: 0;
		}
		.dest__go::after {
			content: '→';
			font-size: 1.3rem;
		}
	}

	/* CTA */
	.cta__inner {
		background: var(--green-100);
		border-radius: var(--radius-lg);
		padding: clamp(30px, 4vw, 48px);
		display: grid;
		gap: 24px;
		align-items: center;
	}

	@media (min-width: 860px) {
		.cta__inner {
			grid-template-columns: 1fr auto;
			gap: 44px;
		}
	}

	.cta h2 {
		margin-bottom: 10px;
	}

	.cta .lead {
		margin-bottom: 0;
		max-width: 62ch;
	}
</style>
