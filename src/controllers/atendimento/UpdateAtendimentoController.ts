import { FastifyRequest, FastifyReply } from 'fastify'
import { UpdateAtendimentoService } from '../../services/atendimento/UpdateAtendimentoService';

interface UpdateAtendimentoProps {
    id: string,
    //idPaciente: string,
    dataAtendimento: string,
    observacao: string,
    anotacoes: string,
    atendimento: string
}

class UpdateAtendimentoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string };

        const { dataAtendimento, observacao, anotacoes, atendimento } = request.body as UpdateAtendimentoProps

        const atendimentoService = new UpdateAtendimentoService();

        const _atendimento = await atendimentoService.execute({ id, dataAtendimento, observacao, anotacoes, atendimento })

        reply.send(_atendimento)
    }

}

export { UpdateAtendimentoController }