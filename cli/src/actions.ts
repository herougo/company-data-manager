import fs from 'fs';
import { validateCompanyDataSubmission } from "./json-data";
import { transformJsonParsingError } from "./json-data/errorParsing";
import { readJsonFile } from "./utils";
import { CompanyDataItem, CompanyDataSubmission } from './json-data/schema.types';
import path from 'path';

type ValidateAndLogFailureReturnType = {
    valid: boolean,
    json: object | null
};

const validateAndLogFailure = (source: string): ValidateAndLogFailureReturnType => {
    let json = null;
    try {
        json = readJsonFile(source);
    } catch (ex) {
        console.log('JSON parsing failed');
        if (ex instanceof Error) {
            console.log(ex.toString())
        }
        return { valid: false, json };
    }

    const { valid, errors } = validateCompanyDataSubmission(json);
    if (!valid) {
        console.log('Validation failed!');
        for (const error of errors) {
            console.log('    ' + transformJsonParsingError(error).message);
        }
        return { valid: false, json };
    }

    return { valid: true, json };
};

const companyDataMapping = (companyAnnotation: CompanyDataItem): CompanyDataMappingReturnType => {
    let officeLocations = companyAnnotation.Canada_office_locations.answer;
    let officeLocationsStr = 'unknown';
    if (officeLocations !== 'unknown') {
        officeLocationsStr = officeLocations.join('; ')
    }
    let techStack = companyAnnotation.tech_stack;
    let techStackStr = 'unknown';
    if (techStack !== 'unknown') {
        techStackStr = techStack.map(
            (obj) => obj.technology
        ).join('; ');
    }

    return {
        company_name: companyAnnotation.about.name,
        brief_description: companyAnnotation.about.brief_description,
        comments: companyAnnotation.comments.join(';'),
        hires_interns: companyAnnotation.hires_interns.answer,
        glassdoor_rating: companyAnnotation.glassdoor_rating.toString(),
        available_in_canada: companyAnnotation.available_in_canada.answer,
        Canada_office_locations: officeLocationsStr,
        remote_available: companyAnnotation.remote_available.answer,
        tech_stack: techStackStr,
        website: companyAnnotation.links.website,
    };
}

const COLUMNS: (keyof CompanyDataMappingReturnType)[] = [
    'company_name',
    'brief_description',
    'comments',
    'hires_interns',
    'glassdoor_rating',
    'available_in_canada',
    'Canada_office_locations',
    'remote_available',
    'tech_stack',
    'website'
];

type CompanyDataMappingReturnType = {
    company_name: "string";
    brief_description: string;
    comments: string;
    hires_interns: "unknown" | "yes" | "no";
    glassdoor_rating: string;
    available_in_canada: "unknown" | "yes" | "no";
    Canada_office_locations: string;
    remote_available: "unknown" | "yes" | "no";
    tech_stack: string;
    website: string;
};

const jsonDataToTsv = (jsonData: CompanyDataSubmission[], destination: string): void => {
    const rows = [COLUMNS.join('\t')];

    for (const json of jsonData) {
        for (const companyAnnotation of json.company_data) {
            const rowData = companyDataMapping(companyAnnotation);
            
            const row = [];
            for (let column of COLUMNS) {
                row.push(rowData[column] as string);
            }
            rows.push(row.join('\t'));
        }
    }

    fs.writeFileSync(destination, rows.join('\n'));
};

const validateAction = (source: string) => {
    const { valid } = validateAndLogFailure(source);
    if (valid) {
        console.log('Validation passed!');
    }
};

const toTsvAction = (source: string, destination: string) => {
    let files = fs.readdirSync(source);
    files = files.filter(path => path.endsWith('.json'));
    let allValid = true;
    const jsonData = [];
    for (const file of files) {
        const filePath = path.join(source, file);
        console.log(`Reading ${filePath}`)
        const { valid, json } = validateAndLogFailure(filePath);
        allValid = allValid && valid;
        jsonData.push(json);
    }

    if (!allValid) {
        console.log('Aborting aggregation');
        return;
    }

    jsonDataToTsv(jsonData as CompanyDataSubmission[], destination);
    console.log('Done!')
};

export {
    validateAction,
    toTsvAction
}