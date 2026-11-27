import { goto } from '$app/navigation';
import { resolve } from '$app/paths';
import { etapas } from '$lib/data/apresentacao.js';

const CHAVE = 'ecoheads-apresentacao';

/** Estado do modo apresentação (fica salvo na aba, sobrevive a recarregar a página). */
export const pres = $state({ ativo: false, i: 0 });

export function carregar() {
	try {
		const salvo = JSON.parse(sessionStorage.getItem(CHAVE) ?? 'null');
		if (salvo && typeof salvo.i === 'number') {
			pres.ativo = !!salvo.ativo;
			pres.i = Math.max(0, Math.min(etapas.length - 1, salvo.i));
		}
	} catch {
		/* sem armazenamento: segue sem salvar */
	}
}

function salvar() {
	try {
		sessionStorage.setItem(CHAVE, JSON.stringify({ ativo: pres.ativo, i: pres.i }));
	} catch {
		/* ignora */
	}
}

/** Destaca rapidamente a seção para a banca saber para onde olhar. */
/** @param {string} hash */
function destacar(hash) {
	if (!hash) return;
	setTimeout(() => {
		const el = document.getElementById(hash);
		if (!el) return;
		el.classList.remove('em-foco');
		void el.offsetWidth;
		el.classList.add('em-foco');
		setTimeout(() => el.classList.remove('em-foco'), 1800);
	}, 350);
}

/** @param {number} i */
export async function irPara(i) {
	pres.i = Math.max(0, Math.min(etapas.length - 1, i));
	pres.ativo = true;
	salvar();
	const [caminho, hash = ''] = etapas[pres.i].href.split('#');
	const destino = resolve(/** @type {any} */ (caminho)) + (hash ? `#${hash}` : '');
	const mesmaPagina = location.pathname === resolve(/** @type {any} */ (caminho));

	if (mesmaPagina) {
		const el = hash ? document.getElementById(hash) : null;
		const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (el) el.scrollIntoView({ behavior: suave ? 'smooth' : 'auto', block: 'start' });
		else window.scrollTo({ top: 0, behavior: suave ? 'smooth' : 'auto' });
		history.replaceState(history.state, '', destino);
	} else {
		await goto(destino);
	}
	destacar(hash);
}

export const proxima = () => irPara(pres.i + 1);
export const anterior = () => irPara(pres.i - 1);

export function sair() {
	pres.ativo = false;
	salvar();
}
