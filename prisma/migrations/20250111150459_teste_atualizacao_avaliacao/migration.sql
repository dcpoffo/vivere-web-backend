/*
  Warnings:

  - You are about to drop the column `ATIVIDADEFISICA` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `DOENCAS` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `DORES` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `ETILISMO` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `HIPERTENSAO` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `INDICACAO` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `MEDICACAO` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `OBJETIVOPRINCIPAL` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `POSICAODOR` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `QUALATIVIDADEFISICA` on the `avaliacoes` table. All the data in the column will be lost.
  - You are about to drop the column `TABAGISMO` on the `avaliacoes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "avaliacoes" DROP COLUMN "ATIVIDADEFISICA",
DROP COLUMN "DOENCAS",
DROP COLUMN "DORES",
DROP COLUMN "ETILISMO",
DROP COLUMN "HIPERTENSAO",
DROP COLUMN "INDICACAO",
DROP COLUMN "MEDICACAO",
DROP COLUMN "OBJETIVOPRINCIPAL",
DROP COLUMN "POSICAODOR",
DROP COLUMN "QUALATIVIDADEFISICA",
DROP COLUMN "TABAGISMO",
ADD COLUMN     "atividadeFisica" VARCHAR(3),
ADD COLUMN     "doencas" VARCHAR(200),
ADD COLUMN     "dores" VARCHAR(10000),
ADD COLUMN     "etilismo" VARCHAR(3),
ADD COLUMN     "hipertensao" VARCHAR(3),
ADD COLUMN     "indicacao" VARCHAR(30),
ADD COLUMN     "medicacao" VARCHAR(200),
ADD COLUMN     "objetivoPrincipal" VARCHAR(200),
ADD COLUMN     "posicaoDor" VARCHAR(10000),
ADD COLUMN     "qualAtividadeFisica" VARCHAR(200),
ADD COLUMN     "tabagismo" VARCHAR(3);
