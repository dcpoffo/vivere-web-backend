import prismaClient from "../../prisma";

class ListAvaliacaoByIdService {
    async execute(id: string) {

        if (!id) {
            throw new Error("Sem Id não dá pra pesquisar");
        }


        const avaliacao = await prismaClient.avaliacao.findUnique({
            where: {
                id: Number(id),
            }
        })

        if (!avaliacao) {
            throw new Error("Avaliação não encontrada com o Id: " + id);
        }

        return avaliacao;
    }
}

export { ListAvaliacaoByIdService }