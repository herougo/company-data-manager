import { ErrorObject } from "ajv";

export type InputErrorObject = Error | ErrorObject;

export type CustomErrorObject = {
    message: string
};