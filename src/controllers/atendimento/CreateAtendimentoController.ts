import { FastifyReply, FastifyRequest } from "fastify";
import { CreateAtendimentoService } from "../../services/atendimento/CreateAtendimentoService";

interface CreateAtendimentoProps {
    idPaciente: string,
    dataAtendimento: string,
    observacao: string,
    anotacoes?: string,
    atendimento: string
}

class CreateAtendimentoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { idPaciente, dataAtendimento, observacao, anotacoes, atendimento } = request.body as CreateAtendimentoProps;

        const atendimentoService = new CreateAtendimentoService();

        const novoAtendimento = await atendimentoService.execute({ idPaciente, dataAtendimento, observacao, anotacoes, atendimento })

        reply.send(novoAtendimento);
    }
}

export { CreateAtendimentoController }