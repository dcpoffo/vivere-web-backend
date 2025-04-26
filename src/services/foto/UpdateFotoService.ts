import prismaClient from "../../prisma";

interface UpdateProps {
    id: string,
    dataFoto?: string,
    caminho?: string
}

class UpdateFotoService {

    async execute({ id, dataFoto, caminho }: UpdateProps) {

        if (!caminho) {
            throw new Error("O caminho precisa ser preenchido")
        }

        const foto = await prismaClient.foto.update({
            where: {
                id: Number(id),
            },
            data: {
                dataFoto: dataFoto || new Date().toISOString(),
                caminho
            }
        })

        return foto

    }
}

export { UpdateFotoService };
