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

/** Posição real do elemento na página, ignorando o deslocamento das animações de entrada. */
/** @param {HTMLElement} el */
function topoAbsoluto(el) {
	let y = 0;
	/** @type {HTMLElement | null} */
	let n = el;
	while (n) {
		y += n.offsetTop;
		n = /** @type {HTMLElement | null} */ (n.offsetParent);
	}
	return y;
}

/**
 * Centraliza a parte apresentada no espaço livre entre o cabeçalho fixo e a barra
 * de apresentação. Se ela for mais alta que esse espaço, alinha pelo topo.
 * Mede o conteúdo (sem o espaçamento da seção) e, se `ate` vier, só até esse bloco.
 * @param {string} hash
 * @param {boolean} suave
 * @param {string} [ate]
 */
function centralizar(hash, suave, ate) {
	const el = hash ? document.getElementById(hash) : null;
	// 'instant' ignora o scroll-behavior: smooth do CSS ao abrir uma página nova
	/** @type {ScrollBehavior} */
	const behavior = suave ? 'smooth' : 'instant';
	if (!el) {
		window.scrollTo({ top: 0, behavior });
		return;
	}
	const cabecalho = /** @type {HTMLElement | null} */ (document.querySelector('.hdr'))?.offsetHeight ?? 72;
	const barra = (/** @type {HTMLElement | null} */ (document.querySelector('.pbar'))?.offsetHeight ?? 64) + 28;
	const livre = window.innerHeight - cabecalho - barra;
	const conteudo = /** @type {HTMLElement} */ (
		el.matches('section') ? (el.querySelector(':scope > .container') ?? el) : el
	);
	const fim = ate ? document.getElementById(ate) : null;
	const topo = topoAbsoluto(conteudo);
	const altura = fim ? topoAbsoluto(fim) + fim.offsetHeight - topo : conteudo.offsetHeight;
	const alvo =
		altura <= livre ? topo - cabecalho - (livre - altura) / 2 : topo - cabecalho - 12;
	window.scrollTo({ top: Math.max(0, alvo), behavior });
}

/** @param {number} i */
export async function irPara(i) {
	pres.i = Math.max(0, Math.min(etapas.length - 1, i));
	pres.ativo = true;
	salvar();
	const [caminho, hash = ''] = etapas[pres.i].href.split('#');
	const destino = resolve(/** @type {any} */ (caminho)) + (hash ? `#${hash}` : '');
	const mesmaPagina = location.pathname === resolve(/** @type {any} */ (caminho));

	const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (mesmaPagina) {
		history.replaceState(history.state, '', destino);
		centralizar(hash, suave, etapas[pres.i].ate);
	} else {
		await goto(destino, { noScroll: true });
		// espera a página nova desenhar antes de medir
		await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
		centralizar(hash, false, etapas[pres.i].ate);
	}
	destacar(hash);
}

export const proxima = () => irPara(pres.i + 1);
export const anterior = () => irPara(pres.i - 1);

export function sair() {
	pres.ativo = false;
	salvar();
}

/** Recentraliza a etapa atual (ex.: ao entrar em tela cheia ou girar o celular). */
export function recentralizar() {
	if (!pres.ativo) return;
	const hash = etapas[pres.i].href.split('#')[1] ?? '';
	if (location.hash.slice(1) !== hash) return;
	centralizar(hash, true, etapas[pres.i].ate);
}
