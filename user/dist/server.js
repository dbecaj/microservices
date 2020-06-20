"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const typeorm_1 = require("typeorm");
const routes_1 = require("./routes");
const logger_1 = require("./logger");
const PORT = process.env.PORT;
typeorm_1.createConnection().then(async (connection) => {
    const app = express();
    routes_1.AppRoutes.forEach(route => {
        app[route.method](route.path, (request, response, next) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });
    app.listen(PORT, () => {
        logger_1.Logger.info(`User service is running on port ${PORT}....`);
    });
}).catch(reason => logger_1.Logger.error(reason));
//# sourceMappingURL=server.js.map