
import { Application, NextFunction, Request, RequestHandler, Response } from "express";
import { ExpressError } from "../../../utils/errors/expressErrors";
import Logger from "../../../utils/logger";
import DependencyInjectionContainer from "../../dependency-injection/container";
import DINames from "../../dependency-injection/names";

const applyErrorHandler = (app: Application, diContainer: DependencyInjectionContainer) => {
    const logger = diContainer.resolve(DINames.Logger) as Logger;

    const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): any => {
        logger.error(err.toString());

        if (!(err instanceof ExpressError)) {
            logger.error(`error handler saw a non-express error: ${err}`);
            return res.status(500).send();
        }

        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            },
        });
    };

    app.use(errorHandler);
};

export default applyErrorHandler;
