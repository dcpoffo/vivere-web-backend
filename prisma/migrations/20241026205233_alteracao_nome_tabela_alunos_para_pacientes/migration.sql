/*
  Warnings:

  - You are about to drop the `alunos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "alunos";

-- CreateTable
CREATE TABLE "pacientes" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "cpf" VARCHAR(14) NOT NULL,
    "contato1" VARCHAR(30),
    "contato2" VARCHAR(30),
    "dataNascimento" DATE,
    "endereco" VARCHAR(200),
    "email" VARCHAR(35),
    "situacao" VARCHAR(7),
    "profissao" VARCHAR(30),

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id")
);
