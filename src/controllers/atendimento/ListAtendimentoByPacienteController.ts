import { FastifyReply, FastifyRequest } from "fastify";
import { ListAtendimentoByPacienteService } from "../../services/atendimento/ListAtendimentoByPacienteService";
import { send } from "process";


class ListAtendimentoByPacienteController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const listAtendimentosByIdPacienteService = new ListAtendimentoByPacienteService();
        const { idPaciente } = request.query as { idPaciente: string };

        try {
            const pacientes = await listAtendimentosByIdPacienteService.execute(idPaciente);

            reply.send(pacientes)

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

export { ListAtendimentoByPacienteController }