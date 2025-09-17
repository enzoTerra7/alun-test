# Estrutura do Projeto Alun

Este documento descreve a organização completa do projeto, explicando cada pasta e arquivo em detalhes.

## 📁 Estrutura de Pastas

```
├── 📁 app/                          # Pasta principal do Next.js 15 (App Router)
├── 📁 components/                   # Componentes reutilizáveis da UI
├── 📁 constants/                    # Constantes e configurações do projeto
├── 📁 contexts/                     # Contextos React para gerenciamento de estado
├── 📁 helpers/                      # Funções utilitárias e helpers
├── 📁 hooks/                        # Custom hooks do React
├── 📁 layout/                       # Componentes de layout (header, footer, navegação)
├── 📁 modules/                      # Páginas (não pude usar nomeclatura page pois fica conflitante)
├── 📁 public/                       # Arquivos estáticos públicos
├── 📁 sanitizers/                   # Funções para sanitização de dados
├── 📁 services/                     # Serviços para comunicação com APIs
├── 📁 types/                        # Definições de tipos TypeScript
├── 📄 package.json                  # Configurações e dependências do projeto
├── 📄 next.config.ts                # Configurações do Next.js
├── 📄 tsconfig.json                 # Configurações do TypeScript
├── 📄 eslint.config.mjs             # Configurações do ESLint
├── 📄 postcss.config.mjs            # Configurações do PostCSS
└── 📄 README.md                     # Documentação do projeto
```

## 📂 Detalhamento das Pastas

### 🎯 **app/** - Pasta Principal do Next.js 15 (App Router)
```
app/
├── 📁 blog/
│   └── 📁 [id]/
│       └── 📄 page.tsx              # Página dinâmica para posts individuais
├── 📄 favicon.ico                   # Ícone do site
├── 📄 globals.css                   # Estilos globais e CSS customizado
├── 📄 layout.tsx                    # Layout raiz da aplicação
└── 📄 page.tsx                      # Página inicial (home)
```

**Explicação:** Esta é a pasta principal do Next.js 15 usando o novo App Router. Contém as rotas da aplicação, onde cada pasta representa uma rota e cada `page.tsx` é uma página renderizada.

### 🧩 **components/** - Componentes Reutilizáveis
```
components/
├── 📄 button.tsx                    # Componente de botão com variantes
├── 📄 content-wrapper.tsx           # Wrapper para conteúdo com estilos
├── 📄 input.tsx                     # Componente de input customizado
├── 📄 logo.tsx                      # Componente do logo da aplicação
├── 📄 pagination.tsx                # Componente de paginação
├── 📄 post-card.tsx                 # Card para exibição de posts
├── 📄 skeleton.tsx                  # Componente de loading skeleton
└── 📄 theme-toggle.tsx              # Toggle para alternar tema dark/light
```

**Explicação:** Contém todos os componentes reutilizáveis da interface. Cada componente é modular e pode ser usado em diferentes partes da aplicação.

### ⚙️ **constants/** - Constantes e Configurações
```
constants/
└── 📄 posts.ts                      # Constantes relacionadas aos posts
└── 📄 api.ts                        # Constantes relacionadas a api
```

**Explicação:** Armazena constantes do projeto como limites de paginação, categorias permitidas, tags de cache e configurações gerais.

### 🔄 **contexts/** - Contextos React
```
contexts/
└── 📄 theme.tsx                     # Provider para gerenciamento de tema
```

**Explicação:** Contém os contextos React para gerenciamento de estado global, como o tema da aplicação (dark/light mode).

### 🛠️ **helpers/** - Funções Utilitárias
```
helpers/
└── 📄 styles.ts                     # Helpers para estilos e classes CSS
```

**Explicação:** Funções auxiliares para manipulação de estilos, classes CSS e outras utilidades do projeto.

### 🎣 **hooks/** - Custom Hooks
```
hooks/
└── 📄 use-pagination.ts             # Hook customizado para lógica de paginação
```

**Explicação:** Custom hooks do React que encapsulam lógica reutilizável, como a lógica de paginação.

### 🏗️ **layout/** - Componentes de Layout
```
layout/
├── 📄 footer.tsx                    # Rodapé da aplicação
├── 📄 header.tsx                    # Cabeçalho da aplicação
├── 📄 navigation.config.ts          # Configuração da navegação
├── 📄 navigation.item.tsx           # Item individual da navegação
└── 📄 navigation.tsx                # Componente principal de navegação
```

**Explicação:** Componentes que definem a estrutura visual da aplicação, incluindo header, footer e sistema de navegação.

