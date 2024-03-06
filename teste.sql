CREATE DATABASE api_facilita;

-- ulitlzaçao do comando \c para conectar ao banco de dados
\c api_facilita;

CREATE TABLE "clientes" (
    "nome" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "telefone" INT NOT NULL,
    "localizacao" POINT NOT NULL
);

INSERT INTO "clientes" ("nome", "email", "telefone", "localizacao") 
VALUES ('João', 'joao@hotmail.com', 999999999, POINT(0, 1));


