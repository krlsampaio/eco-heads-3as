import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Todas as rotas são pré-renderizadas; o 404.html cobre URLs desconhecidas
		// (a Vercel e o GitHub Pages o servem com status 404).
		adapter: adapter({ fallback: '404.html', strict: true })
	}
};

export default config;
