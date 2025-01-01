import prismaClient from "../../prisma";

class FindUsuarioByEmailService {
    async execute(email: string) {

        const bcrypt = require('bcrypt');
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

        // const isPasswordValid = await bcrypt.compare(senha, usuario.password);
        // console.log(senha)
        // console.log(usuario.password)
        // console.log(isPasswordValid)

        // if (!isPasswordValid) {
        //     throw new Error('Senha inválida ' + usuario.password);
        // }

        return usuario;
    }
}

export { FindUsuarioByEmailService };