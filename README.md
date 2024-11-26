# Oasis - Frontend App

Este é um projeto frontend desenvolvido com **Next.js**, utilizando **Apollo Client**, **Radix UI**, **Framer Motion**, **Zod**, **React Hook Form**, e **TypeScript**. A aplicação se comunica com uma **API GraphQL** para exibir dados dinâmicos e interativos.

## 🛠️ Tecnologias Usadas

- **Next.js**: Framework React para construção de interfaces dinâmicas.
- **Apollo Client**: Cliente para interagir com a API GraphQL.
- **Radix UI**: Biblioteca de componentes acessíveis e não estilizados.
- **Framer Motion**: Biblioteca para animações de interface.
- **Zod**: Biblioteca de validação de esquemas para TypeScript.
- **React Hook Form**: Biblioteca para gerenciamento de formulários em React.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.

## 🚀 Como Começar

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o Repositório

Abra o terminal e clone o repositório para sua máquina local:

```bash
git clone https://github.com/usuario/nome-do-repositorio.git
```


### 2. Instale as Dependências

Dentro da pasta do projeto, execute o seguinte comando para instalar todas as dependências:

`npm install 
`

### 3. Configure a URL da API

Adicione a URL da API GraphQL no arquivo `.env.local`. Caso não defina, a URL padrão será `http://localhost:4000/graphql`.

Crie o arquivo `.env.local` na raiz do seu projeto com o seguinte conteúdo:

`NEXT_PUBLIC_API_URL="https://api-teste-oasis.onrender.com/graphql" `

Caso prefira usar a URL local, defina:

`NEXT_PUBLIC_API_URL="http://localhost:4000/graphql" `


### 4. Execute o Projeto

Após configurar a URL da API, execute o comando abaixo para rodar o projeto localmente:

`npm run dev `


## 💡 Funcionalidades

* **Autenticação (Auth)** : A aplicação permite autenticação de usuários para acesso a funcionalidades protegidas.
* **Listagem de Posts por Categoria** : Exibe uma lista de posts filtrados por categoria.
* **Ver Post por ID** : Exibe detalhes de um post específico ao ser acessado por seu ID.
* **Busca por Título ou Categoria** : Permite buscar posts por título ou categoria.
* **Comentários** : Usuários podem interagir com posts deixando comentários.

## 📱 Preview: https://teste-oasis.vercel.app
