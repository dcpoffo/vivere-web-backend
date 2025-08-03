import prismaClient from "../../prisma"

interface UpdateProps {
    id: string;
    [ key: string ]: string; // Permite qualquer outra chave string
}

class UpdateOsteopatiaService {
    async execute(data: UpdateProps) {
        const { id, ...updateData } = data;

        const osteopatia = await prismaClient.osteopatia.update({
            where: {
                id: Number(id),
            },
            data: updateData,
        });

        return osteopatia;
    }
}

export { UpdateOsteopatiaService };


// import prismaClient from "../../prisma"

// interface UpdateProps {
//     id: string,
//     dataAvaliacao: string,
//     queixaPrincipal: string,
//     historicoQueixa: string,
//     outrasQueixas: string,
//     caracteristicaDor: string,
//     horarioDor: string,
//     oquePioraDor: string,
//     oqueMelhoraDor: string,
//     frequenciaDor: string,
//     tratamentoDor: string,
//     eva: string,
//     cirurgia: string,
//     halitose: string,
//     dorDeGarganta: string,
//     disfagia: string,
//     azia: string,
//     tosseSeca: string,
//     esofagite: string,
//     perdaPeso: string,
//     obsEsofago: string,
//     diabete: string,
//     gordura: string,
//     infeccoes: string,
//     obsPancreas: string,
//     hipertensao: string,
//     calculos: string,
//     edema: string,
//     urinaSangue: string,
//     poucaUrina: string,
//     muitaUrina: string,
//     perdaUrina: string,
//     dorUrinar: string,
//     queimacaoUrinar: string,
//     alteracaoCloracao: string,
//     infeccaoRim: string,
//     obsRim: string,
//     dorEstomago: string,
//     eructacao: string,
//     refluxo: string,
//     hernia: string,
//     alimentosAcidos: string,
//     estufamento: string,
//     nauseas: string,
//     gastrite: string,
//     obsEstomago: string,
//     perdaPesoFigado: string,
//     bocaAmarga: string,
//     desconfortoAbnominal: string,
//     congestaoIntestinal: string,
//     alimentosGordurosos: string,
//     ressaca: string,
//     hepatite: string,
//     obsFigado: string,
//     medicacao: string,
//     alimentacao: string,
//     emocional: string,
//     sono: string,
//     atividadeFisica: string,
//     trabalho: string,
//     testesOrtopedicos: string,
//     testesOsteopaticos: string,
//     diagnosticoPorImagem: string,
//     diagnosticoTecidual: string,
//     diagnosticoOsteopatico: string,
//     constipacao: string,
//     hemorroidas: string,
//     diarreia: string,
//     sensacaoEvacuacao: string,
//     flatulencia: string,
//     qualidadeFezes: string,
//     obsIntestino: string,
//     estufamentoAbdominal: string,
//     intolerancia: string,
//     colicas: string,
//     calculosBiliares: string,
//     obsVesiculaBiliar: string,
//     dificuldadeMiccao: string,
//     diminuicaoMiccao: string,
//     obsProstata: string,
//     dorPreMenstrual: string,
//     dorDuranteMenstruacao: string,
//     dorPosMenstrual: string,
//     menstruacaoIrregular: string,
//     dorRelacaoSexual: string,
//     dismenorreia: string,
//     amenorreia: string,
//     obsUtero: string,
//     arritmia: string,
//     angina: string,
//     insuficienciaCardiaca: string,
//     hipertensaoSistemaCardiorespiratorio: string,
//     sindromeVasoVagal: string,
//     desmaios: string,
//     cansaco: string,
//     dispneia: string,
//     sinusite: string,
//     rinite: string,
//     bronquite: string,
//     asma: string,
//     pneumonia: string,
//     fumante: string,
//     maCirculacao: string,
//     varizes: string,
//     edemaMMSS: string,
//     edemaMMII: string,
//     obsSistemaCardiorespiratorio: string,
//     peDireito: string,
//     peDireitoVaro: string,
//     peDireitoValgo: string,
//     peDireitoPlano: string,
//     peDireitoCavo: string,
//     peEsquerdo: string,
//     peEsquerdoVaro: string,
//     peEsquerdoValgo: string,
//     peEsquerdoPlano: string,
//     peEsquerdoCavo: string,
//     testeInibicaoPodal: string,
//     txtTesteInibicaoPodal: string,
//     classe1: string,
//     classe2: string,
//     aberta: string,
//     profunda: string,
//     classe3: string,
//     mordidaCruzadaD: string,
//     mordidaCruzadaE: string,
//     mordidaCruzadaB: string,
//     ausenciaDeDentes: string,
//     testeInibicaoATM: string,
//     txtTesteInibicaoATM: string,
//     estrabismoConvergenteD: string,
//     estrabismoConvergenteE: string,
//     estrabismoDivergenteD: string,
//     estrabismoDivergenteE: string,
//     hipoconvergenciaD: string,
//     hipoconvergenciaE: string,
//     hipoconvergenciaBilateral: string,
//     testeInibicaoOlhos: string,
//     txtTesteInibicaoOlhos: string,
//     cicatriz: string,
//     localCicatriz: string,
//     testeInibicaoCicatriz: string,
//     txtTesteInibicaoCicatriz: string,
//     lift: string,
//     txtLift: string,
//     localViscera: string,
//     testeInibicaoLift: string,
//     txtTesteInibicaoLift: string,
// }
// class UpdateOsteopatiaService {

