const Logger = require("../../utils/logger");
const DependencyInjectionContainer = require("./container");
const DI_NAMES = require("./names");


const buildDIContainer = (customDependenciesMap) => {
    const container = new DependencyInjectionContainer(customDependenciesMap);

    const logger = container.register(DI_NAMES.logger, new Logger());
    
    return container;
}

module.exports = buildDIContainer;