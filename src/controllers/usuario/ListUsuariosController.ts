import { FastifyReply, FastifyRequest } from "fastify";
import { ListUsuariosService } from "../../services/usuario/ListUsuariosService";



class ListUsuariosController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const listUsuariosService = new ListUsuariosService();

        const usuarios = await listUsuariosService.execute();

        reply.send(usuarios)
    }
}

export { ListUsuariosController };
