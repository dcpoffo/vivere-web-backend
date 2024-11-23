-- CreateTable
CREATE TABLE "atendimentos" (
    "id" SERIAL NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "dataAtendimento" DATE,
    "observacao" VARCHAR(17),
    "anotacoes" VARCHAR(10000),

    CONSTRAINT "atendimentos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "atendimentos" ADD CONSTRAINT "atendimentos_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
