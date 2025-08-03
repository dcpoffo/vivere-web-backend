/*
  Warnings:

  - The `pago` column on the `mensalidades` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `visualizar` column on the `mensalidades` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `alimentosAcidos` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `alimentosGordurosos` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `alteracaoCloracao` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `bocaAmarga` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `congestaoIntestinal` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `desconfortoAbnominal` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `dorEstomago` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `dorUrinar` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `infeccaoRim` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `muitaUrina` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `perdaPeso` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `perdaPesoFigado` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `perdaUrina` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `poucaUrina` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `queimacaoUrinar` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `tosseSeca` on the `osteopatias` table. All the data in the column will be lost.
  - You are about to drop the column `urinaSangue` on the `osteopatias` table. All the data in the column will be lost.
  - The `halitose` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dorDeGarganta` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `disfagia` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `azia` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `esofagite` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `diabete` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `gordura` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `infeccoes` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `eructacao` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `refluxo` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hernia` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `estufamento` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nauseas` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `gastrite` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ressaca` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hepatite` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `constipacao` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hemorroidas` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `diarreia` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `sensacaoEvacuacao` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `flatulencia` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `qualidadeFezes` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `estufamentoAbdominal` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `intolerancia` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `colicas` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `calculosBiliares` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dificuldadeMiccao` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `diminuicaoMiccao` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dorPreMenstrual` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dorDuranteMenstruacao` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dorPosMenstrual` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `menstruacaoIrregular` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dorRelacaoSexual` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dismenorreia` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `amenorreia` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `arritmia` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `angina` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `insuficienciaCardiaca` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hipertensaoSistemaCardiorespiratorio` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `sindromeVasoVagal` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `desmaios` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cansaco` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dispneia` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `sinusite` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `rinite` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `bronquite` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `asma` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `pneumonia` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `fumante` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `maCirculacao` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `varizes` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `edemaMMSS` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `edemaMMII` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `peDireitoVaro` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `peDireitoValgo` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `peDireitoPlano` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `peDireitoCavo` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `peEsquerdoVaro` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `peEsquerdoValgo` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `peEsquerdoPlano` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `peEsquerdoCavo` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `classe1` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `classe2` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `aberta` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `profunda` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `classe3` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `mordidaCruzadaD` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `mordidaCruzadaE` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `mordidaCruzadaB` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `estrabismoConvergenteD` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `estrabismoConvergenteE` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `estrabismoDivergenteD` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `estrabismoDivergenteE` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hipoconvergenciaD` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hipoconvergenciaE` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hipoconvergenciaBilateral` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `testeInibicaoOlhos` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cicatriz` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `testeInibicaoCicatriz` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `lift` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `testeInibicaoLift` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `calculos` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `edema` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hipertensao` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `testeInibicaoATM` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `testeInibicaoPodal` column on the `osteopatias` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "mensalidades" DROP COLUMN "pago",
ADD COLUMN     "pago" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "visualizar",
ADD COLUMN     "visualizar" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "osteopatias" DROP COLUMN "alimentosAcidos",
DROP COLUMN "alimentosGordurosos",
DROP COLUMN "alteracaoCloracao",
DROP COLUMN "bocaAmarga",
DROP COLUMN "congestaoIntestinal",
DROP COLUMN "desconfortoAbnominal",
DROP COLUMN "dorEstomago",
DROP COLUMN "dorUrinar",
DROP COLUMN "infeccaoRim",
DROP COLUMN "muitaUrina",
DROP COLUMN "perdaPeso",
DROP COLUMN "perdaPesoFigado",
DROP COLUMN "perdaUrina",
DROP COLUMN "poucaUrina",
DROP COLUMN "queimacaoUrinar",
DROP COLUMN "tosseSeca",
DROP COLUMN "urinaSangue",
ADD COLUMN     "alimentosacidos" BOOLEAN DEFAULT false,
ADD COLUMN     "alimentosgordurosos" BOOLEAN DEFAULT false,
ADD COLUMN     "alteracaocloracao" BOOLEAN DEFAULT false,
ADD COLUMN     "bocaamarga" BOOLEAN DEFAULT false,
ADD COLUMN     "congestaointestinal" BOOLEAN DEFAULT false,
ADD COLUMN     "desconfortoabnominal" BOOLEAN DEFAULT false,
ADD COLUMN     "dorestomago" BOOLEAN DEFAULT false,
ADD COLUMN     "dorurinar" BOOLEAN DEFAULT false,
ADD COLUMN     "infeccaorim" BOOLEAN DEFAULT false,
ADD COLUMN     "muitaurina" BOOLEAN DEFAULT false,
ADD COLUMN     "perdapeso" BOOLEAN DEFAULT false,
ADD COLUMN     "perdapesofigado" BOOLEAN DEFAULT false,
ADD COLUMN     "perdaurina" BOOLEAN DEFAULT false,
ADD COLUMN     "poucaurina" BOOLEAN DEFAULT false,
ADD COLUMN     "queimacaourinar" BOOLEAN DEFAULT false,
ADD COLUMN     "tosseseca" BOOLEAN DEFAULT false,
ADD COLUMN     "urinasangue" BOOLEAN DEFAULT false,
DROP COLUMN "halitose",
ADD COLUMN     "halitose" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "dorDeGarganta",
ADD COLUMN     "dorDeGarganta" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "disfagia",
ADD COLUMN     "disfagia" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "azia",
ADD COLUMN     "azia" BOOLEAN DEFAULT false,
DROP COLUMN "esofagite",
ADD COLUMN     "esofagite" BOOLEAN DEFAULT false,
DROP COLUMN "diabete",
ADD COLUMN     "diabete" BOOLEAN DEFAULT false,
DROP COLUMN "gordura",
ADD COLUMN     "gordura" BOOLEAN DEFAULT false,
DROP COLUMN "infeccoes",
ADD COLUMN     "infeccoes" BOOLEAN DEFAULT false,
DROP COLUMN "eructacao",
ADD COLUMN     "eructacao" BOOLEAN DEFAULT false,
DROP COLUMN "refluxo",
ADD COLUMN     "refluxo" BOOLEAN DEFAULT false,
DROP COLUMN "hernia",
ADD COLUMN     "hernia" BOOLEAN DEFAULT false,
DROP COLUMN "estufamento",
ADD COLUMN     "estufamento" BOOLEAN DEFAULT false,
DROP COLUMN "nauseas",
ADD COLUMN     "nauseas" BOOLEAN DEFAULT false,
DROP COLUMN "gastrite",
ADD COLUMN     "gastrite" BOOLEAN DEFAULT false,
DROP COLUMN "ressaca",
ADD COLUMN     "ressaca" BOOLEAN DEFAULT false,
DROP COLUMN "hepatite",
ADD COLUMN     "hepatite" BOOLEAN DEFAULT false,
DROP COLUMN "constipacao",
ADD COLUMN     "constipacao" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "hemorroidas",
ADD COLUMN     "hemorroidas" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "diarreia",
ADD COLUMN     "diarreia" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "sensacaoEvacuacao",
ADD COLUMN     "sensacaoEvacuacao" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "flatulencia",
ADD COLUMN     "flatulencia" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "qualidadeFezes",
ADD COLUMN     "qualidadeFezes" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "estufamentoAbdominal",
ADD COLUMN     "estufamentoAbdominal" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "intolerancia",
ADD COLUMN     "intolerancia" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "colicas",
ADD COLUMN     "colicas" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "calculosBiliares",
ADD COLUMN     "calculosBiliares" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "dificuldadeMiccao",
ADD COLUMN     "dificuldadeMiccao" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "diminuicaoMiccao",
ADD COLUMN     "diminuicaoMiccao" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "dorPreMenstrual",
ADD COLUMN     "dorPreMenstrual" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "dorDuranteMenstruacao",
ADD COLUMN     "dorDuranteMenstruacao" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "dorPosMenstrual",
ADD COLUMN     "dorPosMenstrual" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "menstruacaoIrregular",
ADD COLUMN     "menstruacaoIrregular" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "dorRelacaoSexual",
ADD COLUMN     "dorRelacaoSexual" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "dismenorreia",
ADD COLUMN     "dismenorreia" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "amenorreia",
ADD COLUMN     "amenorreia" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "arritmia",
ADD COLUMN     "arritmia" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "angina",
ADD COLUMN     "angina" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "insuficienciaCardiaca",
ADD COLUMN     "insuficienciaCardiaca" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "hipertensaoSistemaCardiorespiratorio",
ADD COLUMN     "hipertensaoSistemaCardiorespiratorio" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "sindromeVasoVagal",
ADD COLUMN     "sindromeVasoVagal" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "desmaios",
ADD COLUMN     "desmaios" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "cansaco",
ADD COLUMN     "cansaco" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "dispneia",
ADD COLUMN     "dispneia" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "sinusite",
ADD COLUMN     "sinusite" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "rinite",
ADD COLUMN     "rinite" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "bronquite",
ADD COLUMN     "bronquite" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "asma",
ADD COLUMN     "asma" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "pneumonia",
ADD COLUMN     "pneumonia" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "fumante",
ADD COLUMN     "fumante" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "maCirculacao",
ADD COLUMN     "maCirculacao" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "varizes",
ADD COLUMN     "varizes" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "edemaMMSS",
ADD COLUMN     "edemaMMSS" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "edemaMMII",
ADD COLUMN     "edemaMMII" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "peDireitoVaro",
ADD COLUMN     "peDireitoVaro" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "peDireitoValgo",
ADD COLUMN     "peDireitoValgo" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "peDireitoPlano",
ADD COLUMN     "peDireitoPlano" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "peDireitoCavo",
ADD COLUMN     "peDireitoCavo" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "peEsquerdoVaro",
ADD COLUMN     "peEsquerdoVaro" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "peEsquerdoValgo",
ADD COLUMN     "peEsquerdoValgo" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "peEsquerdoPlano",
ADD COLUMN     "peEsquerdoPlano" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "peEsquerdoCavo",
ADD COLUMN     "peEsquerdoCavo" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "classe1",
ADD COLUMN     "classe1" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "classe2",
ADD COLUMN     "classe2" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "aberta",
ADD COLUMN     "aberta" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "profunda",
ADD COLUMN     "profunda" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "classe3",
ADD COLUMN     "classe3" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "mordidaCruzadaD",
ADD COLUMN     "mordidaCruzadaD" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "mordidaCruzadaE",
ADD COLUMN     "mordidaCruzadaE" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "mordidaCruzadaB",
ADD COLUMN     "mordidaCruzadaB" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "estrabismoConvergenteD",
ADD COLUMN     "estrabismoConvergenteD" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "estrabismoConvergenteE",
ADD COLUMN     "estrabismoConvergenteE" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "estrabismoDivergenteD",
ADD COLUMN     "estrabismoDivergenteD" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "estrabismoDivergenteE",
ADD COLUMN     "estrabismoDivergenteE" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "hipoconvergenciaD",
ADD COLUMN     "hipoconvergenciaD" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "hipoconvergenciaE",
ADD COLUMN     "hipoconvergenciaE" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "hipoconvergenciaBilateral",
ADD COLUMN     "hipoconvergenciaBilateral" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "testeInibicaoOlhos",
ADD COLUMN     "testeInibicaoOlhos" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "cicatriz",
ADD COLUMN     "cicatriz" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "testeInibicaoCicatriz",
ADD COLUMN     "testeInibicaoCicatriz" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "lift",
ADD COLUMN     "lift" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "testeInibicaoLift",
ADD COLUMN     "testeInibicaoLift" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "calculos",
ADD COLUMN     "calculos" BOOLEAN DEFAULT false,
DROP COLUMN "edema",
ADD COLUMN     "edema" BOOLEAN DEFAULT false,
DROP COLUMN "hipertensao",
ADD COLUMN     "hipertensao" BOOLEAN DEFAULT false,
DROP COLUMN "testeInibicaoATM",
ADD COLUMN     "testeInibicaoATM" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "testeInibicaoPodal",
ADD COLUMN     "testeInibicaoPodal" BOOLEAN NOT NULL DEFAULT false;
