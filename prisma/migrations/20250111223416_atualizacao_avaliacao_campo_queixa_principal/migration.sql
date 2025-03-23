/*
  Warnings:

  - You are about to drop the column `quaixaPrincipal` on the `avaliacoes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "avaliacoes" DROP COLUMN "quaixaPrincipal",
ADD COLUMN     "queixaPrincipal" VARCHAR(200);
