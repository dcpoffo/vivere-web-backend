import { FastifyReply, FastifyRequest } from "fastify";
import { FindUsuarioByEmailService } from "../../services/usuario/FindUsuarioByEmailService";


class FindUsuarioByEmailController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { email } = request.query as { email: string };

        const findUsuarioByEmailService = new FindUsuarioByEmailService();

        try {
            // Chama o serviço para encontrar o usuário
            const usuario = await findUsuarioByEmailService.execute(email);

            // Retorna o usuário encontrado
            reply.send(usuario);
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

export { FindUsuarioByEmailController };
