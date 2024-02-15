import { config } from "dotenv";
config();

import { ServerExpress } from "./server/ServerExpress";
import { ServerHttp } from "./server/ServerHttp";

const express = new ServerExpress();
const server = new ServerHttp(process.env, express);

(async () => {
    try {
        await server.start();
    } catch (error) {
        await server.stop();
    }
})();

process.on("SIGINT", () => {
    server.stop();
    console.log("TERMINANDO PROCESO");
});

process.once('SIGUSR2', async function () {
    console.log("TERMINADO PROCESO");
    await server.stop();
    process.kill(process.pid, 'SIGUSR2');
});
