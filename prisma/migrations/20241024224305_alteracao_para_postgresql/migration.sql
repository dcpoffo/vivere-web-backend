-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "cpf" VARCHAR(15) NOT NULL,
    "crefito" VARCHAR(20) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "profissao" VARCHAR(30) NOT NULL,
    "role" VARCHAR(5) NOT NULL DEFAULT 'user',

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alunos" (
    "ID" SERIAL NOT NULL,
    "NOME" VARCHAR(50) NOT NULL,
    "CPF" VARCHAR(14) NOT NULL,
    "TELEFONE" VARCHAR(30),
    "TELEFONE2" VARCHAR(30),
    "DATANASCIMENTO" DATE,
    "ENDERECO" VARCHAR(200),
    "EMAIL" VARCHAR(35),
    "SITUACAO" VARCHAR(7),
    "PROFISSAO" VARCHAR(30),

    CONSTRAINT "alunos_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_cpf_key" ON "usuarios"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_crefito_key" ON "usuarios"("crefito");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
