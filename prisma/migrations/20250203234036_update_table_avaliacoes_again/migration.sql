/*
  Warnings:

  - You are about to alter the column `altura` on the `avaliacoes` table. The data in that column could be lost. The data in that column will be cast from `VarChar(6)` to `VarChar(4)`.

*/
-- AlterTable
ALTER TABLE "avaliacoes" ALTER COLUMN "altura" SET DATA TYPE VARCHAR(4);
