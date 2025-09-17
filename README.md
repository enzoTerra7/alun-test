## Bem vindo pessoal da Alun!

# Sobre a estrutura das pastas

Optei por essa estrutura pois acho que, como é um projeto curto, não demandava nada mais robusto, acho que essa estrutura que segui mantém o projeto limpo e legível, com fácil acesso ao conteúdo.
Cogitei fazer uma estrutura mais elaborada como uma por camadas, mas seria demais, não se fazia necessário tanta abstração. Daí cogitei por modules, criando uma pasta core, com common e etc, mas não teria módulos suficiente para fazer uma boa segregação, então acabou que seria demais também.

Para mais detalhes, ver arquivo [**PROJETO_ESTRUTURA.md**](/PROJETO_ESTRUTURA.md)

# Arquitetura

Meu planejamento foi simples, manter o que se repete no layout (header e footer).
As páginas seguem em tese a mesma estrutura: se for conteúdo estático, vai para server render, senão eu uso o suspense, com um fallback nessa parte que deve fazer a request, passando isso então para o client side.
As request passam por uma action, que é responsável por cuidar da lógica e chamar os services (que fazem apenas os fetchs), e manda para um sanitizer para retorna apenas o que eu preciso.

Para mais detalhes, ver arquivo [**PROJETO_ESTRUTURA.md**](/PROJETO_ESTRUTURA.md)

# Teste de acessibilidade

Como um dos focos do projeto é acessibilidade, foquei bastante em ferramentas práticas que mostram níveis de performance, acessibilidade, etc, como o Google Page Insights. Segue o link para isso:
- [Google Page Insight](https://pagespeed.web.dev/analysis/https-alun-test-vercel-app/ow2sdun20f?form_factor=desktop)

# Bibliotecas

Evitei ao máximo instalar bibliotecas externas, acho que, como é um teste, é interessante eu mostrar o que consigo fazer de forma "cru", sem nada extra para auxiliar, então por isso instalei pouquíssimas bibliotecas:

- **tw-animate-css**: Adiciona animações já prontas para tailwind, adicionei para o skeleton;
- **tailwind-merge & clsx**: Para fazer o melhor helper pro tailwind;
- **use-debounce**: Esse fiquei com pé atrás para instalar. Cogitei fazer o debounce do filtro de busca apenas com o useDefferedValue, mas no fim desisti e optei por instalar essa biblioteca, que é bem leve;
- **cva**: Para criar as variantes de botões, é uma biblioteca bem leve;
- **lucide-react**: Para ícones;
- **next-themes**: Para tema dark/light.

# Dificuldades

Tive dificuldade para implementar o gradiente no fundo da página. Mas de resto achei bem tranquilo o teste, espero muito que gostem!

# Rodar o projeto

Padrão, usa o:

`npm i`

e depois

`npm run dev`

ou

`npm run build && npm run start`
