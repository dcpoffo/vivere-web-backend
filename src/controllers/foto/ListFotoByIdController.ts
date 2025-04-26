import { FastifyReply, FastifyRequest } from "fastify";
import { ListFotoByIdService } from "../../services/foto/ListFotoByIdService";

class ListFotoByIdController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const service = new ListFotoByIdService();
        const { id } = request.query as { id: string };

        try {
            const foto = await service.execute(id);
            reply.send(foto)
        } catch (error) {
            if (error instanceof Error) {
                reply.status(400).send({ error: error.message });
            } else {
                reply.status(500).send({ error: "Erro inesperado" });
            }
        }
    }
}

export { ListFotoByIdController }