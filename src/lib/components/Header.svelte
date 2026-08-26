<script>
	import { page } from '$app/state';
	import { asset, resolve } from '$app/paths';
	import { navPrincipal, navConteudo, site } from '$lib/data/site.js';
	import Icon from './Icon.svelte';

	let menuAberto = $state(false);
	let dropAberto = $state(false);
	let scrollY = $state(0);

	/** @type {HTMLElement | undefined} */
	let grupoConteudo = $state();

	const rotaAtual = $derived(page.route.id);
	const conteudoAtivo = $derived(navConteudo.some((item) => item.href === rotaAtual));

	const desktop = () =>
		typeof window !== 'undefined' && window.matchMedia('(min-width: 1041px)').matches;

	function fecharTudo() {
		menuAberto = false;
		dropAberto = false;
	}

	/** @param {MouseEvent} evento */
	function cliqueForaDoDrop(evento) {
		if (!dropAberto) return;
		if (grupoConteudo && !grupoConteudo.contains(/** @type {Node} */ (evento.target))) {
			dropAberto = false;
		}
	}

	/** @param {KeyboardEvent} evento */
	function teclaEscape(evento) {
		if (evento.key === 'Escape') fecharTudo();
	}
</script>

<svelte:window bind:scrollY onclick={cliqueForaDoDrop} onkeydown={teclaEscape} />

<div class="utilbar">
	<div class="container utilbar__inner">
		<p>{site.tagline} — projeto estudantil de inclusão auditiva e sustentabilidade</p>
		<a href="mailto:{site.email}">
			<Icon name="mail" />
			{site.email}
		</a>
	</div>
</div>

