import { FastifyReply, FastifyRequest } from "fastify";

import { send } from "process";
import { ListMensalidadeByPacienteService } from "../../services/mensalidade/ListAtendimentoByPacienteService";


class ListMensalidadeByPacienteController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const listMensalidadesByIdPacienteService = new ListMensalidadeByPacienteService
        const { idPaciente } = request.query as { idPaciente: string };

        try {
            const mensalidades = await listMensalidadesByIdPacienteService.execute(idPaciente);

            reply.send(mensalidades)

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

export { ListMensalidadeByPacienteController }