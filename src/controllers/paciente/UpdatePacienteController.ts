import { FastifyRequest, FastifyReply } from 'fastify'
import { UpdatePacienteService } from '../../services/paciente/UpdatePacienteService';

interface UpdatePacienteProps {
    id: string,
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

class UpdatePacienteController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string };

        const { nome, cpf, contato1, contato2, dataNascimento, endereco, email, situacao, profissao } = request.body as UpdatePacienteProps;

        const pacienteService = new UpdatePacienteService();

        const paciente = await pacienteService.execute({ id, nome, cpf, contato1, contato2, dataNascimento, endereco, email, situacao, profissao })

        reply.send(paciente);
    }
}

export { UpdatePacienteController }