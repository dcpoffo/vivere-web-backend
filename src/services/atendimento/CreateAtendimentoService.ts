import prismaClient from "../../prisma"

interface CreateAtendimentoProps {
    idPaciente: string,
    dataAtendimento?: string,
    observacao: string,
    anotacoes?: string,
    atendimento: string
}

class CreateAtendimentoService {
    async execute({ idPaciente, dataAtendimento, observacao, anotacoes, atendimento }: CreateAtendimentoProps) {

        if (!idPaciente) {
            throw new Error("Paciente precisa ser preenchido")
        }

        const findPaciente = await prismaClient.paciente.findUnique({
            where: {
                id: Number(idPaciente),
            }
        })

        if (!findPaciente) {
            throw new Error("Paciente não encontrado");
        }

        // if (!dataAtendimento) {
        //     throw new Error("A Data precisa ser preenchida")
        // }

        if (!observacao) {
            throw new Error("Observação precisa ser preenchida")
        }

        if (!atendimento) {
            throw new Error("Atendimento precisa ser preenchido")
        }

        const NovoAtendimento = await prismaClient.atendimento.create({
            data: {
                idPaciente: Number(idPaciente),
                dataAtendimento: dataAtendimento ? new Date(dataAtendimento).toISOString() : new Date().toISOString(),
                observacao,
                anotacoes,
                atendimento: atendimento,
            },
        })

        return NovoAtendimento
    }
}

export { CreateAtendimentoService }