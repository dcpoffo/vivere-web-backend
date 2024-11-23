import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify"

import { ListUsuariosController } from "./controllers/usuario/ListUsuariosController";
import { FindUsuarioByEmailController } from "./controllers/usuario/FindUsuarioByEmailController";
import { ListPacientesController } from "./controllers/paciente/ListPacientesController";
import { request } from "http";
import { ListAtendimentoByPacienteController } from "./controllers/atendimento/ListAtendimentoByPacienteController";
import { ListPacienteByIdController } from "./controllers/paciente/ListPacienteByIdController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    //paciente
    fastify.get("/pacientes", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListPacientesController().handle(request, reply);
    })

    //paciente
    fastify.get("/paciente", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListPacienteByIdController().handle(request, reply);
    })

    //usuarios
    fastify.get("/usuarios", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsuariosController().handle(request, reply);
    })

    fastify.get("/usuario", async (request: FastifyRequest, reply: FastifyReply) => {
        return new FindUsuarioByEmailController().handle(request, reply);
    })

    //atendimentos
    fastify.get("/atendimento", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListAtendimentoByPacienteController().handle(request, reply);
    })

}