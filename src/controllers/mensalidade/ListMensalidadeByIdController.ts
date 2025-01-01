
import { FastifyReply, FastifyRequest } from "fastify";
import { ListMensalidadeByIdService } from "../../services/mensalidade/ListMensalidadeByIdService";

class ListMensalidadeByIdController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const listMensalidadeService = new ListMensalidadeByIdService();
        const { id } = request.query as { id: string };

        try {
            const mensalidade = await listMensalidadeService.execute(id);

            reply.send(mensalidade)

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

export { ListMensalidadeByIdController };
