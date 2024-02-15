import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import swaggerJSDoc from "swagger-jsdoc";
import { swaggerOptions } from "../utils/swaggerOptions";
import swaggerUi from "swagger-ui-express";
import { helmetOptions } from "../utils/helmetOptions";

export class ServerExpress {
    public readonly app: Application;

    constructor() {
        const swagger = swaggerJSDoc(swaggerOptions);
        this.app = express();
        this.app.use(
            morgan("dev"),
            cors(),
            express.json(),
            express.urlencoded({ extended: true }),
            helmet(helmetOptions)
        );

        this.app.use("/api  -doc", swaggerUi.serve, swaggerUi.setup(swagger));
    }


}