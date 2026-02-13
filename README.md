# 📋 Legaplan - Gerenciador de Tarefas

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2.12-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![SASS](https://img.shields.io/badge/SASS-1.79.1-pink?style=for-the-badge&logo=sass)

Uma aplicação moderna e intuitiva para gerenciamento de tarefas, desenvolvida com as melhores práticas de desenvolvimento web.

[🚀 Demonstração](#-demonstração) • [✨ Funcionalidades](#-funcionalidades) • [🛠️ Tecnologias](#️-tecnologias) • [📦 Instalação](#-instalação) • [🏗️ Arquitetura](#️-arquitetura)

</div>

---

## 📖 Sobre o Projeto

**Legaplan** é uma aplicação web moderna de gerenciamento de tarefas (todo list) desenvolvida com foco em experiência do usuário, performance e código limpo. O projeto demonstra habilidades avançadas em desenvolvimento frontend, utilizando as tecnologias mais atuais do ecossistema React/Next.js.

### 🎯 Objetivos do Projeto

- Demonstrar proficiência em **React** e **Next.js 14** (App Router)
- Implementar **TypeScript** com tipagem forte e interfaces bem definidas
- Criar uma arquitetura escalável usando **Context API** para gerenciamento de estado
- Desenvolver uma interface moderna e responsiva com **SASS**
- Aplicar boas práticas de desenvolvimento: componentes modulares, código reutilizável e separação de responsabilidades

---

## ✨ Funcionalidades

### 🎨 Interface do Usuário
- ✅ **Design Moderno**: Interface limpa e intuitiva com gradientes e animações suaves
- 📱 **Responsivo**: Layout adaptável para diferentes tamanhos de tela
- 🎭 **Modais Interativos**: Confirmação de exclusão e criação de tarefas através de modais elegantes
- ⏰ **Header Dinâmico**: Exibição de data e hora atualizadas em tempo real
- 🎨 **Feedback Visual**: Estados visuais claros para tarefas pendentes e concluídas

### 🔧 Funcionalidades Principais
- ➕ **Adicionar Tarefas**: Criação rápida e intuitiva de novas tarefas
- ✅ **Marcar como Concluída**: Alternar entre tarefas pendentes e concluídas
- 🗑️ **Deletar Tarefas**: Exclusão com confirmação para evitar erros
- 📊 **Organização Automática**: Separação automática entre tarefas pendentes e finalizadas
- 🔔 **Validação e Notificações**: Sistema de toast notifications para feedback ao usuário
- 🎯 **Validação de Entrada**: Prevenção de tarefas vazias com mensagens de erro amigáveis

---

## 🛠️ Tecnologias

### Core
- **[Next.js 14.2.12](https://nextjs.org/)** - Framework React com App Router para renderização otimizada
- **[React 18](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática

### Estilização
- **[SASS 1.79.1](https://sass-lang.com/)** - Pré-processador CSS com variáveis e aninhamento
- **CSS Variables** - Sistema de design consistente com variáveis CSS
- **Inter Tight Font** - Tipografia moderna e legível

### Gerenciamento de Estado
- **React Context API** - Gerenciamento de estado global sem dependências externas
- **Custom Hooks** - `useTasks()` para acesso simplificado ao contexto

### Bibliotecas Auxiliares
- **[Sonner 1.5.0](https://sonner.emilkowal.ski/)** - Sistema de notificações toast elegante e acessível
- **[UUID 10.0.0](https://www.npmjs.com/package/uuid)** - Geração de identificadores únicos para tarefas
- **[React Icons 5.3.0](https://react-icons.github.io/react-icons/)** - Biblioteca completa de ícones

### Ferramentas de Desenvolvimento
- **ESLint** - Linter configurado com regras do Next.js
- **TypeScript Strict Mode** - Verificação rigorosa de tipos
- **Path Aliases** - Importações organizadas com `@/*`

---

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/legaplan-test.git
   cd legaplan-test
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:3000
   ```

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção otimizado
npm run start    # Inicia o servidor de produção
npm run lint     # Executa o linter ESLint
```

---

## 🏗️ Arquitetura

### Estrutura de Diretórios

```
legaplan-test/
├── app/
│   ├── components/
│   │   ├── header/          # Componente de cabeçalho com data/hora
│   │   ├── task/            # Componente individual de tarefa
│   │   └── todo-list/       # Lista principal de tarefas
│   ├── global.scss          # Estilos globais e variáveis CSS
│   ├── layout.tsx           # Layout raiz da aplicação
│   └── page.tsx             # Página principal
├── providers/
│   └── tasks-providers.tsx  # Context Provider para gerenciamento de estado
└── public/                  # Assets estáticos (logo, ícones)
```

### Padrões de Arquitetura

#### 🎯 Component-Based Architecture
- Componentes modulares e reutilizáveis
- Separação clara de responsabilidades
- Props tipadas com TypeScript

#### 🔄 State Management
- **Context API** para estado global compartilhado
- Custom hook `useTasks()` para abstrair lógica de contexto
- Estado local para UI (modais, formulários)

#### 🎨 Styling Strategy
- **SASS Modules** para estilos componentizados
- Variáveis CSS para tema consistente
- BEM-like naming conventions

#### 📝 TypeScript
- Interfaces bem definidas para props e estado
- Type safety em toda a aplicação
- Strict mode habilitado

---

## 💡 Destaques Técnicos

### ⚡ Performance
- **Next.js App Router** para renderização otimizada
- **Image Optimization** com `next/image` para assets
- Componentes client-side apenas quando necessário (`"use client"`)

### 🔒 Qualidade de Código
- **TypeScript Strict Mode** para máxima segurança de tipos
- **ESLint** configurado com regras do Next.js
- Código limpo e legível seguindo convenções React

### 🎨 UX/UI
- Feedback visual imediato para todas as ações
- Modais com overlay para melhor foco
- Animações suaves e transições elegantes
- Validação em tempo real de formulários

### 🧩 Escalabilidade
- Arquitetura preparada para crescimento
- Fácil adição de novas funcionalidades
- Provider pattern permite extensão do estado
- Componentes desacoplados e testáveis

---

## 🚀 Demonstração

### Funcionalidades em Ação

1. **Adicionar Tarefa**: Clique no botão "Adicionar Tarefa" e preencha o título
2. **Marcar como Concluída**: Clique no checkbox ao lado da tarefa
3. **Deletar Tarefa**: Clique no ícone de lixeira e confirme a exclusão
4. **Visualizar Organização**: Tarefas são automaticamente separadas em "Suas tarefas de hoje" e "Tarefas finalizadas"

---

## 📚 Conceitos Demonstrados

Este projeto demonstra conhecimento e aplicação prática de:

- ✅ **React Hooks** (useState, useEffect, useContext)
- ✅ **Context API** para gerenciamento de estado global
- ✅ **TypeScript** com interfaces e tipagem forte
- ✅ **Next.js App Router** e Server/Client Components
- ✅ **SASS** com variáveis e organização modular
- ✅ **Component Composition** e reutilização de código
- ✅ **Form Handling** e validação
- ✅ **Modal Management** e overlays
- ✅ **Responsive Design** e CSS moderno
- ✅ **Code Organization** e estrutura de projeto

---

## 🔮 Melhorias Futuras

Possíveis expansões do projeto:

- 💾 Persistência de dados (LocalStorage ou API)
- 🔍 Busca e filtros de tarefas
- 📅 Categorias e tags para organização
- 🎨 Temas claro/escuro
- 📱 PWA (Progressive Web App)
- 🌐 Internacionalização (i18n)
- ✅ Testes unitários e de integração
- 🔄 Sincronização em tempo real

---

## 📄 Licença

Este projeto é privado e desenvolvido para fins de demonstração técnica.

---

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ utilizando as melhores práticas de desenvolvimento web moderno.

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela!**

Made with Next.js, React, and TypeScript

</div>
