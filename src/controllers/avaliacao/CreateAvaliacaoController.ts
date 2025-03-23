import { FastifyReply, FastifyRequest } from "fastify"
import { CreateAvalicaoService } from "../../services/avaliacao/CreateAvalicaoService"

interface CreateProps {
    idPaciente: string,
    indicacao?: string,
    atividadeFisica?: string,
    qualAtividadeFisica?: string,
    medicacao?: string,
    tabagismo?: string,
    etilismo?: string,
    hipertensao?: string,
    doencas?: string,
    dores?: string,
    posicaoDor?: string,
    objetivoPrincipal?: string,
    queixaPrincipal?: string,
    hda?: string,
    hpp?: string,
    peso?: string,
    altura?: string,
    pa?: string,
    pes?: string,
    joelhos?: string,
    pelve?: string,
    coluna?: string,
    ombros?: string,
    escapulas?: string,
    cabeca?: string
}

class CreateAvaliacaoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { idPaciente, indicacao, atividadeFisica, qualAtividadeFisica, medicacao, tabagismo, etilismo, hipertensao, doencas, dores, posicaoDor, objetivoPrincipal, queixaPrincipal, hda, hpp, peso, altura, pa, pes, joelhos, pelve, coluna, ombros, escapulas, cabeca } = request.body as CreateProps;

        const service = new CreateAvalicaoService();

        const avaliacao = await service.execute({ idPaciente, indicacao, atividadeFisica, qualAtividadeFisica, medicacao, tabagismo, etilismo, hipertensao, doencas, dores, posicaoDor, objetivoPrincipal, queixaPrincipal, hda, hpp, peso, altura, pa, pes, joelhos, pelve, coluna, ombros, escapulas, cabeca })

        reply.send(avaliacao)
    }

}

export { CreateAvaliacaoController }