### 📦 **modules/** - Módulos por Funcionalidade
```
modules/
├── 📁 home/                         # Módulo da página inicial
│   ├── 📄 action.ts                 # Server actions para home
│   ├── 📄 footer.tsx                # Footer específico da home
│   ├── 📄 hero.tsx                  # Seção hero da home
│   ├── 📄 index.tsx                 # Componente principal da home
│   ├── 📄 post.empty.tsx            # Estado vazio de posts
│   ├── 📄 post.error.tsx            # Estado de erro de posts
│   ├── 📄 post.filters.tsx          # Filtros de posts
│   ├── 📄 post.list.tsx             # Lista de posts
│   ├── 📄 post.pagination.tsx       # Paginação de posts
│   └── 📄 posts.fallback.tsx        # Fallback de loading
└── 📁 post/                         # Módulo de posts individuais
    ├── 📄 action.ts                  # Server actions para posts
    ├── 📄 correlated-posts.error.tsx # Erro de posts correlacionados
    ├── 📄 correlated-posts.fallback.tsx # Fallback de posts correlacionados
    ├── 📄 correlated-posts.tsx      # Posts correlacionados
    ├── 📄 index.tsx                 # Componente principal do post
    ├── 📄 post.content.fallback.tsx # Fallback do conteúdo do post
    ├── 📄 post.content.tsx          # Conteúdo principal do post
    ├── 📄 post.main-details.tsx     # Detalhes principais do post
    └── 📄 post.text.tsx             # Texto do post
```

**Explicação:** Organização modular por funcionalidade. Cada módulo contém todos os componentes, actions e lógica relacionados a uma funcionalidade específica.

### 🌐 **public/** - Arquivos Estáticos
```
public/
├── 📁 logo/
│   └── 📄 logomark.svg              # Logo da aplicação
├── 📁 mock/
│   ├── 📄 bg-colors.svg             # Imagem de fundo com cores
│   └── 📄 hero.jpg                  # Imagem do hero
├── 📄 file.svg                      # Ícone de arquivo
├── 📄 globe.svg                     # Ícone de globo
├── 📄 next.svg                      # Logo do Next.js
├── 📄 vercel.svg                    # Logo da Vercel
└── 📄 window.svg                    # Ícone de janela
```

**Explicação:** Arquivos estáticos acessíveis publicamente, como imagens, ícones e outros assets.

### 🧹 **sanitizers/** - Sanitização de Dados
```
sanitizers/
├── 📄 post-id.ts                    # Sanitização de ID de posts
└── 📄 post-list.ts                  # Sanitização de lista de posts
```

**Explicação:** Funções responsáveis por validar e sanitizar dados recebidos, garantindo que apenas dados válidos sejam processados.

### 🔌 **services/** - Serviços de API
```
services/
├── 📄 get-all-posts.ts              # Serviço para buscar todos os posts
├── 📄 get-post-details.ts           # Serviço para buscar detalhes de um post
├── 📄 get-posts-by-category.ts      # Serviço para buscar posts por categoria
└── 📄 get-posts-by-tag.ts           # Serviço para buscar posts por tag
```

**Explicação:** Camada de serviços responsável por fazer as requisições para APIs externas e retornar os dados formatados.

### 📝 **types/** - Definições TypeScript
```
types/
├── 📄 post.id.ts                    # Tipos relacionados ao ID de posts
└── 📄 post.list.ts                  # Tipos relacionados à lista de posts
```

**Explicação:** Definições de tipos TypeScript para garantir type safety em toda a aplicação.

## 📄 Arquivos de Configuração

### **package.json**
Configurações do projeto, dependências e scripts de build/desenvolvimento.

### **next.config.ts**
Configurações específicas do Next.js, como otimizações e plugins.

### **tsconfig.json**
Configurações do TypeScript, incluindo paths de importação e regras de compilação.

### **eslint.config.mjs**
Configurações do ESLint para linting do código.

### **postcss.config.mjs**
Configurações do PostCSS para processamento de CSS.

## 🏛️ Arquitetura do Projeto

### **Padrão de Organização**
- **Modular**: Cada funcionalidade é organizada em seu próprio módulo
- **Server-First**: Uso extensivo de Server Components e Server Actions
- **Type-Safe**: TypeScript em toda a aplicação
- **Component-Driven**: Componentes reutilizáveis e bem estruturados

### **Fluxo de Dados**
1. **Páginas** fazem chamadas para **Actions**
2. **Actions** processam a lógica e chamam **Services**
3. **Services** fazem requisições para APIs externas
4. **Sanitizers** validam e limpam os dados recebidos
5. **Componentes** renderizam os dados processados

