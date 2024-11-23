import prismaClient from "../../prisma";

class FindUsuarioByEmailService {
    async execute(email: string) {
        // Busca o usuário com base no email
        const usuario = await prismaClient.usuario.findUnique({
            where: {
                email: email,  // Encontra o usuário pelo email
            },
        });

        // Verifica se o usuário existe
        if (!usuario) {
            throw new Error('Usuário não encontrado com este e-mail: ' + email);
        }

        return usuario;
    }
}

export { FindUsuarioByEmailService };