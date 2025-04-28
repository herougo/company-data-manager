
import { Application } from "express";
import DependencyInjectionContainer from "../dependency-injection/container";
import applyErrorHandler from "./outer/errorHandler";
import applyNotFoundHandler from "./outer/notFoundHandler";

const applyAllHandlers = (app: Application, diContainer: DependencyInjectionContainer) => {
    applyErrorHandler(app, diContainer);
    applyNotFoundHandler(app, diContainer);
}

export {
    applyAllHandlers
};
