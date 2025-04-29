import Ajv from 'ajv';
import companyDataSubmissionSchema from './schema';

const ajv = new Ajv();

const ajvValidate = ajv.compile(companyDataSubmissionSchema);

const validate = (data: object) => {
    const valid = ajvValidate(data);
    const errors = ajvValidate.errors || [];
    return { valid, errors };
}

export default validate;