<header class="hdr" class:hdr--stuck={scrollY > 4}>
	<div class="container hdr__inner">
		<a class="brand" href={resolve('/')} onclick={fecharTudo}>
			<img src={asset('/images/logo.png')} alt="" width="46" height="46" />
			<span class="brand__nome">EcoHeads&nbsp;3´AS</span>
		</a>

		<nav class="nav" aria-label="Navegação principal">
			{#each navPrincipal as item (item.href)}
				<a
					href={resolve(item.href)}
					class="nav__link"
					class:nav__link--ativo={rotaAtual === item.href}
					aria-current={rotaAtual === item.href ? 'page' : undefined}
				>
					{item.label}
				</a>
			{/each}

			<div
				class="grupo"
				bind:this={grupoConteudo}
				onmouseenter={() => desktop() && (dropAberto = true)}
				onmouseleave={() => desktop() && (dropAberto = false)}
				role="presentation"
			>
				<button
					type="button"
					class="nav__link nav__link--btn"
					class:nav__link--ativo={conteudoAtivo}
					aria-expanded={dropAberto}
					aria-controls="menu-conteudo"
					onclick={() => (dropAberto = !dropAberto)}
				>
					Conteúdo
					<svg class="chevron" class:chevron--on={dropAberto} viewBox="0 0 12 12" aria-hidden="true">
						<path
							d="M2.5 4.5L6 8l3.5-3.5"
							fill="none"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>

				<div id="menu-conteudo" class="drop" class:drop--on={dropAberto}>
					{#each navConteudo as item (item.href)}
						<a
							href={resolve(item.href)}
							class="drop__item"
							class:drop__item--ativo={rotaAtual === item.href}
							aria-current={rotaAtual === item.href ? 'page' : undefined}
							onclick={fecharTudo}
						>
							<span class="drop__ico"><Icon name={item.icon} /></span>
							<span class="drop__txt">
								<strong>{item.label}</strong>
								<small>{item.desc}</small>
							</span>
						</a>
					{/each}
				</div>
			</div>
		</nav>

		<a class="cta" href={resolve('/contato')} onclick={fecharTudo}>Fale com a equipe</a>

		<button
			class="burger"
			type="button"
			aria-expanded={menuAberto}
			aria-controls="menu-mobile"
			onclick={() => (menuAberto = !menuAberto)}
		>
			<span class="sr-only">{menuAberto ? 'Fechar menu' : 'Abrir menu'}</span>
			<span class="burger__bar" class:on={menuAberto}></span>
			<span class="burger__bar" class:on={menuAberto}></span>
			<span class="burger__bar" class:on={menuAberto}></span>
		</button>
	</div>

	<div id="menu-mobile" class="painel" class:painel--on={menuAberto}>
		<div class="container">
			<nav aria-label="Navegação principal (mobile)">
				{#each navPrincipal as item (item.href)}
					<a
						href={resolve(item.href)}
						class="painel__link"
						class:painel__link--ativo={rotaAtual === item.href}
						aria-current={rotaAtual === item.href ? 'page' : undefined}
						onclick={fecharTudo}
					>
						{item.label}
					</a>
				{/each}

				<span class="painel__grupo">Conteúdo</span>
				{#each navConteudo as item (item.href)}
					<a
						href={resolve(item.href)}
						class="painel__link painel__link--filho"
						class:painel__link--ativo={rotaAtual === item.href}
						aria-current={rotaAtual === item.href ? 'page' : undefined}
						onclick={fecharTudo}
					>
						<span class="drop__ico"><Icon name={item.icon} /></span>
						{item.label}
					</a>
				{/each}

				<a class="cta cta--bloco" href={resolve('/contato')} onclick={fecharTudo}>
					Fale com a equipe
				</a>
			</nav>
		</div>
	</div>
</header>

<style>
	/* ---------- barra de utilidades ---------- */

	.utilbar {
		background: var(--green-900);
		color: rgba(255, 255, 255, 0.62);
		font-size: 0.78rem;
	}

	.utilbar__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		min-height: 36px;
	}

	.utilbar p {
		margin: 0;
		letter-spacing: 0.01em;
	}

	.utilbar a {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		color: rgba(255, 255, 255, 0.78);
		text-decoration: none;
		white-space: nowrap;
	}

	.utilbar a:hover {
		color: #fff;
		text-decoration: none;
	}

	.utilbar :global(svg) {
		width: 14px;
		height: 14px;
		opacity: 0.75;
	}

	@media (max-width: 760px) {
		.utilbar p {
			display: none;
		}

		.utilbar__inner {
			justify-content: center;
		}
	}

	/* ---------- barra principal ---------- */

	.hdr {
		position: sticky;
		top: 0;
		z-index: 100;
		background: rgba(255, 255, 255, 0.92);
		backdrop-filter: saturate(1.5) blur(12px);
		border-bottom: 1px solid var(--line);
		transition:
			box-shadow 0.2s ease,
			border-color 0.2s ease;
	}

	.hdr--stuck {
		border-bottom-color: transparent;
		box-shadow: 0 1px 0 rgba(20, 87, 47, 0.06), 0 10px 30px rgba(20, 87, 47, 0.07);
	}

	.hdr__inner {
		display: flex;
		align-items: center;
		gap: 28px;
		min-height: 72px;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 11px;
		text-decoration: none;
		flex-shrink: 0;
	}

	.brand:hover {
		text-decoration: none;
	}

	.brand img {
		width: 42px;
		height: 42px;
	}

	.brand__nome {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 1.1rem;
		letter-spacing: -0.015em;
		color: var(--green-900);
	}

	/* ---------- links ---------- */

	.nav {
		display: flex;
		align-items: center;
		gap: 4px;
		margin-left: auto;
	}

	.nav__link {
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-family: var(--font-display);
		font-size: 0.92rem;
		font-weight: 500;
		color: var(--body);
		padding: 24px 14px;
		text-decoration: none;
		background: none;
		border: none;
		cursor: pointer;
		transition: color 0.16s ease;
	}

	.nav__link::after {
		content: '';
		position: absolute;
		left: 14px;
		right: 14px;
		bottom: 20px;
		height: 2px;
		border-radius: 2px;
		background: var(--green-600);
		transform: scaleX(0);
		transform-origin: center;
		transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.nav__link:hover,
	.nav__link--ativo {
		color: var(--green-800);
		text-decoration: none;
	}

	.nav__link:hover::after,
	.nav__link--ativo::after {
		transform: scaleX(1);
	}

	.chevron {
		width: 12px;
		height: 12px;
		transition: transform 0.2s ease;
	}

	.chevron--on {
		transform: rotate(180deg);
	}

	/* ---------- dropdown ---------- */

	.grupo {
		position: relative;
	}

	.drop {
		position: absolute;
		top: calc(100% - 12px);
		right: -8px;
		width: 340px;
		background: #fff;
		border: 1px solid var(--line);
		border-radius: 16px;
		box-shadow: 0 24px 54px rgba(20, 87, 47, 0.16);
		padding: 8px;
		opacity: 0;
		visibility: hidden;
		transform: translateY(-8px);
		transition:
			opacity 0.18s ease,
			transform 0.18s ease,
			visibility 0.18s;
	}

	.drop--on {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}

	.drop__item {
		display: flex;
		align-items: flex-start;
		gap: 13px;
		padding: 11px 12px;
		border-radius: 11px;
		text-decoration: none;
		transition: background 0.15s ease;
	}

	.drop__item:hover {
		background: var(--green-50);
		text-decoration: none;
	}

	.drop__item--ativo {
		background: var(--green-50);
	}

	.drop__ico {
		flex-shrink: 0;
		width: 34px;
		height: 34px;
		border-radius: 10px;
		display: grid;
		place-items: center;
		background: var(--green-100);
		color: var(--green-700);
	}

	.drop__ico :global(svg) {
		width: 17px;
		height: 17px;
	}

	.drop__txt {
		display: flex;
		flex-direction: column;
		line-height: 1.35;
	}

	.drop__txt strong {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: 0.93rem;
		color: var(--green-900);
	}

	.drop__txt small {
		font-size: 0.79rem;
		color: var(--muted);
	}

	/* ---------- CTA ---------- */

	.cta {
		flex-shrink: 0;
		font-family: var(--font-display);
		font-weight: 500;
		font-size: 0.88rem;
		color: #fff;
		background: var(--green-700);
		padding: 11px 20px;
		border-radius: 999px;
		text-decoration: none;
		transition:
			background 0.16s ease,
			box-shadow 0.16s ease,
			transform 0.16s ease;
	}

	.cta:hover {
		background: var(--green-800);
		text-decoration: none;
		transform: translateY(-1px);
		box-shadow: 0 8px 20px rgba(27, 122, 78, 0.26);
	}

	/* ---------- burger ---------- */

	.burger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 44px;
		height: 44px;
		margin-left: auto;
		border: 1px solid var(--line);
		border-radius: 12px;
		background: #fff;
		cursor: pointer;
	}

	.burger__bar {
		display: block;
		width: 19px;
		height: 1.8px;
		border-radius: 2px;
		margin: 0 auto;
		background: var(--green-800);
		transition:
			transform 0.22s ease,
			opacity 0.22s ease;
	}

	.burger__bar.on:nth-child(2) {
		transform: translateY(6.8px) rotate(45deg);
	}

	.burger__bar.on:nth-child(3) {
		opacity: 0;
	}

	.burger__bar.on:nth-child(4) {
		transform: translateY(-6.8px) rotate(-45deg);
	}

	/* ---------- painel mobile ---------- */

	.painel {
		display: none;
		border-top: 1px solid var(--line);
		background: #fff;
	}

	.painel nav {
		display: flex;
		flex-direction: column;
		padding: 12px 0 22px;
	}

	.painel__link {
		display: flex;
		align-items: center;
		gap: 12px;
		font-family: var(--font-display);
		font-weight: 500;
		font-size: 1rem;
		color: var(--body);
		padding: 13px 12px;
		border-radius: 12px;
		text-decoration: none;
	}

	.painel__link:hover,
	.painel__link--ativo {
		background: var(--green-50);
		color: var(--green-800);
		text-decoration: none;
	}

	.painel__link--filho {
		font-size: 0.95rem;
	}

	.painel__grupo {
		font-family: var(--font-display);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--green-600);
		padding: 18px 12px 8px;
		margin-top: 6px;
		border-top: 1px solid var(--line);
	}

	.cta--bloco {
		margin: 20px 12px 0;
		text-align: center;
		padding: 14px 20px;
	}

	@media (max-width: 1040px) {
		.nav,
		.hdr__inner > .cta {
			display: none;
		}

		.burger {
			display: flex;
		}

		.painel {
			display: block;
			max-height: 0;
			overflow: hidden;
			transition: max-height 0.28s ease;
		}

		.painel--on {
			max-height: 640px;
		}
	}

	@media (max-width: 420px) {
		.brand__nome {
			font-size: 1rem;
		}
	}
</style>
