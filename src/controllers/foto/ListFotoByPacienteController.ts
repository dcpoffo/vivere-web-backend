import { FastifyReply, FastifyRequest } from "fastify";
import { ListFotoByPacienteService } from "../../services/foto/ListFotoByPacienteService";

class ListFotoByPacienteController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const fotoService = new ListFotoByPacienteService();

        const { idPaciente } = request.query as { idPaciente: string };

        try {
            const fotos = await fotoService.execute(idPaciente);

            reply.send(fotos)

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

export { ListFotoByPacienteController }