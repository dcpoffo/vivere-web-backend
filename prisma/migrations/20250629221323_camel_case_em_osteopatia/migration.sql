/*
  Warnings:

  - You are about to drop the column `alimentosacidos` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `alimentosgordurosos` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `alteracaocloracao` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `bocaamarga` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `congestaointestinal` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `desconfortoabnominal` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `dorestomago` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `dorurinar` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `infeccaorim` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `muitaurina` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `perdapeso` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `perdapesofigado` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `perdaurina` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `poucaurina` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `queimacaourinar` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `tosseseca` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `urinasangue` on the `osteopatias` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "osteopatias" DROP COLUMN "alimentosacidos",
DROP COLUMN "alimentosgordurosos",
DROP COLUMN "alteracaocloracao",
DROP COLUMN "bocaamarga",
DROP COLUMN "congestaointestinal",
DROP COLUMN "desconfortoabnominal",
DROP COLUMN "dorestomago",
DROP COLUMN "dorurinar",
DROP COLUMN "infeccaorim",
DROP COLUMN "muitaurina",
DROP COLUMN "perdapeso",
DROP COLUMN "perdapesofigado",
DROP COLUMN "perdaurina",
DROP COLUMN "poucaurina",
DROP COLUMN "queimacaourinar",
DROP COLUMN "tosseseca",
DROP COLUMN "urinasangue",
ADD COLUMN     "alimentosAcidos" BOOLEAN DEFAULT false,
ADD COLUMN     "alimentosGordurosos" BOOLEAN DEFAULT false,
ADD COLUMN     "alteracaoCloracao" BOOLEAN DEFAULT false,
ADD COLUMN     "bocaAmarga" BOOLEAN DEFAULT false,
ADD COLUMN     "congestaoIntestinal" BOOLEAN DEFAULT false,
ADD COLUMN     "desconfortoAbnominal" BOOLEAN DEFAULT false,
ADD COLUMN     "dorEstomago" BOOLEAN DEFAULT false,
ADD COLUMN     "dorUrinar" BOOLEAN DEFAULT false,
ADD COLUMN     "infeccaoRim" BOOLEAN DEFAULT false,
ADD COLUMN     "muitaUrina" BOOLEAN DEFAULT false,
ADD COLUMN     "perdaPeso" BOOLEAN DEFAULT false,
ADD COLUMN     "perdaPesoFigado" BOOLEAN DEFAULT false,
ADD COLUMN     "perdaUrina" BOOLEAN DEFAULT false,
ADD COLUMN     "poucaUrina" BOOLEAN DEFAULT false,
ADD COLUMN     "queimacaoUrinar" BOOLEAN DEFAULT false,
ADD COLUMN     "tosseSeca" BOOLEAN DEFAULT false,
ADD COLUMN     "urinaSangue" BOOLEAN DEFAULT false;
