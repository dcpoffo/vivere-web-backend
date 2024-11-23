import { FastifyReply, FastifyRequest } from "fastify";
import { ListPacienteService } from "../../services/paciente/ListPacienteService";

class ListPacientesController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const listPacientesService = new ListPacienteService();

        const pacientes = await listPacientesService.execute();

        reply.send(pacientes)
    }
}

export { ListPacientesController };
