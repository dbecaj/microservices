"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const winston_1 = require("winston");
const logger = winston_1.createLogger({
    level: 'info',
    format: winston_1.format.combine(winston_1.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }), winston_1.format.errors({ stack: true }), winston_1.format.splat(), winston_1.format.json()),
    transports: [
        new winston_1.transports.File({ filename: 'logs/app-errors.log', level: 'error' }),
        new winston_1.transports.File({ filename: 'logs/app.log' }),
    ]
});
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston_1.transports.Console({
        format: winston_1.format.combine(winston_1.format.timestamp({
            format: 'HH:mm:ss',
        }), winston_1.format.colorize(), winston_1.format.simple(), winston_1.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`))
    }));
}
class Logger {
    static info(message) {
        logger.info(message);
    }
    static error(message) {
        logger.error(message);
        if (process.env.NODE_ENV !== 'production') {
            if (message.stack)
                console.log(message.stack);
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map