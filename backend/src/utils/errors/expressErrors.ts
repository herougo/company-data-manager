class ExpressError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super();
        this.message = message;
        this.status = status;
    }
}

class NotFoundError extends ExpressError {
    constructor(message = "Not Found") {
        super(message, 404);
    }
}

class UnauthorizedError extends ExpressError {
    constructor(message = "Unauthorized") {
        super(message, 401);
    }
}

class BadRequestError extends ExpressError {
    constructor(message = "Bad Request") {
        super(message, 400);
    }
}

class ServerError extends ExpressError {
    constructor(message = "Server Error") {
        super(message, 500);
    }
}

export {
    ExpressError, NotFoundError, UnauthorizedError, BadRequestError, ServerError
}