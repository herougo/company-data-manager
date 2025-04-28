import { Application, Request, NextFunction, Response } from "express";
import { NotFoundError } from "../../../utils/errors/expressErrors";
import DependencyInjectionContainer from "../../dependency-injection/container";

const applyNotFoundHandler = (app: Application, diContainer: DependencyInjectionContainer) => {
    // for catching 404 and forwarding to error handler
    const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
        const err = new NotFoundError();
        next(err);
    }

    app.use(notFoundHandler);
}


export default applyNotFoundHandler;
