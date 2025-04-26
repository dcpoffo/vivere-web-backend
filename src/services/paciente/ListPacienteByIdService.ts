import prismaClient from "../../prisma";

class ListPacienteByIdService {
    async execute(id: string) {

        const paciente = await prismaClient.paciente.findUnique({
            where: {
                id: Number(id),
            },
            include: {
                atendimentos: true,
                mensalidades: true,
                avaliacoes: true,
                fotos: true,
            }
        });


        if (!paciente) {
            throw new Error('Paciente não encontrado com o Id: ' + id);
        }

        return paciente;
    }
}

export { ListPacienteByIdService };