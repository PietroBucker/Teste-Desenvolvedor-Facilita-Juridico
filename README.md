## Versao para mobile em desenvolvimento.
Essa parte é exclusivamente escolha minha para colocar em pratica desenvolviemento usando. 

    - React-Native.
    - Expo-Router.
    - Expo.
    - Nativewind.

# Projeto Resumo

O projeto consiste em uma aplicação desenvolvida em React para o frontend e Node.js com PostgreSQL para o backend. A escolha do JavaScript e TypeScript se deu pela preferência do desenvolvedor, aproveitando os benefícios de tipagem e desenvolvimento. O PostgreSQL foi escolhido pelo uso facilitado com Docker e pela familiaridade com a criação de consultas SQL.

## Backend
O backend foi organizado em uma estrutura model-service, com a lógica de negócios encapsulada nos serviços. O uso do controller foi dispensado devido à simplicidade do projeto. O Docker foi utilizado para facilitar a configuração do ambiente de desenvolvimento.

## Frontend
No frontend, foi utilizado React com TypeScript, seguindo uma organização por componentes. Embora não tenha sido implementado um design UX elaborado, o projeto possui uma estilização simples. A página permite o cadastro de clientes, sua exibição e a definição da menor rota passando por todos os clientes e voltando ao ponto inicial.

## Considerações Finais
O projeto visa treinar habilidades de desenvolvimento em JavaScript/TypeScript, React e Node.js, além de demonstrar o uso de PostgreSQL com Docker para persistência de dados. Embora simples, ele aborda conceitos fundamentais de desenvolvimento web full-stack.

---

# Instruções de Instalação e Execução

## Requisitos do Sistema
Certifique-se de que seu sistema atende aos seguintes requisitos:

- [VsCode](https://code.visualstudio.com/) 1.87.1 ou superior
- [Node.js](https://nodejs.org/) 18 ou superior
- [Docker](https://www.docker.com/) version 25.0.3 ou superior

## Configuração do Backend
Dentro da pasta `Backend`, execute os seguintes comandos em ordem:

1. Instale as dependências:
    ```bash
    npm install
    ```

2. Inicie os contêineres Docker:
    ```bash
    docker-compose up -d
    ```

3. Inicie o servidor:
    ```bash
    npm run server
    ```

## Configuração do Frontend
Dentro da pasta `Frontend`, execute os seguintes comandos:

1. Instale as dependências:
    ```bash
    npm install
    ```

2. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

Isso iniciará o projeto e você poderá acessar o aplicativo no navegador.

