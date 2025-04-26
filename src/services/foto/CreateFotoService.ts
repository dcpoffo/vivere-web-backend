import prismaClient from "../../prisma";

interface CreateProps {
    idPaciente: string,
    dataFoto: string,
    caminho: string
}

class CreateFotoService {
    async execute({ idPaciente, dataFoto, caminho }: CreateProps) {

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

        if (!dataFoto) {
            throw new Error("A Data precisa ser preenchida")
        }

        if (!caminho) {
            throw new Error("Caminho precisa ser preenchido")
        }

        const foto = await prismaClient.foto.create({
            data: {
                idPaciente: Number(idPaciente),
                dataFoto: dataFoto ? new Date(dataFoto).toISOString() : new Date().toISOString(),
                caminho: caminho
            }
        })

        return foto

    }
}

export { CreateFotoService }