import { FastifyReply, FastifyRequest } from "fastify";

import { ListOsteopatiaByPacienteService } from "../../services/osteopatia/ListOsteopatiaByPacienteService";

class ListOsteopatiaByPacienteController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const service = new ListOsteopatiaByPacienteService;
        const { idPaciente } = request.query as { idPaciente: string };

        try {
            const osteopatias = await service.execute(idPaciente);
            reply.send(osteopatias)

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

export { ListOsteopatiaByPacienteController }