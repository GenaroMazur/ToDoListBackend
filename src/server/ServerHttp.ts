import { Server, createServer } from "http";
import { ServerExpress } from "./ServerExpress";
import { envsRequired } from "../utils/envsRequired";

export class ServerHttp {
    private static _instance: ServerHttp;
    public static instance() { return this._instance; }


    private readonly _http: Server;
    public readonly expressServer?: ServerExpress;
    public readonly Environments: Readonly<typeof process.env & { [key in typeof envsRequired[number]]?: string; }>;

    constructor(environments: Readonly<typeof process.env & { [key in typeof envsRequired[number]]?: string; }>, express?: ServerExpress) {
        this.expressServer = express;
        this.Environments = environments;

        this._http = createServer(express?.app);
        ServerHttp._instance = this;
    }


    public async start() {
        this._http.listen(this.Environments.TCPPORT, () => {
            console.log(`Servidor \x1b[32mHTTP escuchando\x1b[0m en http://localhost:${(this._http.address() as any).port}`);
        });

        return this;
    }

    public async stop(_err?: unknown) {
        this._http.close();

        return this;
    }
}