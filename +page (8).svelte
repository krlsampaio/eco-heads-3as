<script>
	import { asset, resolve } from '$app/paths';
	import PageHero from '$lib/components/PageHero.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { equipe, orientadora } from '$lib/data/site.js';

	const objetivos = [
		'Apresentar o projeto EcoHeads 3´AS;',
		'Divulgar informações sobre deficiência e hipersensibilidade auditiva;',
		'Explicar os impactos do descarte incorreto de lixo eletrônico;',
		'Incentivar práticas sustentáveis e a reciclagem de componentes eletrônicos;',
		'Facilitar o contato entre o público e a equipe do projeto.'
	];

	const funcionalidades = [
		'Página explicando o funcionamento do aparelho auditivo;',
		'Área com pesquisas, dados e estatísticas sobre deficiência auditiva;',
		'Conteúdo educativo sobre descarte correto de eletrônicos;',
		'Dicas para conservação e uso de aparelhos auditivos;',
		'Formulário para dúvidas, sugestões e apoio ao projeto;',
		'Divulgação de campanhas de conscientização ambiental.'
	];

	const publico = [
		{
			icon: 'ear',
			titulo: 'Pessoas com deficiência auditiva',
			texto:
				'Nos graus básico e moderado, de crianças a idosos, que precisam de amplificação para se comunicar com autonomia.'
		},
		{
			icon: 'wave',
			titulo: 'Pessoas com hipersensibilidade auditiva',
			texto:
				'Quem sente incômodo ao ouvir sons e tem tolerância muito baixa a ruídos, mesmo em níveis considerados normais.'
		},
		{
			icon: 'people',
			titulo: 'Público em vulnerabilidade econômica',
			texto:
				'Pessoas sem acesso fácil a aparelhos auditivos e tratamentos, que ficam de fora do mercado por causa do preço.'
		},
		{
			icon: 'recycle',
			titulo: 'Público consciente',
			texto:
				'Pessoas preocupadas com os impactos que a produção e o descarte incorreto de eletrônicos causam no meio ambiente.'
		}
	];
</script>

<svelte:head>
	<title>O Projeto — EcoHeads 3´AS</title>
	<meta
		name="description"
		content="Objetivo, solução, público-alvo e equipe do projeto EcoHeads 3´AS, um aparelho auditivo adaptável e sustentável."
	/>
</svelte:head>

<PageHero
	eyebrow="O Projeto"
	title="Um aparelho auditivo que cabe no bolso e respeita o planeta"
	text="O EcoHeads 3´AS nasce do encontro de dois problemas urgentes: a dificuldade de acesso a aparelhos auditivos e o impacto ambiental da produção e do descarte de eletrônicos."
/>

<section id="solucao" class="section">
	<div class="container split">
		<div>
			<span class="eyebrow">Objetivo do projeto</span>
			<h2>A solução proposta</h2>
			<p class="lead">
				O projeto EcoHeads 3´AS foi criado com o objetivo de desenvolver um aparelho auditivo
				<strong>adaptável e sustentável</strong>, pensado para pessoas com deficiência ou
				hipersensibilidade auditiva que enfrentam dificuldades de acesso a tratamentos e
				dispositivos auditivos, especialmente aquelas em condição de baixa renda.
			</p>
			<p>
				Ao mesmo tempo, o projeto busca enfrentar um problema ambiental urgente: o impacto negativo
				da produção e do descarte de aparelhos eletrônicos, que geram lixo tóxico e poluem o meio
				ambiente.
			</p>
			<p>
				Reconhecendo a dificuldade de acesso a aparelhos adequados e acessíveis para essa população,
				o EcoHeads 3´AS propõe uma alternativa <strong>acessível, personalizável e ecologicamente
				responsável</strong>.
			</p>
		</div>

		<aside class="quote">
			<img src={asset('/images/logo.png')} alt="" width="90" height="90" />
			<p>
				“Um dispositivo auditivo não deveria custar mais do que meses inteiros de renda de quem mais
				precisa dele.”
			</p>
		</aside>
	</div>
</section>

