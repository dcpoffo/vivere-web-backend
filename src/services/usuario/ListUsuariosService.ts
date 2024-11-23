import prismaClient from "../../prisma";

class ListUsuariosService {
    async execute() {

        const usuarios = await prismaClient.usuario.findMany(
            {
                orderBy: {
                    id: 'asc'
                }
            }
        );

        return usuarios;
    }
}

export { ListUsuariosService }