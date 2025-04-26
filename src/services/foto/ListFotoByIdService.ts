import prismaClient from "../../prisma";

class ListFotoByIdService {

    async execute(id: string) {

        if (!id) {
            throw new Error("Sem Id não dá pra alterar")
        }

        const foto = await prismaClient.foto.findUnique({
            where: {
                id: Number(id),
            }
        })

        if (!foto) {
            throw new Error("Foto não encontrada com o Id: " + id);
        }

        return foto
    }
}

export { ListFotoByIdService }