<section id="publico" class="section section--soft">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">Público-alvo</span>
			<h2>Para quem o projeto foi pensado</h2>
			<p class="lead">
				O EcoHeads 3´AS atende pessoas que enfrentam barreiras auditivas e também dialoga com quem
				se preocupa com o destino dos eletrônicos descartados.
			</p>
		</div>

		<div class="grid grid--4">
			{#each publico as p (p.titulo)}
				<article class="card">
					<div class="card__icon"><Icon name={p.icon} /></div>
					<h3>{p.titulo}</h3>
					<p>{p.texto}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section id="site" class="section">
	<div class="container">
		<div class="section-head">
			<span class="eyebrow">A plataforma</span>
			<h2>Sobre este site</h2>
			<p class="lead">
				O site EcoHeads 3´AS está sendo desenvolvido para complementar o projeto do aparelho
				auditivo sustentável, tornando as informações mais acessíveis ao público e promovendo a
				conscientização sobre inclusão auditiva e sustentabilidade ambiental.
			</p>
		</div>

		<div class="grid grid--2">
			<article class="card">
				<div class="card__icon"><Icon name="check" /></div>
				<h3>Objetivos da plataforma</h3>
				<ul>
					{#each objetivos as o (o)}
						<li>{o}</li>
					{/each}
				</ul>
			</article>

			<article class="card">
				<div class="card__icon"><Icon name="bulb" /></div>
				<h3>Funcionalidades planejadas</h3>
				<ul>
					{#each funcionalidades as f (f)}
						<li>{f}</li>
					{/each}
				</ul>
			</article>
		</div>

		<div class="banner">
			<div class="card__icon"><Icon name="leaf" /></div>
			<div>
				<h3>Sustentabilidade e inclusão</h3>
				<p>
					A plataforma será uma ferramenta para mostrar como a tecnologia pode contribuir para a
					inclusão social e para a redução dos impactos causados pelo lixo eletrônico, incentivando
					o reaproveitamento de materiais e a economia circular.
				</p>
			</div>
		</div>
	</div>
</section>

<section id="equipe" class="section section--soft">
	<div class="container">
		<div class="section-head section-head--center">
			<span class="eyebrow">Equipe</span>
			<h2>Quem desenvolve o EcoHeads 3´AS</h2>
		</div>

		<ul class="equipe">
			{#each equipe as membro (membro.nome)}
				<li>
					<span class="equipe__ini" aria-hidden="true">{membro.nome.charAt(0)}</span>
					<strong>{membro.nome}</strong>
					<small>{membro.turma}</small>
				</li>
			{/each}
		</ul>

		<p class="orientadora">
			<span>Professora orientadora</span>
			<strong>{orientadora}</strong>
		</p>
	</div>
</section>

<style>
	.orientadora {
		margin: 36px auto 0;
		width: fit-content;
		max-width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
		padding: 16px 28px;
		border-radius: var(--radius);
		background: #fff;
		border: 1px solid var(--line);
		box-shadow: var(--shadow);
		text-align: center;
	}

	.orientadora span {
		font-family: var(--font-display);
		font-size: 0.74rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--green-600);
	}

	.orientadora strong {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 1.1rem;
		color: var(--green-900);
	}

	.split {
		display: grid;
		gap: 36px;
		align-items: start;
	}

	@media (min-width: 900px) {
		.split {
			grid-template-columns: 1.35fr 0.65fr;
			gap: 56px;
		}
	}

	.quote {
		background: var(--green-800);
		color: rgba(255, 255, 255, 0.9);
		border-radius: var(--radius-lg);
		padding: 30px 28px;
		box-shadow: var(--shadow-lg);
	}

	.quote img {
		background: #fff;
		border-radius: 50%;
		padding: 4px;
		margin-bottom: 18px;
	}

	.quote p {
		font-family: var(--font-display);
		font-size: 1.05rem;
		line-height: 1.5;
		margin: 0;
	}

	.banner {
		margin-top: 24px;
		display: flex;
		gap: 20px;
		align-items: flex-start;
		background: var(--green-100);
		border-radius: var(--radius);
		padding: 26px 26px;
	}

	.banner .card__icon {
		background: #fff;
		flex-shrink: 0;
		margin-bottom: 0;
	}

	.banner h3 {
		margin-bottom: 8px;
	}

	.banner p {
		margin: 0;
	}

	.equipe {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 16px;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	}

	.equipe li {
		background: #fff;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 22px 18px;
		text-align: center;
		margin: 0;
		box-shadow: var(--shadow);
	}

	.equipe__ini {
		display: grid;
		place-items: center;
		width: 46px;
		height: 46px;
		margin: 0 auto 12px;
		border-radius: 50%;
		background: var(--green-100);
		color: var(--green-700);
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 1.15rem;
	}

	.equipe strong {
		display: block;
		font-family: var(--font-display);
		color: var(--green-900);
		font-size: 1rem;
	}

	.equipe small {
		color: var(--muted);
		font-size: 0.8rem;
	}
</style>
