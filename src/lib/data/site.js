export const site = {
	name: 'EcoHeads 3´AS',
	tagline: 'Aparelho Auditivo Adaptável',
	description:
		'Um aparelho auditivo adaptável, acessível e sustentável, feito com materiais recicláveis e tecnologia de baixo custo.',
	email: 'contato@ecoheads3as.com.br',
	status:
		'O site encontra-se em fase de planejamento e desenvolvimento. As informações apresentadas representam a proposta inicial da plataforma e poderão sofrer alterações durante o desenvolvimento do projeto.'
};

/** @type {{ href: import('$app/types').RouteId, label: string }[]} */
export const nav = [
	{ href: '/', label: 'Início' },
	{ href: '/projeto', label: 'O Projeto' },
	{ href: '/aparelho', label: 'O Aparelho' },
	{ href: '/dados', label: 'Dados e Pesquisas' },
	{ href: '/lixo-eletronico', label: 'Lixo Eletrônico' },
	{ href: '/custo-beneficio', label: 'Custo-Benefício' },
	{ href: '/parceiros', label: 'Parceiros' },
	{ href: '/contato', label: 'Contato' }
];

/** Itens de primeiro nível da navbar. */
/** @type {{ href: import('$app/types').RouteId, label: string }[]} */
export const navPrincipal = [
	{ href: '/', label: 'Início' },
	{ href: '/projeto', label: 'O Projeto' },
	{ href: '/aparelho', label: 'O Aparelho' }
];

/** Itens agrupados no menu "Conteúdo". */
/** @type {{ href: import('$app/types').RouteId, label: string, desc: string, icon: string }[]} */
export const navConteudo = [
	{
		href: '/dados',
		label: 'Dados e Pesquisas',
		desc: 'Estatísticas, custos e barreiras de acesso',
		icon: 'chart'
	},
	{
		href: '/lixo-eletronico',
		label: 'Lixo Eletrônico',
		desc: 'Impactos e como fazer o descarte correto',
		icon: 'recycle'
	},
	{
		href: '/custo-beneficio',
		label: 'Custo-Benefício',
		desc: 'Custo de produção, preço e gratuidade',
		icon: 'money'
	},
	{
		href: '/parceiros',
		label: 'Parceiros',
		desc: 'ONGs e iniciativas mapeadas na pesquisa',
		icon: 'people'
	}
];

export const equipe = [
	{ nome: 'Ana Júlia', turma: '2MMD06' },
	{ nome: 'Nayara', turma: '2MMD06' },
	{ nome: 'Grazielli', turma: '2MMD06' },
	{ nome: 'Gustavo', turma: '2MMD06' },
	{ nome: 'Otávio', turma: '2MMD06' },
	{ nome: 'Bruno', turma: '2TI02' }
];

/** Custo estimado da produção do protótipo (valores unitários). */
export const custosPrototipo = [
	{ item: 'Plástico reciclado / PLA para carcaça', custo: 'R$ 5 a R$ 12' },
	{ item: 'Microcontrolador (ESP32 / Arduino Nano)', custo: 'R$ 20 a R$ 40' },
	{ item: 'Microfone MEMS', custo: 'R$ 10 a R$ 15' },
	{ item: 'Pequeno amplificador + receptor', custo: 'R$ 15 a R$ 30' },
	{ item: 'Fios, solda e componentes eletrônicos', custo: 'R$ 10 a R$ 20' },
	{ item: 'Bateria recarregável simples', custo: 'R$ 10 a R$ 15' }
];

export const ongs = [
	{
		sigla: 'FENEIS',
		nome: 'Federação Nacional de Educação e Integração dos Surdos',
		texto:
			'A FENEIS atua na defesa dos direitos das pessoas surdas e incentiva uma sociedade mais acessível e inclusiva.',
		acoes: [
			'Valorização da LIBRAS',
			'Inclusão social',
			'Projetos educacionais',
			'Defesa dos direitos das pessoas surdas'
		]
	},
	{
		sigla: 'Instituto Santa Teresinha',
		nome: 'Educação e desenvolvimento de pessoas com deficiência auditiva',
		texto:
			'O Instituto Santa Teresinha trabalha com educação e desenvolvimento de pessoas com deficiência auditiva, promovendo autonomia e inclusão.',
		acoes: [
			'Inclusão escolar',
			'Desenvolvimento da comunicação',
			'Apoio educacional',
			'Incentivo à autonomia'
		]
	},
	{
		sigla: 'INES',
		nome: 'Instituto Nacional de Educação de Surdos',
		texto:
			'O INES é referência na educação de pessoas surdas e contribui para ampliar o acesso à educação e à acessibilidade.',
		acoes: [
			'Ensino adaptado',
			'Materiais em LIBRAS',
			'Formação de profissionais',
			'Inclusão social'
		]
	}
];
