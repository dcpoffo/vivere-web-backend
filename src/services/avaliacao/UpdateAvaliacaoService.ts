import prismaClient from "../../prisma"

interface UpdateProps {
    id: string,
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
    cabeca?: string,
}

class UpdateAvaliacaoService {
    async execute({ id, indicacao, atividadeFisica, qualAtividadeFisica, medicacao, tabagismo, etilismo, hipertensao, doencas, dores, posicaoDor, objetivoPrincipal, queixaPrincipal, hda, hpp, peso, altura, pa, pes, joelhos, pelve, coluna, ombros, escapulas, cabeca }: UpdateProps) {

        if (!id) {
            throw new Error("Precisa informar qual avaliação quer alterar")
        }

        const _avaliacao = await prismaClient.avaliacao.update({
            where: {
                id: Number(id),
            },
            data: {
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

export { UpdateAvaliacaoService }