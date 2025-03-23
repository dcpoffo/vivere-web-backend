import prismaClient from "../../prisma";

interface CreateProps {
    idPaciente: string,
    indicacao?: string,
    atividadeFisica?: string,
    qualAtividadeFisica?: string,
    medicacao?: string,
    tabagismo?: string,
    etilismo?: string,
    hipertensao?: string,
    doencas?: string,
    dores?: string,
    posicaoDor?: string,
    objetivoPrincipal?: string,
    queixaPrincipal?: string,
    hda?: string,
    hpp?: string,
    peso?: string,
    altura?: string,
    pa?: string,
    pes?: string,
    joelhos?: string,
    pelve?: string,
    coluna?: string,
    ombros?: string,
    escapulas?: string,
    cabeca?: string
}

class CreateAvalicaoService {
    async execute({ idPaciente, indicacao, atividadeFisica, qualAtividadeFisica, medicacao, tabagismo, etilismo, hipertensao, doencas, dores, posicaoDor, objetivoPrincipal, queixaPrincipal, hda, hpp, peso, altura, pa, pes, joelhos, pelve, coluna, ombros, escapulas, cabeca }: CreateProps) {

        if (!idPaciente) {
            throw new Error("Paciente precisa ser preenchido")
        }

        const findPaciente = await prismaClient.paciente.findUnique({
            where: {
                id: Number(idPaciente),
            }
        })

        if (!findPaciente) {
            throw new Error("Paciente não encontrado");
        }

        const _avaliacao = await prismaClient.avaliacao.create({
            data: {
                idPaciente: Number(idPaciente),
                indicacao,
                atividadeFisica,
                qualAtividadeFisica,
                medicacao,
                tabagismo,
                etilismo,
                hipertensao,
                doencas,
                dores,
                posicaoDor,
                objetivoPrincipal,
                queixaPrincipal,
                hda,
                hpp,
                peso,
                altura,
                pa,
                pes,
                joelhos,
                pelve,
                coluna,
                ombros,
                escapulas,
                cabeca,
            }
        })

        return _avaliacao

    }
}

export { CreateAvalicaoService }