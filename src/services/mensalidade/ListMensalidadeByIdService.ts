import prismaClient from "../../prisma"

class ListMensalidadeByIdService {
    async execute(id: string) {

        const mensalidade = await prismaClient.mensalidade.findUnique({
            where: {
                id: Number(id),
            },
        });


        if (!mensalidade) {
            throw new Error('Mensalidade não encontrada com o Id: ' + id);
        }

        return mensalidade;

    }
}

export { ListMensalidadeByIdService }