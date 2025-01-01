import prismaClient from "../../prisma";

interface UpdateProps {
    id: string,
    pago: string,
    dataMensalidade: string,
    mes: string,
    ano: string,
    valor: string,
    visualizar: string,
    cpfUsuarioLogado: string,
}

class UpdateMensalidadeService {
    async execute({ id, pago, dataMensalidade, mes, ano, valor, visualizar, cpfUsuarioLogado }: UpdateProps) {

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

        const _mensalidade = await prismaClient.mensalidade.update({
            where: {
                id: Number(id),
            },
            data: {
                //idPaciente: Number(idPaciente),
                pago,
                dataMensalidade,
                mes,
                ano,
                valor,
                visualizar,
                cpfUsuarioLogado
            }
        })

        return _mensalidade
    }
}

export { UpdateMensalidadeService }