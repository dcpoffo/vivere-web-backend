import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify"

import { ListUsuariosController } from "./controllers/usuario/ListUsuariosController";
import { FindUsuarioByEmailController } from "./controllers/usuario/FindUsuarioByEmailController";
import { ListPacientesController } from "./controllers/paciente/ListPacientesController";
import { ListAtendimentoByPacienteController } from "./controllers/atendimento/ListAtendimentoByPacienteController";
import { ListPacienteByIdController } from "./controllers/paciente/ListPacienteByIdController";
import { ListMensalidadeByPacienteController } from "./controllers/mensalidade/ListMensalidadeByPacienteController";
import { UpdatePacienteController } from "./controllers/paciente/UpdatePacienteController";
import { CreatePacienteController } from "./controllers/paciente/CreatePacienteController";
import { CreateAtendimentoController } from "./controllers/atendimento/CreateAtendimentoController";
import { ListAtendimentoByIdController } from "./controllers/atendimento/ListAtendimentoByIdController";
import { UpdateAtendimentoController } from "./controllers/atendimento/UpdateAtendimentoController";
import { ListMensalidadeByIdController } from "./controllers/mensalidade/ListMensalidadeByIdController";
import { UpdateMensalidadeController } from "./controllers/mensalidade/UpdateMensalidadeController";
import { CreateMensalidadeController } from "./controllers/mensalidade/CreateMensalidadeController";
import { ListAvaliacaoByIdController } from "./controllers/avaliacao/ListAvaliacaoByIdController";
import { ListAvaliacaoByPacienteController } from "./controllers/avaliacao/ListAvaliacaoByPacienteController";
import { UpdateAvaliacaoController } from "./controllers/avaliacao/UpdateAvaliacaoController";
import { CreateAvaliacaoController } from "./controllers/avaliacao/CreateAvaliacaoController";
import { ListFotoByPacienteController } from "./controllers/foto/ListFotoByPacienteController";
import { UpdateFotoController } from "./controllers/foto/UpdateFotoController";
import { ListFotoByIdController } from "./controllers/foto/ListFotoByIdController";
import { CreateFotoController } from "./controllers/foto/CreateFotoController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    //paciente
    fastify.get("/pacientes", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListPacientesController().handle(request, reply);
    })

    fastify.get("/paciente", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListPacienteByIdController().handle(request, reply);
    })

    fastify.put("/paciente", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdatePacienteController().handle(request, reply);
    })

    fastify.post("/paciente", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreatePacienteController().handle(request, reply);
    })

    //usuarios
    fastify.get("/usuarios", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsuariosController().handle(request, reply);
    })

    fastify.get("/usuario", async (request: FastifyRequest, reply: FastifyReply) => {
        return new FindUsuarioByEmailController().handle(request, reply);
    })

    //atendimentos
    //pelo Id do paciente
    fastify.get("/atendimento", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListAtendimentoByPacienteController().handle(request, reply);
    })

    //pelo Id proprio
    fastify.get("/atendimento/id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListAtendimentoByIdController().handle(request, reply);
    })

    fastify.post("/atendimento", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateAtendimentoController().handle(request, reply);
    })

    fastify.put("/atendimento", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateAtendimentoController().handle(request, reply);
    })


    //mensalidades
    //pelo Id do paciente
    fastify.get("/mensalidade", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListMensalidadeByPacienteController().handle(request, reply);
    })

    //pelo Id proprio
    fastify.get("/mensalidade/id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListMensalidadeByIdController().handle(request, reply);
    })

    fastify.put("/mensalidade", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateMensalidadeController().handle(request, reply);
    })

    fastify.post("/mensalidade", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateMensalidadeController().handle(request, reply);
    })

    //avaliacoes
    //pelo Id do paciente
    fastify.get("/avaliacao", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListAvaliacaoByPacienteController().handle(request, reply);
    })

    //pelo Id proprio
    fastify.get("/avaliacao/id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListAvaliacaoByIdController().handle(request, reply);
    })

    fastify.put("/avaliacao", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateAvaliacaoController().handle(request, reply);
    })

    fastify.post("/avaliacao", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateAvaliacaoController().handle(request, reply);
    })

    //fotos
    //pelo Id do paciente
    fastify.get("/foto", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListFotoByPacienteController().handle(request, reply);
    })

    //pelo Id proprio
    fastify.get("/foto/id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListFotoByIdController().handle(request, reply);
    })

    fastify.put("/foto", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateFotoController().handle(request, reply);
    })

    fastify.post("/foto", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateFotoController().handle(request, reply);
    })

}