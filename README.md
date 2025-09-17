## Bem vindo pessoal da Alun!

# Sobre a estrutura das pastas

Optei por essa estrutura pois acho que, como é um projeto curto, não demandava nada mais robusto, acho que essa estrutura que segui mantém o projeto limpo e legível, com fácil acesso ao conteúdo.
Cogitei fazer uma estrutura mais elaborada como uma por camadas, mas seria demais, não se fazia necessário tanta abstração. Daí cogitei por modules, criando uma pasta core, com common e etc, mas não teria módulos suficiente para fazer uma boa segregação, então acabou que seria demais também.

Para mais detalhes, ver arquivo [**PROJETO_ESTRUTURA.md**](/PROJETO_ESTRUTURA.md)

# Teste de acessibilidade

Como um dos focos do projeto é acessibilidade, foquei bastante em ferramentas práticas que mostram níveis de performance, acessibilidade, etc, como o Google Page Insights. Segue o link para isso:
- [Google Page Insight](https://pagespeed.web.dev/analysis/https-alun-test-vercel-app/ow2sdun20f?form_factor=desktop)

# Dificuldades

- **Gradiente**: Tive uma dificuldade na implementação do gradiente no fundo da página, fiquei buscando melhor maneiras para isso, se devia ser uma tag de imagem no fundo, se aplicava com background-image, se fazia isso no body, no content-wrapper, no componente da hero, etc. Acabou que não ficou muito bacana em nenhuma das abordagens que tentei.

# Rodar o projeto

Padrão, usa o:

`npm i`

e depois

`npm run dev`

ou

`npm run build && npm run start`
