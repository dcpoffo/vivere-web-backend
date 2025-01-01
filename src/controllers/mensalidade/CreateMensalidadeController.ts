import { FastifyReply, FastifyRequest } from "fastify";
import { CreateMensalidadeService } from "../../services/mensalidade/CreateMensalidadeService";

interface CreateProps {
    idPaciente: string,
    pago: string,
    dataMensalidade: string,
    mes: string,
    ano: string,
    valor: string,
    visualizar: string,
    cpfUsuarioLogado: string,
}

class CreateMensalidadeController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { idPaciente, pago, dataMensalidade, mes, ano, valor, visualizar, cpfUsuarioLogado } = request.body as CreateProps;

        const service = new CreateMensalidadeService();

        const mensalidade = await service.execute({ idPaciente, pago, dataMensalidade, mes, ano, valor, visualizar, cpfUsuarioLogado })

        reply.send(mensalidade);
    }
}

export { CreateMensalidadeController };
