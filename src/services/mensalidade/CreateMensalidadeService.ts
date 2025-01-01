import prismaClient from "../../prisma"

interface CreateProps {
    idPaciente: string,
    pago: string,
    dataMensalidade: string,
    mes: string,
    ano: string,
    valor: string,
    visualizar: string,
    cpfUsuarioLogado: string,
}

class CreateMensalidadeService {
    async execute({ idPaciente, pago, dataMensalidade, mes, ano, valor, visualizar, cpfUsuarioLogado }: CreateProps) {

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

        if (!dataMensalidade) {
            throw new Error("A Data precisa ser preenchida")
        }

        if (!pago) {
            throw new Error("Pago precisa ser preenchido")
        }

        if (!mes) {
            throw new Error("Mês precisa ser preenchido")
        }
        if (!ano) {
            throw new Error("Ano precisa ser preenchido")
        }
        if (!valor) {
            throw new Error("Valor precisa ser preenchido")
        }
        if (!visualizar) {
            throw new Error("Visualizar precisa ser preenchido")
        }
        if (!cpfUsuarioLogado) {
            throw new Error("CPF usuário logado precisa ser preenchido")
        }

        const _mensalidade = await prismaClient.mensalidade.create({
            data: {
                idPaciente: Number(idPaciente),
                dataMensalidade: dataMensalidade ? new Date(dataMensalidade).toISOString() : new Date().toISOString(),
                pago,
                mes,
                ano,
                valor,
                visualizar,
                cpfUsuarioLogado
            },
        })

        return _mensalidade
    }
}

export { CreateMensalidadeService }