# EcoHeads 3´AS — Aparelho Auditivo Adaptável

Site institucional do projeto **EcoHeads 3´AS**, um aparelho auditivo adaptável, acessível e
sustentável feito com materiais recicláveis e tecnologia de baixo custo. O conteúdo foi construído
a partir da apresentação `EcoHeads 3´AS.pdf`.

## Stack

- [SvelteKit](https://svelte.dev/docs/kit) 2 + Svelte 5 (runes)
- `@sveltejs/adapter-static` — site 100% estático, pré-renderizado
- Fontes Poppins (títulos) e Rubik (texto), via `@fontsource`

## Comandos

```bash
npm install      # instala as dependências
npm run dev      # servidor de desenvolvimento
npm run build    # gera o site estático em build/
npm run preview  # pré-visualiza o build de produção
```

## Páginas

| Rota                | Conteúdo                                                                    |
| ------------------- | --------------------------------------------------------------------------- |
| `/`                 | Apresentação do projeto, números do problema e os três "A"                   |
| `/projeto`          | Objetivo, solução, público-alvo, objetivos da plataforma e equipe            |
| `/aparelho`         | Protótipo digital, partes principais, materiais, tecnologias e conservação   |
| `/dados`            | Estatísticas, custo, barreiras de acesso, SUS e por que os aparelhos são caros |
| `/lixo-eletronico`  | Impactos do descarte incorreto, descarte correto e logística reversa         |
| `/custo-beneficio`  | Tabela de custos do protótipo, preço ao público e caminhos para gratuidade   |
| `/parceiros`        | ONGs pesquisadas (FENEIS, Instituto Santa Teresinha, INES) e iniciativas ambientais |
| `/contato`          | Formulário de dúvidas/sugestões/apoio e perguntas frequentes                 |

## Estrutura

```
src/
  app.css                  design system (paleta verde, tipografia, componentes base)
  app.html                 shell HTML (lang="pt-BR")
  lib/components/          Header, Footer, PageHero, Icon, Sources
  lib/data/site.js         navegação, equipe, tabela de custos e ONGs
  routes/                  uma pasta por página
static/images/             logotipo e ilustrações extraídas do PDF
```

## Formulário de contato

O site é estático, portanto o formulário não envia dados para um servidor: ele monta uma mensagem
e abre o programa de e-mail do visitante (`mailto:`). Para receber os envios diretamente, troque a
função `enviar` em `src/routes/contato/+page.svelte` por um `POST` para o serviço escolhido
(Formspree, Netlify Forms, um endpoint próprio etc.) e ajuste o e-mail em `src/lib/data/site.js`.

## Observação

Conforme indicado na apresentação, o site está em fase de planejamento e desenvolvimento — as
informações representam a proposta inicial da plataforma e podem mudar.
