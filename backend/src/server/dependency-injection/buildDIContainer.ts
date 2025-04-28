import Logger from "../../utils/logger";
import DependencyInjectionContainer from "./container";
import DI_NAMES from "./names";


const buildDIContainer = (customDependenciesMap) => {
    const container = new DependencyInjectionContainer(customDependenciesMap);

    const logger = container.register(DI_NAMES.logger, new Logger());
    
    return container;
}

export default buildDIContainer;