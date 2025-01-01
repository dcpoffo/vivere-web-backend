import prismaClient from "../../prisma";

class ListPacienteService {
    async execute() {

        const pacientes = await prismaClient.paciente.findMany(
            {
                orderBy: {
                    nome: 'asc'
                }
            }
        );

        return pacientes;
    }
}

export { ListPacienteService }