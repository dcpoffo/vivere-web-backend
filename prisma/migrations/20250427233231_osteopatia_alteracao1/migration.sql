/*
  Warnings:

  - You are about to drop the column `ALTERACAOCLORACAO` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `CALCULOS` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `DORURINAR` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `EDEMA` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `HIPERTENSAO` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `INFECCAORIM` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `MUITAURINA` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `OBSRIM` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `PERDAURINA` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `POUCAURINA` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `QUEIMACAOURINAR` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `URINASANGUE` on the `osteopatias` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "osteopatias" DROP COLUMN "ALTERACAOCLORACAO",
DROP COLUMN "CALCULOS",
DROP COLUMN "DORURINAR",
DROP COLUMN "EDEMA",
DROP COLUMN "HIPERTENSAO",
DROP COLUMN "INFECCAORIM",
DROP COLUMN "MUITAURINA",
DROP COLUMN "OBSRIM",
DROP COLUMN "PERDAURINA",
DROP COLUMN "POUCAURINA",
DROP COLUMN "QUEIMACAOURINAR",
DROP COLUMN "URINASANGUE",
ADD COLUMN     "alteracaoCloracao" VARCHAR(3) DEFAULT 'NÃO',
ADD COLUMN     "calculos" VARCHAR(3) DEFAULT 'NÃO',
ADD COLUMN     "dorUrinar" VARCHAR(3) DEFAULT 'NÃO',
ADD COLUMN     "edema" VARCHAR(3) DEFAULT 'NÃO',
ADD COLUMN     "hipertensao" VARCHAR(3) DEFAULT 'NÃO',
ADD COLUMN     "infeccaoRim" VARCHAR(3) DEFAULT 'NÃO',
ADD COLUMN     "muitaUrina" VARCHAR(3) DEFAULT 'NÃO',
ADD COLUMN     "obsRim" VARCHAR(100),
ADD COLUMN     "perdaUrina" VARCHAR(3) DEFAULT 'NÃO',
ADD COLUMN     "poucaUrina" VARCHAR(3) DEFAULT 'NÃO',
ADD COLUMN     "queimacaoUrinar" VARCHAR(3) DEFAULT 'NÃO',
ADD COLUMN     "urinaSangue" VARCHAR(3) DEFAULT 'NÃO';
