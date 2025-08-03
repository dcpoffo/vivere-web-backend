import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateOsteopatiaService } from "../../services/osteopatia/UpdateOsteopatiaService";

interface UpdateProps {
    id: string;
    [ key: string ]: any;
}

class UpdateOsteopatiaController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string };

        const updateData = request.body as Omit<UpdateProps, 'id'>;

        const service = new UpdateOsteopatiaService();

        const osteopatia = await service.execute({ id, ...updateData });

        reply.send(osteopatia);
    }
}

export { UpdateOsteopatiaController };
