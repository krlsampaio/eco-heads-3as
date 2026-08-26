<script>
	/** @type {{ links: string[] }} */
	let { links } = $props();
</script>

<div class="sources">
	<h4>Fontes consultadas</h4>
	<ul>
		{#each links as link (link)}
			<li>
				<a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.sources {
		margin-top: 34px;
		padding: 20px 22px;
		border-radius: 14px;
		background: var(--green-50);
		border: 1px dashed var(--green-200);
	}

	h4 {
		font-family: var(--font-display);
		font-size: 0.76rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--green-700);
		margin: 0 0 10px;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin-bottom: 6px;
		font-size: 0.79rem;
		line-height: 1.5;
		word-break: break-word;
	}

	a {
		color: var(--muted);
		text-decoration: underline;
	}

	a:hover {
		color: var(--green-700);
	}
</style>
