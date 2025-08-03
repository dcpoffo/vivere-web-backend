import { FastifyReply, FastifyRequest } from "fastify";
import { ListOsteopatiaByIdService } from "../../services/osteopatia/ListOsteopatiaByIdService";


class ListOsteopatiaByIdController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const service = new ListOsteopatiaByIdService();
        const { id } = request.query as { id: string };

        try {
            const osteopatia = await service.execute(id);

            reply.send(osteopatia)

        } catch (error) {
            // Verifica o tipo do erro para acessar a mensagem corretamente
            if (error instanceof Error) {
                // Se for uma instância de Error, retorna a mensagem de erro
                reply.status(404).send({ error: error.message });
            } else {
                // Caso contrário, retorna um erro genérico
                reply.status(500).send({ error: "Erro inesperado" });
            }
        }
    }
}

export { ListOsteopatiaByIdController }