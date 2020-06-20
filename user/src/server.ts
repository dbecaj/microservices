import {Request, Response} from "express";
import * as express from "express";
import { createConnection } from "typeorm";
import { AppRoutes } from "./routes";
import { Logger } from "./logger";

const PORT = process.env.PORT;

createConnection().then(async connection => {
    const app = express();

    // register all application routes
    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    // run app
    app.listen(PORT, () => {
        Logger.info(`User service is running on port ${PORT}....`);
    });
}).catch(reason => Logger.error(reason));