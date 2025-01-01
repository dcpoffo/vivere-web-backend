import prismaClient from "../../prisma";

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

class UpdatePacienteService {

    async execute({ id, nome, cpf, contato1, contato2, dataNascimento, endereco, email, situacao, profissao }: UpdatePacienteProps) {

        if (!id) {
            throw new Error("Sem id não dá pra atualizar")
        }

        const findPaciente = await prismaClient.paciente.findFirst({
            where: {
                id: Number(id)
            }
        })

        if (!findPaciente) {
            throw new Error("Paciente não encontrado")
        }

        if (!nome) {
            throw new Error("O nome precisa ser preenchido")
        }

        if (!cpf) {
            throw new Error("O C.P.F. precisa ser preenchido")
        }

        const cpfDuplicado = await prismaClient.paciente.findFirst({
            where: {
                cpf, id: {
                    not: Number(id), // Excluir o paciente atual da verificação 
                },
            },
        });

        if (cpfDuplicado) {
            throw new Error(`Este C.P.F. já foi cadastrado para ${cpfDuplicado.nome}`);
        }

        const paciente = await prismaClient.paciente.update({
            where: {
                id: findPaciente.id
            },

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
        })

        return paciente

    }

}

export { UpdatePacienteService }