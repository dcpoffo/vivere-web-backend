/*
  Warnings:

  - You are about to drop the column `daraMensalidade` on the `mensalidades` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "mensalidades" DROP COLUMN "daraMensalidade",
ADD COLUMN     "dataMensalidade" DATE;
