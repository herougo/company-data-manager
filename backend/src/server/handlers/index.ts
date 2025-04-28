
const applyErrorHandler = require("./outer/errorHandler");
const applyNotFoundHandler = require("./outer/notFoundHandler");

const applyAllHandlers = (app, diContainer) => {
    applyErrorHandler(app, diContainer);
    applyNotFoundHandler(app, diContainer);
}

module.exports = {
    applyAllHandlers
};
