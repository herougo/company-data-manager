
import express from "express";
import applyRoutes from "./routes";
import applyMiddleware from "./middleware";
import initAllLoaders from "../loaders";
import { applyAllHandlers } from "./handlers";
import buildDIContainer from "./dependency-injection/buildDIContainer";
import DINames from "./dependency-injection/names";

const createApp = async (customDependenciesMap = null) => {
    const diContainer = buildDIContainer(customDependenciesMap);
    const logger = diContainer.resolve(DINames.Logger);
    await initAllLoaders(logger);

    const app = express();
    applyMiddleware(app, diContainer);
    applyRoutes(app, diContainer);
    applyAllHandlers(app, diContainer);

    return { app, diContainer };
};

export default createApp;
