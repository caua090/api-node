# API Node com NestJS

Esta é uma API de exemplo construída com NestJS, TypeORM e MySQL para gerenciar usuários.

## 🚀 Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
*   [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
*   [NPM](https://www.npmjs.com/) (geralmente vem com o Node.js)
*   Um servidor de banco de dados [MySQL](https://www.mysql.com/) rodando.

## ⚙️ Configuração do Ambiente

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

1.  **Clone o repositório:**
    ```bash
    # Se você estiver usando HTTPS
    git clone https://github.com/seu-usuario/api-node.git

    # Ou se estiver usando SSH
    # git clone git@github.com:seu-usuario/api-node.git

    cd api-node
    ```
    > Substitua `seu-usuario/api-node` pela URL correta do repositório.

2.  **Instale as dependências do projeto:**
    Execute o comando abaixo na raiz do projeto para instalar todas as dependências listadas no `package.json`.
    ```bash
    npm install
    ```

3.  **Configure o Banco de Dados:**
    *   Certifique-se de que seu servidor MySQL esteja em execução.
    *   Crie um banco de dados. Por padrão, a aplicação espera um banco chamado `test`.
        ```sql
        CREATE DATABASE test;
        ```
    *   A configuração da conexão com o banco de dados está no arquivo `src/app.module.ts`. As credenciais padrão são:
        *   **Host**: `localhost`
        *   **Porta**: `3306`
        *   **Usuário**: `root`
        *   **Senha**: `password`
        *   **Banco de dados**: `test`
    *   Se as suas credenciais do MySQL forem diferentes, você **deve** atualizar o objeto de configuração do `TypeOrmModule.forRoot` no arquivo `src/app.module.ts` com as suas informações.
    *   Como a opção `synchronize: true` está ativa, as tabelas serão criadas automaticamente quando a aplicação iniciar.

## ▶️ Rodando a Aplicação

Após a configuração, você pode iniciar a aplicação.

1.  **Para iniciar em modo de desenvolvimento (com watch):**
    ```bash
    npm run start
    ```
    A aplicação estará disponível em `http://localhost:3000`.
