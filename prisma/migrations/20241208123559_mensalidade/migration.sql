-- CreateTable
CREATE TABLE "mensalidades" (
    "id" SERIAL NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "pago" VARCHAR(3),
    "daraMensalidade" DATE,
    "mes" VARCHAR(9),
    "ano" VARCHAR(4),
    "valor" DECIMAL(5,2),
    "visualizar" VARCHAR(3),
    "cpfUsuarioLogado" VARCHAR(14) NOT NULL,

    CONSTRAINT "mensalidades_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "mensalidades" ADD CONSTRAINT "mensalidades_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
