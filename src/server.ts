import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = Fastify({ logger: true })

const start = async () => {

    //await app.register(cors);
    await app.register(cors, {
        origin: 'https://vivere-web.vercel.app', // Substitua pela URL do seu frontend
        methods: [ 'GET', 'POST', 'PUT', 'DELETE' ], // Métodos permitidos
        allowedHeaders: [ 'Content-Type', 'Authorization' ], // Cabeçalhos permitidos
        credentials: true, // Se você precisar enviar cookies (como tokens de sessão)
    });

    await app.register(routes)

    try {
        await app.listen({ port: 3333 });
        console.log('Servidor rodando na porta 3333');
    } catch (err) {
        process.exit(1)
    }
}

start();