/*
  Warnings:

  - You are about to alter the column `pa` on the `avaliacoes` table. The data in that column could be lost. The data in that column will be cast from `VarChar(8)` to `VarChar(7)`.

*/
-- AlterTable
ALTER TABLE "avaliacoes" ALTER COLUMN "pa" SET DATA TYPE VARCHAR(7);
