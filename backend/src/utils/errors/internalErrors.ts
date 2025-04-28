class MissingDependencyError extends Error {
    constructor(dependencyName: string) {
        super();
        this.message = `Missing dependency ${dependencyName}`;
    }
}

class ExistingDependencyError extends Error {
    constructor(dependencyName: string) {
        super();
        this.message = `Existing dependency ${dependencyName}`;
    }
}

class InvalidConfig extends Error {
    constructor() {
        super();
        this.message = "Config is invalid!";
    }
}

class UndefinedEnvironment extends Error {
    constructor() {
        super();
        this.message = "Undefined Environment";
    }
}

export {};

module.exports = {
    MissingDependencyError, ExistingDependencyError, InvalidConfig, UndefinedEnvironment
}
