<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { site } from '$lib/data/site.js';

	const assuntos = [
		'Dúvida sobre o projeto',
		'Sugestão',
		'Quero apoiar o projeto',
		'Proposta de parceria',
		'Imprensa / trabalho escolar',
		'Outro assunto'
	];

	let nome = $state('');
	let email = $state('');
	let assunto = $state(assuntos[0]);
	let mensagem = $state('');
	let enviado = $state(false);

	const valido = $derived(
		nome.trim().length > 1 && /\S+@\S+\.\S+/.test(email) && mensagem.trim().length > 4
	);

	function enviar(evento) {
		evento.preventDefault();
		if (!valido) return;

		const corpo = [
			`Nome: ${nome}`,
			`E-mail: ${email}`,
			`Assunto: ${assunto}`,
			'',
			mensagem
		].join('\n');

		const href = `mailto:${site.email}?subject=${encodeURIComponent(
			`[EcoHeads 3´AS] ${assunto}`
		)}&body=${encodeURIComponent(corpo)}`;

		window.location.href = href;
		enviado = true;
	}
</script>

<svelte:head>
	<title>Contato — EcoHeads 3´AS</title>
	<meta
		name="description"
		content="Envie dúvidas, sugestões ou propostas de apoio e parceria para a equipe do projeto EcoHeads 3´AS."
	/>
</svelte:head>

<PageHero
	eyebrow="Contato"
	title="Fale com a equipe do EcoHeads 3´AS"
	text="Use o formulário para enviar dúvidas, sugestões ou propostas de apoio ao projeto. Respondemos assim que possível."
/>

