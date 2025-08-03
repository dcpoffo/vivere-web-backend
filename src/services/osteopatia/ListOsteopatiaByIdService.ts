import prismaClient from "../../prisma";

class ListOsteopatiaByIdService {
    async execute(id: string) {

        const osteopatia = await prismaClient.osteopatia.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!osteopatia) {
            throw new Error('Osteopatia não encontrada com o Id: ' + id)
        }

        return osteopatia;
    }
}

export { ListOsteopatiaByIdService }