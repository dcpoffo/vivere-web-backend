import { FastifyReply, FastifyRequest } from "fastify";
import { ListAvaliacaoByPacienteService } from "../../services/avaliacao/ListAvaliacaoByPacienteService";

class ListAvaliacaoByPacienteController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const avaliacaoService = new ListAvaliacaoByPacienteService();
        const { idPaciente } = request.query as { idPaciente: string };

        try {
            const avaliacoes = await avaliacaoService.execute(idPaciente);

            reply.send(avaliacoes)

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

export { ListAvaliacaoByPacienteController }