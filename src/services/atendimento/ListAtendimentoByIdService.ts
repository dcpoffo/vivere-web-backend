import prismaClient from "../../prisma"

class ListAtendimentoByIdService {
    async execute(id: string) {

        const atendimento = await prismaClient.atendimento.findUnique({
            where: {
                id: Number(id),
            },
        });


        if (!atendimento) {
            throw new Error('Atendimento não encontrado com o Id: ' + id);
        }

        return atendimento;

    }
}

export { ListAtendimentoByIdService };