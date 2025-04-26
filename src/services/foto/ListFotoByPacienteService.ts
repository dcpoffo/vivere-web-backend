import prismaClient from "../../prisma"

class ListFotoByPacienteService {

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

        const fotos = await prismaClient.foto.findMany({
            where: {
                idPaciente: Number(findPaciente.id)
            },
            orderBy: [
                {
                    dataFoto: 'desc'
                },
            ]
        });

        if (fotos.length === 0) {
            throw new Error("Nenhuma foto encontrada para o(a) paciente " + findPaciente.nome)
        }

        // return fotos;
        // Formatar as datas antes de retornar
        const fotosComDataFormatada = fotos.map((foto) => ({
            ...foto,
            dataFoto: foto.dataFoto?.toISOString().split('T')[ 0 ], // Formato YYYY-MM-DD
        }));

        return fotosComDataFormatada;
    }
}

export { ListFotoByPacienteService }