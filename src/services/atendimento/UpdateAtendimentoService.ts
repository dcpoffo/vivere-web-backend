import prismaClient from "../../prisma";

interface UpdateAtendimentoProps {
    id: string,
    //idPaciente: string,
    dataAtendimento: string,
    observacao: string,
    anotacoes: string,
    atendimento: string
}

class UpdateAtendimentoService {
    async execute({ id, dataAtendimento, observacao, anotacoes, atendimento }: UpdateAtendimentoProps) {

        // if (!idPaciente) {
        //     throw new Error("Paciente precisa ser preenchido")
        // }

        // const findPaciente = await prismaClient.paciente.findUnique({
        //     where: {
        //         id: Number(idPaciente),
        //     }
        // })

        // if (!findPaciente) {
        //     throw new Error("Paciente não encontrado");
        // }

        // if (!dataAtendimento) {
        //     throw new Error("A Data precisa ser preenchida")
        // }

        if (!observacao) {
            throw new Error("Observação precisa ser preenchida")
        }

        if (!atendimento) {
            throw new Error("Atendimento precisa ser preenchido")
        }

        const _atendimento = await prismaClient.atendimento.update({
            where: {
                id: Number(id),
            },
            data: {
                //idPaciente: Number(idPaciente),
                dataAtendimento,
                observacao,
                anotacoes,
                atendimento
            }
        })

        return _atendimento
    }
}

export { UpdateAtendimentoService }