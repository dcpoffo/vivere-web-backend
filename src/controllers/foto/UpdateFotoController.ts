import { FastifyRequest, FastifyReply } from 'fastify'
import { UpdateFotoService } from '../../services/foto/UpdateFotoService'

interface UpdateProps {
    id: string,
    dataFoto: string,
    caminho: string
}

class UpdateFotoController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as { id: string };

        const { dataFoto, caminho } = request.body as UpdateProps

        const service = new UpdateFotoService();

        const foto = await service.execute({ id, dataFoto, caminho })

        reply.send(foto)
    }
}

export { UpdateFotoController }