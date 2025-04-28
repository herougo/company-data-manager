
import applyErrorHandler from "./outer/errorHandler";
import applyNotFoundHandler from "./outer/notFoundHandler";

const applyAllHandlers = (app, diContainer) => {
    applyErrorHandler(app, diContainer);
    applyNotFoundHandler(app, diContainer);
}

export {
    applyAllHandlers
};
