import prismaClient from "../../prisma"

class ListAtendimentoByPacienteService {
    async execute(idPaciente: string) {
        if (!idPaciente) {
            throw new Error("Paciente sem identificador (Id) não dá");
        }

        const findPaciente = await prismaClient.paciente.findFirst({
            where: {
                id: Number(idPaciente),
            },
        });

        if (!findPaciente) {
            throw new Error("Paciente não encontrado!");
        }

        const atendimentos = await prismaClient.atendimento.findMany({
            where: {
                idPaciente: Number(findPaciente.id),
            },
        });

        // Retorna uma resposta mais descritiva em vez de lançar erro
        return { atendimentos }
    }
}

export { ListAtendimentoByPacienteService };