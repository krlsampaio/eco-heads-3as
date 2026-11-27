/**
 * Roteiro da apresentação na banca, na ordem dos slides originais.
 * Cada etapa leva a uma página/seção do site. `slides` = slides equivalentes no PDF.
 */

/** @type {Record<string, { cor: string }>} */
export const apresentadores = {
	'Ana Júlia': { cor: '#1b7a4e' },
	Grazi: { cor: '#2f7fb5' },
	Nayara: { cor: '#9a4fb3' },
	Otávio: { cor: '#c2621b' },
	Bruno: { cor: '#b23a5a' },
	Sampaio: { cor: '#0f3d24' },
	Todos: { cor: '#3f8534' }
};

/**
 * @typedef {{ quem: string, slides: string, titulo: string, href: string, fala: string }} Etapa
 * @type {Etapa[]}
 */
export const etapas = [
	{
		quem: 'Ana Júlia',
		slides: '1',
		titulo: 'Abertura: o que é o EcoHeads 3´AS',
		href: '/',
		fala: 'Apresentar o nome do projeto, a ideia em uma frase (aparelho auditivo acessível feito com materiais recicláveis) e a equipe.'
	},
	{
		quem: 'Ana Júlia',
		slides: '2',
		titulo: 'Deficiência x hipersensibilidade auditiva',
		href: '/dados#deficiencia',
		fala: 'Explicar a diferença: deficiência é perda parcial ou total da audição; hipersensibilidade é incômodo com sons em volume normal.'
	},
	{
		quem: 'Ana Júlia',
		slides: '3 e 4',
		titulo: 'Dados: falta de acesso a aparelhos',
		href: '/dados#acesso',
		fala: '10,7 milhões de brasileiros com deficiência auditiva, 2,3 milhões severa, 87% não usam aparelho. Renda média de R$ 1.000 e só 37% empregados.'
	},
	{
		quem: 'Grazi',
		slides: '5',
		titulo: 'O problema do lixo eletrônico',
		href: '/lixo-eletronico#problema',
		fala: 'O que é lixo eletrônico e por que o descarte incorreto contamina solo, água e ar com chumbo, mercúrio e cádmio.'
	},
	{
		quem: 'Grazi',
		slides: '6',
		titulo: 'Quanto custa um aparelho auditivo',
		href: '/dados#custo',
		fala: 'De R$ 4.000 a R$ 25.000, fora exames e consultas. Melhora muito a vida, mas é um investimento alto.'
	},
	{
		quem: 'Grazi',
		slides: '7',
		titulo: 'Barreiras de acesso',
		href: '/dados#barreiras',
		fala: 'Dificuldade financeira, expectativas irreais (o aparelho exige adaptação) e outros problemas de saúde.'
	},
	{
		quem: 'Grazi',
		slides: '8',
		titulo: 'Atendimento pelo SUS',
		href: '/dados#sus',
		fala: 'O SUS oferece aparelhos de graça, com exames e acompanhamento, mas tem filas e demora em alguns lugares.'
	},
	{
		quem: 'Nayara',
		slides: '9',
		titulo: 'Por que os aparelhos são caros',
		href: '/dados#caros',
		fala: 'O processador de sinal digital é o “cérebro” e o maior custo. Somam-se software, Bluetooth, microfones direcionais e receptores de precisão.'
	},
	{
		quem: 'Nayara',
		slides: '10',
		titulo: 'Materiais do aparelho',
		href: '/aparelho#materiais',
		fala: 'Plástico reciclado (ABS/PET), bioplástico PLA, metais recicláveis e componentes reaproveitados. Espaço para contar a pesquisa sobre a criação do aparelho.'
	},
	{
		quem: 'Otávio',
		slides: '11',
		titulo: 'Tecnologias de baixo custo',
		href: '/aparelho#tecnologias',
		fala: 'ESP32 ou Arduino Nano, microfones MEMS, aplicativo open source e Bluetooth de baixo consumo para ajustes pelo celular.'
	},
	{
		quem: 'Otávio',
		slides: '12',
		titulo: 'Objetivo: a solução',
		href: '/projeto#solucao',
		fala: 'Um aparelho adaptável e sustentável para quem tem baixa renda, que também enfrenta o problema do lixo eletrônico.'
	},
	{
		quem: 'Otávio',
		slides: '13',
		titulo: 'Público-alvo',
		href: '/projeto#publico',
		fala: 'Pessoas com hipersensibilidade ou deficiência auditiva leve a moderada, de crianças a idosos, em vulnerabilidade econômica, e o público preocupado com o meio ambiente.'
	},
	{
		quem: 'Ana Júlia',
		slides: '14',
		titulo: 'Descarte correto do lixo eletrônico',
		href: '/lixo-eletronico#descarte',
		fala: 'O descarte correto é obrigatório por lei. Mostrar como fazer e quem já faz esse trabalho (Instituto LOOP, GreenEletron, Ecobraz, Reciclotech).'
	},
	{
		quem: 'Ana Júlia',
		slides: '14',
		titulo: 'O sistema de coleta do EcoHeads',
		href: '/lixo-eletronico#coleta',
		fala: 'Nossa logística reversa: pontos de coleta, parcerias e incentivo para devolver aparelhos usados.'
	},
	{
		quem: 'Ana Júlia',
		slides: '15 e 16',
		titulo: 'Protótipo digital e partes do aparelho',
		href: '/aparelho#design',
		fala: 'Feito no Illustrator (logotipo) e Photoshop (protótipo). Apontar as partes: suporte, microfone, amplificador, botão, receptor e bateria.'
	},
	{
		quem: 'Ana Júlia',
		slides: '17',
		titulo: 'Custo de produção do protótipo',
		href: '/custo-beneficio#producao',
		fala: 'Entre R$ 70 e R$ 130 por unidade, sem subsídio. Um par custa o dobro.'
	},
	{
		quem: 'Ana Júlia',
		slides: '18',
		titulo: 'Preço para o público-alvo',
		href: '/custo-beneficio#publico-alvo',
		fala: 'Entre R$ 80 e R$ 200: um pouco acima do custo para reinvestir, e ainda assim muito abaixo dos R$ 4.000 de um aparelho comum.'
	},
	{
		quem: 'Bruno',
		slides: '19',
		titulo: 'Como oferecer de graça',
		href: '/custo-beneficio#gratuito',
		fala: 'SUS, parcerias com ONGs, patrocínio de empresas, créditos por reciclagem, editais públicos e campanhas. Subsidiado, sairia de R$ 30 a R$ 80.'
	},
	{
		quem: 'Bruno',
		slides: 'novo',
		titulo: 'ONGs de acessibilidade auditiva',
		href: '/parceiros#ongs',
		fala: 'Apresentar FENEIS, Instituto Santa Teresinha e INES: o que cada uma faz e como poderia ajudar o projeto.'
	},
	{
		quem: 'Bruno',
		slides: 'novo',
		titulo: 'Iniciativas de logística reversa',
		href: '/parceiros#logistica',
		fala: 'Quem poderia receber e reciclar os aparelhos devolvidos, e como apoiar o EcoHeads.'
	},
	{
		quem: 'Sampaio',
		slides: 'novo',
		titulo: 'O site do projeto',
		href: '/projeto#site',
		fala: 'Explicar que esta apresentação é o próprio site: objetivos, funcionalidades planejadas e que ele ainda está em desenvolvimento.'
	},
	{
		quem: 'Sampaio',
		slides: 'novo',
		titulo: 'Contato e próximos passos',
		href: '/contato',
		fala: 'Mostrar o formulário e as perguntas frequentes, e convidar a banca a abrir o site no celular.'
	},
	{
		quem: 'Todos',
		slides: '20',
		titulo: 'Equipe e agradecimento',
		href: '/projeto#equipe',
		fala: 'Agradecer, citar a professora orientadora Luana Neri Thomaz da Silva e abrir para perguntas.'
	}
];
