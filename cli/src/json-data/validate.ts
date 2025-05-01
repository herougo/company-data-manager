import Ajv from 'ajv';
import ajvKeywords from "ajv-keywords";
import companyDataSubmissionSchema from './schema';

const ajv = new Ajv({allErrors: true});
ajvKeywords(ajv);

const ajvValidate = ajv.compile(companyDataSubmissionSchema);

const validateCompanyDataSubmission = (data: object) => {
    const valid = ajvValidate(data);
    const errors = ajvValidate.errors || [];
    return { valid, errors };
}

export default validateCompanyDataSubmission;