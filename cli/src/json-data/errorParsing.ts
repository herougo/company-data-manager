import { ErrorObject } from "ajv";
import { CustomErrorObject, InputErrorObject } from "./errorParsing.types";


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