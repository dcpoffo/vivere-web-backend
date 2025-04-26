import { FastifyReply, FastifyRequest } from "fastify";
import { CreateFotoService } from "../../services/foto/CreateFotoService";

interface CreateProps {
    idPaciente: string,
    dataFoto: string,
    caminho: string
}

class CreateFotoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { idPaciente, dataFoto, caminho } = request.body as CreateProps;

        const service = new CreateFotoService();

        const foto = await service.execute({ idPaciente, dataFoto, caminho })

        reply.send(foto)
    }
}

export { CreateFotoController }