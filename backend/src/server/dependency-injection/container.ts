
import { MissingDependencyError, ExistingDependencyError } from "../../utils/errors/internalErrors";
import Logger from "../../utils/logger";

export type Dependency = Logger | Service | Repository;
export type DependencyMap = Record<string, Dependency>;


class DependencyInjectionContainer {
    customDependenciesMap: DependencyMap;
    dependencies: DependencyMap;

    constructor(customDependenciesMap: DependencyMap) {
        this.customDependenciesMap = customDependenciesMap;
        this.dependencies = {...customDependenciesMap};
    }

    register(name: string, dependency: Dependency) {
        if (name in this.dependencies) {
            if (name in this.customDependenciesMap) {
                return this.resolve(name);
            }

            throw new ExistingDependencyError(name);
        }
        this.dependencies[name] = dependency;
        return dependency;
    }

    resolve(name: string) {
        if (!(name in this.dependencies)) {
            throw new MissingDependencyError(name);
        }
        return this.dependencies[name];
    }
}

export default DependencyInjectionContainer;
