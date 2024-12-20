import { FastifyReply, FastifyRequest } from "fastify";
import { ListAtendimentoByPacienteService } from "../../services/atendimento/ListAtendimentoByPacienteService";


class ListAtendimentoByPacienteController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listAtendimentosByIdPacienteService = new ListAtendimentoByPacienteService();
        const { idPaciente } = request.query as { idPaciente: string };

        try {
            const result = await listAtendimentosByIdPacienteService.execute(idPaciente);

            if (result.totalAtendimentos === 0) {
                reply.status(200).send({
                    message: `Nenhum atendimento encontrado para o(a) paciente ${result.paciente}`,
                    atendimentos: [],
                });
            } else {
                reply.send(result.atendimentos);
            }
        } catch (error) {
            if (error instanceof Error) {
                reply.status(404).send({ error: error.message });
            } else {
                reply.status(500).send({ error: "Erro inesperado" });
            }
        }
    }
}

export { ListAtendimentoByPacienteController };