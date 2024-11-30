import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = Fastify({ logger: true });

const start = async () => {
    const allowedOrigins = [
        'https://vivere-web.vercel.app', // Origem de produção
        'http://localhost:3000', // Origem do desenvolvimento
    ];

    await app.register(cors, {
        origin: (origin, callback) => {
            // Permite requisições sem origem (ex.: Postman ou cURL)
            if (!origin) {
                return callback(null, true);
            }

            // Verifica se a origem está na lista permitida
            if (allowedOrigins.includes(origin)) {
                return callback(null, true); // Primeiro argumento é null para indicar que não houve erro
            } else {
                return callback(new Error("Not allowed by CORS"), false); // Segundo argumento é false para rejeitar
            }
        },
        methods: [ 'GET', 'POST', 'PUT', 'DELETE' ], // Métodos permitidos
        allowedHeaders: [ 'Content-Type', 'Authorization' ], // Cabeçalhos permitidos
        credentials: true, // Permitir cookies ou credenciais
    });

    await app.register(routes);

    try {
        await app.listen({ port: 3333 });
        console.log("Servidor rodando na porta 3333");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();

// import Fastify from "fastify";
// import cors from "@fastify/cors";
// import { routes } from "./routes";

// const app = Fastify({ logger: true })

// const start = async () => {

//     const allowedOrigins = [
//         'https://vivere-web.vercel.app', // Origem de produção
//         'http://localhost:3000', // Origem do desenvolvimento
//     ];

//     //await app.register(cors);
//     await app.register(cors, {
//         origin: 'https://vivere-web.vercel.app', // Substitua pela URL do seu frontend
//         methods: [ 'GET', 'POST', 'PUT', 'DELETE' ], // Métodos permitidos
//         allowedHeaders: [ 'Content-Type', 'Authorization' ], // Cabeçalhos permitidos
//         credentials: true, // Se você precisar enviar cookies (como tokens de sessão)
//     });

//     await app.register(routes)

//     try {
//         await app.listen({ port: 3333 });
//         console.log('Servidor rodando na porta 3333');
//     } catch (err) {
//         process.exit(1)
//     }
// }

// start();