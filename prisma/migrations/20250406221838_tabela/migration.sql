-- CreateTable
CREATE TABLE "fotos" (
    "id" SERIAL NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "dataFoto" DATE NOT NULL,
    "caminho" VARCHAR(500) NOT NULL,

    CONSTRAINT "fotos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fotos" ADD CONSTRAINT "fotos_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
