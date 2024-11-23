import { FastifyReply, FastifyRequest } from "fastify";
import { ListPacienteByIdService } from "../../services/paciente/ListPacienteByIdService";


class ListPacienteByIdController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const listPacienteByIdService = new ListPacienteByIdService();
        const { id } = request.query as { id: string };

        try {
            const paciente = await listPacienteByIdService.execute(id);

            reply.send(paciente)

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

export { ListPacienteByIdController }