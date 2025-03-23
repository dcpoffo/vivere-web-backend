/*
  Warnings:

  - You are about to alter the column `altura` on the `avaliacoes` table. The data in that column could be lost. The data in that column will be cast from `Decimal(5,2)` to `VarChar(4)`.
  - You are about to alter the column `peso` on the `avaliacoes` table. The data in that column could be lost. The data in that column will be cast from `Decimal(5,2)` to `VarChar(6)`.

*/
-- AlterTable
ALTER TABLE "avaliacoes" ALTER COLUMN "atividadeFisica" SET DEFAULT 'NÃO',
ALTER COLUMN "etilismo" SET DEFAULT 'NÃO',
ALTER COLUMN "hipertensao" SET DEFAULT 'NÃO',
ALTER COLUMN "tabagismo" SET DEFAULT 'NÃO',
ALTER COLUMN "altura" SET DATA TYPE VARCHAR(4),
ALTER COLUMN "peso" SET DATA TYPE VARCHAR(6);
