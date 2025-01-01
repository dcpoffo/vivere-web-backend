import prismaClient from "../../prisma";

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

class CreatePacienteService {
    async execute({ nome, cpf, contato1, contato2, dataNascimento, endereco, email, situacao, profissao }: CreatePacienteProps) {

        if (!nome) {
            throw new Error("O nome precisa ser preenchido");
        }

        if (!cpf) {
            throw new Error("O C.P.F. precisa ser preenchido");
        }

        // Verificar duplicidade de C.P.F.
        const existeCPF = await prismaClient.paciente.findFirst({
            where: { cpf }
        });

        if (existeCPF) {
            throw new Error(`Este C.P.F. já foi cadastrado para ${existeCPF.nome}`);
        }

        // Criar o paciente
        const paciente = await prismaClient.paciente.create({
            data: {
                nome,
                cpf,
                contato1,
                contato2,
                dataNascimento,
                endereco,
                email,
                situacao,
                profissao
            }
        });

        return paciente;
    }
}

export { CreatePacienteService };