<section id="formulario" class="section">
	<div class="container contato">
		<form class="form card" onsubmit={enviar} novalidate>
			<h2>Formulário</h2>

			<div class="campo">
				<label for="nome">Nome <span aria-hidden="true">*</span></label>
				<input id="nome" name="nome" type="text" bind:value={nome} required autocomplete="name" />
			</div>

			<div class="campo">
				<label for="email">E-mail <span aria-hidden="true">*</span></label>
				<input
					id="email"
					name="email"
					type="email"
					bind:value={email}
					required
					autocomplete="email"
				/>
			</div>

			<div class="campo">
				<label for="assunto">Assunto</label>
				<select id="assunto" name="assunto" bind:value={assunto}>
					{#each assuntos as item (item)}
						<option value={item}>{item}</option>
					{/each}
				</select>
			</div>

			<div class="campo">
				<label for="mensagem">Mensagem <span aria-hidden="true">*</span></label>
				<textarea id="mensagem" name="mensagem" rows="6" bind:value={mensagem} required></textarea>
			</div>

			<button class="btn btn--primary" type="submit" disabled={!valido}>
				<Icon name="mail" /> Enviar mensagem
			</button>

			<p class="form__nota" role="status">
				{#if enviado}
					Abrimos seu programa de e-mail com a mensagem pronta. Se nada aconteceu, escreva
					diretamente para <a href="mailto:{site.email}">{site.email}</a>.
				{:else}
					Os campos marcados com <span aria-hidden="true">*</span> são obrigatórios. O envio abre seu
					programa de e-mail com a mensagem preenchida.
				{/if}
			</p>
		</form>

		<aside class="lado">
			<div class="card">
				<div class="card__icon"><Icon name="mail" /></div>
				<h3>E-mail direto</h3>
				<p>Prefere escrever por conta própria?</p>
				<a class="lado__mail" href="mailto:{site.email}">{site.email}</a>
			</div>

			<div class="card">
				<div class="card__icon"><Icon name="people" /></div>
				<h3>Quem responde</h3>
				<p>
					A equipe do projeto: Ana Júlia, Nayara, Grazielli, Gustavo e Otávio (2MMD06) e Bruno
					(2TI02).
				</p>
			</div>

			<div class="card card--warn">
				<div class="card__icon card__icon--warn"><Icon name="alert" /></div>
				<h3>Importante</h3>
				<p>{site.status}</p>
			</div>
		</aside>
	</div>
</section>

<section class="section section--soft section--tight">
	<div class="container">
		<div class="section-head section-head--center">
			<span class="eyebrow">Antes de escrever</span>
			<h2>Perguntas frequentes</h2>
		</div>

		<div class="faq">
			<details>
				<summary>Já é possível comprar o EcoHeads 3´AS?</summary>
				<p>
					Ainda não. O projeto está em fase de protótipo e pesquisa. O que existe hoje é o protótipo
					digital, a estimativa de custos e o levantamento de materiais e tecnologias.
				</p>
			</details>
			<details>
				<summary>Quanto o aparelho vai custar?</summary>
				<p>
					A estimativa de produção é de R$ 70 a R$ 130 por unidade. Para o público-alvo, o preço
					projetado é de R$ 80 a R$ 200 — ou R$ 30 a R$ 80 com subsídio parcial. Também estudamos
					caminhos para oferta gratuita.
				</p>
			</details>
			<details>
				<summary>Como posso doar eletrônicos usados?</summary>
				<p>
					Por enquanto, indicamos os pontos de entrega voluntária, assistências autorizadas e
					cooperativas especializadas da sua cidade. O projeto pretende criar seu próprio sistema de
					logística reversa, com pontos de coleta próprios.
				</p>
			</details>
			<details>
				<summary>O aparelho substitui o acompanhamento com fonoaudiólogo?</summary>
				<p>
					Não. Qualquer aparelho auditivo exige avaliação e ajuste profissional, além de um período
					de adaptação. O EcoHeads 3´AS é uma alternativa de baixo custo, não uma substituição do
					atendimento em saúde.
				</p>
			</details>
		</div>
	</div>
</section>

<style>
	.contato {
		display: grid;
		gap: 28px;
		align-items: start;
	}

	@media (min-width: 940px) {
		.contato {
			grid-template-columns: 1.35fr 0.65fr;
			gap: 36px;
		}
	}

	.form {
		padding: clamp(26px, 3.4vw, 36px);
	}

	.form h2 {
		margin-bottom: 22px;
	}

	.campo {
		margin-bottom: 18px;
	}

	label {
		display: block;
		font-family: var(--font-display);
		font-size: 0.87rem;
		font-weight: 500;
		color: var(--green-900);
		margin-bottom: 7px;
	}

	label span {
		color: var(--green-600);
	}

	input,
	select,
	textarea {
		width: 100%;
		font-family: var(--font-body);
		font-size: 0.97rem;
		color: var(--ink);
		background: var(--cream);
		border: 1.5px solid var(--line);
		border-radius: 12px;
		padding: 12px 14px;
		transition: border-color 0.15s ease, background 0.15s ease;
	}

	textarea {
		resize: vertical;
		min-height: 130px;
	}

	input:focus,
	select:focus,
	textarea:focus {
		border-color: var(--green-500);
		background: #fff;
		outline: none;
	}

	.btn[disabled] {
		opacity: 0.5;
		cursor: not-allowed;
		transform: none;
	}

	.btn :global(svg) {
		width: 18px;
		height: 18px;
	}

	.form__nota {
		margin: 16px 0 0;
		font-size: 0.85rem;
		color: var(--muted);
	}

	.lado {
		display: grid;
		gap: 18px;
	}

	.lado .card {
		padding: 24px 22px;
	}

	.lado h3 {
		font-size: 1.05rem;
	}

	.lado p {
		font-size: 0.92rem;
	}

	.lado__mail {
		font-family: var(--font-display);
		font-weight: 500;
		word-break: break-all;
	}

	.card--warn {
		background: #fffaf0;
		border-color: #f2e2c2;
	}

	.card__icon--warn {
		background: #fdf1d8;
		color: #a2701a;
	}

	.faq {
		max-width: 800px;
		margin: 0 auto;
		display: grid;
		gap: 12px;
	}

	details {
		background: #fff;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 4px 22px;
		box-shadow: var(--shadow);
	}

	summary {
		cursor: pointer;
		padding: 16px 0;
		font-family: var(--font-display);
		font-weight: 500;
		color: var(--green-900);
		list-style: none;
		display: flex;
		justify-content: space-between;
		gap: 16px;
		align-items: center;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	summary::after {
		content: '+';
		font-size: 1.4rem;
		line-height: 1;
		color: var(--green-600);
		flex-shrink: 0;
	}

	details[open] summary::after {
		content: '–';
	}

	details p {
		margin: 0 0 18px;
		font-size: 0.94rem;
	}
</style>
