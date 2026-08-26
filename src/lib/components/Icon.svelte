<script>
	/**
	 * Ícones de traço (24x24), herdam currentColor.
	 * @type {{ name: string }}
	 */
	let { name } = $props();

	const paths = {
		ear: 'M6 8a6 6 0 1 1 12 0c0 2.5-1.5 3.6-2.8 4.6-1.2.9-2.2 1.7-2.2 3.4a2.5 2.5 0 0 1-5 0M9 8a3 3 0 0 1 6 0',
		leaf: 'M4 20c0-8 5-13 16-14 0 9-4 14-11 14H4zm2-2c3-4 6-6 10-8',
		recycle:
			'M7 19H4.5a2 2 0 0 1-1.7-3l1.9-3.2M12 4.5l1.6 2.7M12 4.5l-1.6 2.7M12 4.5a2 2 0 0 0-3.4.1L6.7 7.8M17 19h2.5a2 2 0 0 0 1.7-3l-1.6-2.8M9 19h8M9 19l2-2M9 19l2 2',
		wave: 'M2 12h2.5l2-6 3 14 3-18 3 14 2-4H21',
		money: 'M12 3v18M16.5 7.5c0-1.7-2-2.5-4.5-2.5S7.5 5.9 7.5 7.8c0 4.2 9 2.4 9 6.5 0 1.9-2 2.7-4.5 2.7s-4.5-.9-4.5-2.6',
		people:
			'M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20M9 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M22 20v-1.5a4 4 0 0 0-3-3.9M16 3.6a4 4 0 0 1 0 7.8',
		chip: 'M8 8h8v8H8zM4 9h4M4 15h4M16 9h4M16 15h4M9 4v4M15 4v4M9 16v4M15 16v4',
		shield: 'M12 3l8 3v6c0 5-3.4 8.3-8 9-4.6-.7-8-4-8-9V6l8-3zM9 12l2 2 4-4',
		chart: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
		spark: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z',
		heart: 'M12 20s-7-4.4-7-9.3A4.2 4.2 0 0 1 12 8a4.2 4.2 0 0 1 7 2.7C19 15.6 12 20 12 20z',
		mail: 'M3 6h18v12H3zM3 6l9 7 9-7',
		bolt: 'M13 2L4 14h7l-1 8 9-12h-7l1-8z',
		check: 'M4 12.5l5 5L20 6.5',
		alert: 'M12 3l9.5 17H2.5L12 3zM12 9v5M12 17.5v.5',
		bulb: 'M9 20h6M10 23h4M12 2a6.5 6.5 0 0 1 4 11.6c-.7.6-1 1.3-1 2.1v.3H9v-.3c0-.8-.3-1.5-1-2.1A6.5 6.5 0 0 1 12 2z',
		trash: 'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6',
		hospital: 'M4 21V8l8-5 8 5v13H4zM10 21v-5h4v5M12 8v4M10 10h4'
	};
</script>

<svg
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.7"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	<path d={paths[name] ?? paths.leaf} />
</svg>
