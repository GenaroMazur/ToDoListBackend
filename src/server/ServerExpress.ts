import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import { helmetOptions } from "../utils/helmetOptions";

export class ServerExpress {
    public readonly app: Application;

    constructor() {
        this.app = express();
        this.app.use(
            morgan("dev"),
            cors(),
            express.json(),
            express.urlencoded({ extended: true }),
            helmet(helmetOptions)
        );
    }

}