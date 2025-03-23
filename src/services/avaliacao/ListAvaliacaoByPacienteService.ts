import prismaClient from "../../prisma"

class ListAvaliacaoByPacienteService {

    async execute(idPaciente: string) {

        if (!idPaciente) {
            throw new Error("Paciente sem identificador (Id) não dá")
        }

        const findPaciente = await prismaClient.paciente.findFirst({
            where: {
                id: Number(idPaciente)
            }
        })

        if (!findPaciente) {
            throw new Error("Paciente não encontrado!")
        }

        const avaliacoes = await prismaClient.avaliacao.findMany({
            where: {
                idPaciente: Number(findPaciente.id)
            },
            orderBy: [
                {
                    id: 'desc'
                },
            ]
        });

        if (avaliacoes.length === 0) {
            throw new Error("Nenhuma avaliação encontrada para o(a) paciente " + findPaciente.nome)
        }

        return avaliacoes;

    }

}

export { ListAvaliacaoByPacienteService }