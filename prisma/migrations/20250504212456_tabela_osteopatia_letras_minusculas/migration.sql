/*
  Warnings:

  - You are about to drop the column `TesteInibicaoATM` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `TesteInibicaoPodal` on the `osteopatias` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "osteopatias" DROP COLUMN "TesteInibicaoATM",
DROP COLUMN "TesteInibicaoPodal",
ADD COLUMN     "testeInibicaoATM" VARCHAR(3) DEFAULT 'NÃO',
ADD COLUMN     "testeInibicaoPodal" VARCHAR(3) DEFAULT 'NÃO';
