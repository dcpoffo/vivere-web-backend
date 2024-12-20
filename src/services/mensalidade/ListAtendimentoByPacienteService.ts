import prismaClient from "../../prisma"

class ListMensalidadeByPacienteService {

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

        const mensalidades = await prismaClient.mensalidade.findMany({
            where: {
                idPaciente: Number(findPaciente.id)
            },
        });

        if (mensalidades.length === 0) {
            throw new Error("Nenhuma mensalidade encontrada para o(a) paciente " + findPaciente.nome)
        }

        return mensalidades;

    }

}

export { ListMensalidadeByPacienteService }