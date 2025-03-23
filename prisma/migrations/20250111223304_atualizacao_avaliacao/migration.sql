/*
  Warnings:

  - You are about to drop the column `ALTURA` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `CABECA` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `COLUNA` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `ESCAPULAS` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `HDA` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `HPP` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `JOELHOS` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `OMBROS` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `PA` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `PELVE` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `PES` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `PESO` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `QUEIXAPRINCIPAL` on the `avaliacoes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "avaliacoes" DROP COLUMN "ALTURA",
DROP COLUMN "CABECA",
DROP COLUMN "COLUNA",
DROP COLUMN "ESCAPULAS",
DROP COLUMN "HDA",
DROP COLUMN "HPP",
DROP COLUMN "JOELHOS",
DROP COLUMN "OMBROS",
DROP COLUMN "PA",
DROP COLUMN "PELVE",
DROP COLUMN "PES",
DROP COLUMN "PESO",
DROP COLUMN "QUEIXAPRINCIPAL",
ADD COLUMN     "altura" DECIMAL(5,2),
ADD COLUMN     "cabeca" VARCHAR(200),
ADD COLUMN     "coluna" VARCHAR(200),
ADD COLUMN     "escapulas" VARCHAR(200),
ADD COLUMN     "hda" VARCHAR(10000),
ADD COLUMN     "hpp" VARCHAR(10000),
ADD COLUMN     "joelhos" VARCHAR(200),
ADD COLUMN     "ombros" VARCHAR(200),
ADD COLUMN     "pa" VARCHAR(8),
ADD COLUMN     "pelve" VARCHAR(200),
ADD COLUMN     "pes" VARCHAR(200),
ADD COLUMN     "peso" DECIMAL(5,2),
ADD COLUMN     "quaixaPrincipal" VARCHAR(200);
