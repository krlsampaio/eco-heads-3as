<script>
	import { asset, resolve } from '$app/paths';

	/** @type {{ eyebrow?: string, title: string, text?: string, children?: any }} */
	let { eyebrow = '', title, text = '', children } = $props();
</script>

<section class="phero">
	<img class="phero__leaf" src={asset('/images/folha.png')} alt="" aria-hidden="true" />
	<div class="container phero__inner">
		{#if eyebrow}<span class="eyebrow">{eyebrow}</span>{/if}
		<h1>{title}</h1>
		{#if text}<p class="lead">{text}</p>{/if}
		{#if children}{@render children()}{/if}
	</div>
</section>

<style>
	.phero {
		position: relative;
		background: linear-gradient(160deg, var(--green-50), #fff 70%);
		border-bottom: 1px solid var(--line);
		padding: clamp(46px, 6vw, 78px) 0 clamp(40px, 5vw, 62px);
		overflow: hidden;
	}

	.phero__inner {
		position: relative;
		max-width: 800px;
	}

	.phero h1 {
		margin-bottom: 16px;
	}

	.phero .lead {
		margin-bottom: 0;
		max-width: 62ch;
	}

	.phero__leaf {
		position: absolute;
		right: -60px;
		top: -40px;
		width: 300px;
		opacity: 0.16;
		transform: rotate(24deg);
		pointer-events: none;
	}

	@media (max-width: 760px) {
		.phero__leaf {
			width: 190px;
			right: -50px;
		}
	}
</style>
