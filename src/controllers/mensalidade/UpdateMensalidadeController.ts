import { FastifyRequest, FastifyReply } from 'fastify'
import { UpdateMensalidadeService } from '../../services/mensalidade/UpdateMensalidadeService';

interface UpdateProps {
    id: string,
    pago: string,
    dataMensalidade: string,
    mes: string,
    ano: string,
    valor: string,
    visualizar: string,
    cpfUsuarioLogado: string,
}

class UpdateMensalidadeController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string };

        const { pago, dataMensalidade, mes, ano, valor, visualizar, cpfUsuarioLogado } = request.body as UpdateProps

        const service = new UpdateMensalidadeService();

        const _mensalidade = await service.execute({ id, pago, dataMensalidade, mes, ano, valor, visualizar, cpfUsuarioLogado })

        reply.send(_mensalidade)
    }

}

export { UpdateMensalidadeController }