import Logger from "../../utils/logger";
import DependencyInjectionContainer, { DependencyMap } from "./container";
import DINames from "./names";


const buildDIContainer = (customDependenciesMap: DependencyMap) => {
    const container = new DependencyInjectionContainer(customDependenciesMap);

    const logger = container.register(DINames.Logger, new Logger());
    
    return container;
}

export default buildDIContainer;