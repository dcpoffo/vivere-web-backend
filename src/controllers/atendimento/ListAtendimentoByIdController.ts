
import { FastifyReply, FastifyRequest } from "fastify";
import { ListAtendimentoByIdService } from "../../services/atendimento/ListAtendimentoByIdService";


class ListAtendimentoByIdController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const listAtendimentoByIdService = new ListAtendimentoByIdService();
        const { id } = request.query as { id: string };

        try {
            const atendimento = await listAtendimentoByIdService.execute(id);

            reply.send(atendimento)

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

export { ListAtendimentoByIdController };
