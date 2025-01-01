import { FastifyReply, FastifyRequest } from "fastify";
import { CreatePacienteService } from "../../services/paciente/CreatePacienteService";


interface CreatePacienteProps {
    nome: string,
    cpf: string,
    contato1?: string,
    contato2?: string,
    dataNascimento?: string,
    endereco?: string,
    email?: string,
    situacao?: string,
    profissao?: string
}

class CreatePacienteController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { nome, cpf, contato1, contato2, dataNascimento, endereco, email, situacao, profissao } = request.body as CreatePacienteProps;

        const pacienteService = new CreatePacienteService();

        const paciente = await pacienteService.execute({ nome, cpf, contato1, contato2, dataNascimento, endereco, email, situacao, profissao })

        reply.send(paciente);
    }
}

export { CreatePacienteController }