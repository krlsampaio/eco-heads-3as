<script>
	import { asset, resolve } from '$app/paths';
	import { nav, site } from '$lib/data/site.js';
	import Icon from './Icon.svelte';
</script>

<footer class="ft">
	<div class="container">
		<div class="ft__top">
			<div class="ft__brand">
				<img src={asset('/images/logo.png')} alt="Logotipo EcoHeads 3´AS" width="66" height="66" />
				<h3>EcoHeads 3´AS</h3>
				<p>{site.description}</p>
				<a class="ft__mail" href="mailto:{site.email}">
					<Icon name="mail" />
					{site.email}
				</a>
			</div>

			<div class="ft__cols">
				<div>
					<h4>Navegação</h4>
					<ul>
						{#each nav.slice(0, 4) as item (item.href)}
							<li><a href={resolve(item.href)}>{item.label}</a></li>
						{/each}
					</ul>
				</div>
				<div>
					<h4>Conteúdo</h4>
					<ul>
						{#each nav.slice(4) as item (item.href)}
							<li><a href={resolve(item.href)}>{item.label}</a></li>
						{/each}
					</ul>
				</div>
				<div>
					<h4>O que defendemos</h4>
					<ul>
						<li>Acesso a aparelhos auditivos</li>
						<li>Descarte correto de eletrônicos</li>
						<li>Economia circular</li>
						<li>Inclusão social</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="ft__note">
			<strong>Importante!</strong>
			{site.status}
		</div>

		<div class="ft__bottom">
			<p>© {new Date().getFullYear()} EcoHeads 3´AS — Projeto estudantil.</p>
			<p>Ana Júlia, Nayara, Grazielli, Gustavo e Otávio (2MMD06) · Bruno (2TI02)</p>
		</div>
	</div>
</footer>

<style>
	.ft {
		background: var(--green-900);
		color: rgba(255, 255, 255, 0.72);
		padding: clamp(48px, 6vw, 72px) 0 32px;
		font-size: 0.92rem;
	}

	.ft__top {
		display: grid;
		gap: 40px;
	}

	@media (min-width: 900px) {
		.ft__top {
			grid-template-columns: 1.1fr 1.6fr;
			gap: 56px;
		}
	}

	.ft__brand img {
		background: #fff;
		border-radius: 50%;
		padding: 4px;
		margin-bottom: 14px;
	}

	.ft__brand h3 {
		color: #fff;
		margin-bottom: 8px;
	}

	.ft__brand p {
		max-width: 40ch;
	}

	.ft__mail {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: var(--green-200);
		font-weight: 500;
	}

	.ft__mail :global(svg) {
		width: 18px;
		height: 18px;
	}

	.ft__cols {
		display: grid;
		gap: 28px;
	}

	@media (min-width: 640px) {
		.ft__cols {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	h4 {
		color: #fff;
		font-size: 0.82rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		margin-bottom: 14px;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		margin-bottom: 9px;
	}

	.ft a {
		color: rgba(255, 255, 255, 0.72);
	}

	.ft a:hover {
		color: #fff;
	}

	.ft__note {
		margin-top: 44px;
		padding: 18px 22px;
		border-radius: 14px;
		background: rgba(255, 255, 255, 0.07);
		border: 1px solid rgba(255, 255, 255, 0.13);
		font-size: 0.86rem;
		line-height: 1.6;
	}

	.ft__note strong {
		color: var(--green-200);
	}

	.ft__bottom {
		margin-top: 28px;
		padding-top: 20px;
		border-top: 1px solid rgba(255, 255, 255, 0.13);
		display: flex;
		flex-wrap: wrap;
		gap: 6px 24px;
		justify-content: space-between;
		font-size: 0.82rem;
	}

	.ft__bottom p {
		margin: 0;
	}
</style>