//     async execute({ id, dataAvaliacao, queixaPrincipal, historicoQueixa, outrasQueixas, caracteristicaDor, horarioDor, oquePioraDor, oqueMelhoraDor, frequenciaDor, tratamentoDor, eva, cirurgia, halitose, dorDeGarganta, disfagia, azia, tosseSeca, esofagite, perdaPeso, obsEsofago, diabete, gordura, infeccoes, obsPancreas, hipertensao, calculos, edema, urinaSangue, poucaUrina, muitaUrina, perdaUrina, dorUrinar, queimacaoUrinar, alteracaoCloracao, infeccaoRim, obsRim, dorEstomago, eructacao, refluxo, hernia, alimentosAcidos, estufamento, nauseas, gastrite, obsEstomago, perdaPesoFigado, bocaAmarga, desconfortoAbnominal, congestaoIntestinal, alimentosGordurosos, ressaca, hepatite, obsFigado, medicacao, alimentacao, emocional, sono, atividadeFisica, trabalho, testesOrtopedicos, testesOsteopaticos, diagnosticoPorImagem, diagnosticoTecidual, diagnosticoOsteopatico, constipacao, hemorroidas, diarreia, sensacaoEvacuacao, flatulencia, qualidadeFezes, obsIntestino, estufamentoAbdominal, intolerancia, colicas, calculosBiliares, obsVesiculaBiliar, dificuldadeMiccao, diminuicaoMiccao, obsProstata, dorPreMenstrual, dorDuranteMenstruacao, dorPosMenstrual, menstruacaoIrregular, dorRelacaoSexual, dismenorreia, amenorreia, obsUtero, arritmia, angina, insuficienciaCardiaca, hipertensaoSistemaCardiorespiratorio, sindromeVasoVagal, desmaios, cansaco, dispneia, sinusite, rinite, bronquite, asma, pneumonia, fumante, maCirculacao, varizes, edemaMMSS, edemaMMII, obsSistemaCardiorespiratorio, peDireito, peDireitoVaro, peDireitoValgo, peDireitoPlano, peDireitoCavo, peEsquerdo, peEsquerdoVaro, peEsquerdoValgo, peEsquerdoPlano, peEsquerdoCavo, testeInibicaoPodal, txtTesteInibicaoPodal, classe1, classe2, aberta, profunda, classe3, mordidaCruzadaD, mordidaCruzadaE, mordidaCruzadaB, ausenciaDeDentes, testeInibicaoATM, txtTesteInibicaoATM, estrabismoConvergenteD, estrabismoConvergenteE, estrabismoDivergenteD, estrabismoDivergenteE, hipoconvergenciaD, hipoconvergenciaE, hipoconvergenciaBilateral, testeInibicaoOlhos, txtTesteInibicaoOlhos, cicatriz, localCicatriz, testeInibicaoCicatriz, txtTesteInibicaoCicatriz, lift, txtLift, localViscera, testeInibicaoLift, txtTesteInibicaoLift }: UpdateProps) {

