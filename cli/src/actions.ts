import { validateCompanyDataSubmission } from "./json-data";
import { transformJsonParsingError } from "./json-data/errorParsing";
import { readJsonFile } from "./utils";

const validateAction = (source: string) => {
    let json = null;
    try {
        json = readJsonFile(source);
    } catch (ex) {
        console.log('JSON parsing failed');
        if (ex instanceof Error) {
            console.log(ex.toString())
        }
        return
    }

    const { valid, errors } = validateCompanyDataSubmission(json);
    if (valid) {
        console.log('Validation passed!');
    }
    console.log('Validation failed!');
    for (const error of errors) {
        console.log('    ' + transformJsonParsingError(error).message);
    }
};

const aggregateAction = (source: string, destination: string) => {
    console.log(source);
};

const toTsvAction = (source: string, destination: string) => {
    console.log(source);
};

export {
    validateAction,
    aggregateAction,
    toTsvAction
}