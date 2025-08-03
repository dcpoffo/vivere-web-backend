import prismaClient from "../../prisma";

class ListOsteopatiaByPacienteService {

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

        const osteopatias = await prismaClient.osteopatia.findMany({
            where: {
                idPaciente: Number(findPaciente.id)
            },
            orderBy:
            {
                id: 'asc'
            }
        })

        if (osteopatias.length === 0) {
            throw new Error("Nenhuma Osteopatia encontrada para o(a) paciente " + findPaciente.nome)
        }

        return osteopatias
    }
}

export { ListOsteopatiaByPacienteService }