//         const osteopatia = await prismaClient.osteopatia.update({
//             where: {
//                 id: Number(id),
//             },
//             data: {
//                 dataAvaliacao, queixaPrincipal, historicoQueixa, outrasQueixas, caracteristicaDor, horarioDor, oquePioraDor, oqueMelhoraDor, frequenciaDor, tratamentoDor, eva, cirurgia, halitose, dorDeGarganta, disfagia, azia, tosseSeca, esofagite, perdaPeso, obsEsofago, diabete, gordura, infeccoes, obsPancreas, hipertensao, calculos, edema, urinaSangue, poucaUrina, muitaUrina, perdaUrina, dorUrinar, queimacaoUrinar, alteracaoCloracao, infeccaoRim, obsRim, dorEstomago, eructacao, refluxo, hernia, alimentosAcidos, estufamento, nauseas, gastrite, obsEstomago, perdaPesoFigado, bocaAmarga, desconfortoAbnominal, congestaoIntestinal, alimentosGordurosos, ressaca, hepatite, obsFigado, medicacao, alimentacao, emocional, sono, atividadeFisica, trabalho, testesOrtopedicos, testesOsteopaticos, diagnosticoPorImagem, diagnosticoTecidual, diagnosticoOsteopatico, constipacao, hemorroidas, diarreia, sensacaoEvacuacao, flatulencia, qualidadeFezes, obsIntestino, estufamentoAbdominal, intolerancia, colicas, calculosBiliares, obsVesiculaBiliar, dificuldadeMiccao, diminuicaoMiccao, obsProstata, dorPreMenstrual, dorDuranteMenstruacao, dorPosMenstrual, menstruacaoIrregular, dorRelacaoSexual, dismenorreia, amenorreia, obsUtero, arritmia, angina, insuficienciaCardiaca, hipertensaoSistemaCardiorespiratorio, sindromeVasoVagal, desmaios, cansaco, dispneia, sinusite, rinite, bronquite, asma, pneumonia, fumante, maCirculacao, varizes, edemaMMSS, edemaMMII, obsSistemaCardiorespiratorio, peDireito, peDireitoVaro, peDireitoValgo, peDireitoPlano, peDireitoCavo, peEsquerdo, peEsquerdoVaro, peEsquerdoValgo, peEsquerdoPlano, peEsquerdoCavo, testeInibicaoPodal, txtTesteInibicaoPodal, classe1, classe2, aberta, profunda, classe3, mordidaCruzadaD, mordidaCruzadaE, mordidaCruzadaB, ausenciaDeDentes, testeInibicaoATM, txtTesteInibicaoATM, estrabismoConvergenteD, estrabismoConvergenteE, estrabismoDivergenteD, estrabismoDivergenteE, hipoconvergenciaD, hipoconvergenciaE, hipoconvergenciaBilateral, testeInibicaoOlhos, txtTesteInibicaoOlhos, cicatriz, localCicatriz, testeInibicaoCicatriz, txtTesteInibicaoCicatriz, lift, txtLift, localViscera, testeInibicaoLift, txtTesteInibicaoLift
//             }
//         })

//         return osteopatia

//     }
// }

// export { UpdateOsteopatiaService }