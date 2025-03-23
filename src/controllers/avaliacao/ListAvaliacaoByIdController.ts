import { FastifyReply, FastifyRequest } from "fastify";
import { ListAvaliacaoByIdService } from "../../services/avaliacao/ListAvaliacaoByIdService";

class ListAvaliacaoByIdController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const listAvaliacaoService = new ListAvaliacaoByIdService();
        const { id } = request.query as { id: string };

        try {
            const avaliacao = await listAvaliacaoService.execute(id);

            reply.send(avaliacao)

        } catch (error) {
            if (error instanceof Error) {
                reply.status(400).send({ error: error.message });
            } else {
                reply.status(500).send({ error: "Erro inesperado" });
            }
        }
    }
}

export { ListAvaliacaoByIdController }