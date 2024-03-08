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

