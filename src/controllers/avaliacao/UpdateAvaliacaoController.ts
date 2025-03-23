import { FastifyRequest, FastifyReply } from 'fastify'
import { UpdateAvaliacaoService } from '../../services/avaliacao/UpdateAvaliacaoService'

interface UpdateProps {
    id: string,
    indicacao: string,
    atividadeFisica: string,
    qualAtividadeFisica: string,
    medicacao: string,
    tabagismo: string,
    etilismo: string,
    hipertensao: string,
    doencas: string,
    dores: string,
    posicaoDor: string,
    objetivoPrincipal: string,
    queixaPrincipal: string,
    hda: string,
    hpp: string,
    peso: string,
    altura: string,
    pa: string,
    pes: string,
    joelhos: string,
    pelve: string,
    coluna: string,
    ombros: string,
    escapulas: string,
    cabeca: string,
}

class UpdateAvaliacaoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string };

        const { indicacao, atividadeFisica, qualAtividadeFisica, medicacao, tabagismo, etilismo, hipertensao, doencas, dores, posicaoDor, objetivoPrincipal, queixaPrincipal, hda, hpp, peso, altura, pa, pes, joelhos, pelve, coluna, ombros, escapulas, cabeca } = request.body as UpdateProps

        const service = new UpdateAvaliacaoService();

        const _avaliacao = await service.execute({ id, indicacao, atividadeFisica, qualAtividadeFisica, medicacao, tabagismo, etilismo, hipertensao, doencas, dores, posicaoDor, objetivoPrincipal, queixaPrincipal, hda, hpp, peso, altura, pa, pes, joelhos, pelve, coluna, ombros, escapulas, cabeca })

        reply.send(_avaliacao)
    }

}

export { UpdateAvaliacaoController }