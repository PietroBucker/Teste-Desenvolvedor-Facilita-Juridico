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
VALUES ('Joao', 'joao@hotmail.com', 999999999, POINT(0, 1)),
       ('Maria', 'maria@homail.com', 888888888, POINT(1, 0)),
       ('Jose', 'jose@hotmail.com', 777777777, POINT(1, 1)),
       ('joaquin', 'joaquin@hotmail.com', 666666666, POINT(0, 0));


