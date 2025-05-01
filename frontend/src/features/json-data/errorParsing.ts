import { ErrorObject } from "ajv";

export type InputErrorObject = Error | ErrorObject;

export type CustomErrorObject = {
    message: string
};

const isAjvError = (error: InputErrorObject): error is ErrorObject => {
    return "instancePath" in error;
};

const transformJsonParsingError = (error: InputErrorObject): CustomErrorObject => {
    if (isAjvError(error)) {
        return {
            message: `${error.instancePath || '/'}: ${error.message}`
        };
    } else {
        return { message: error.message };
    }
};

export {
    transformJsonParsingError
}