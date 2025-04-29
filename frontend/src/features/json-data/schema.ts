import { AjvTypes } from "./enums";


const companyProductSchema = {
    type: "object",
    properties: {
        name: { type: "string" },
	    description: AjvTypes.UnknownOrString
    },
    allRequired: true,
    additionalProperties: false
};

const companyAboutSchema = {
	type: "object",
    properties: {
        name: AjvTypes.StringOrNull,
        brief_description: AjvTypes.UnknownOrString,
	    detailed_description: AjvTypes.UnknownOrString,
		products: {
			anyOf: [
				{ type: "string", enum: ["unknown"] },
				{ type: 'array', items: companyProductSchema }
			]
		}
    },
    allRequired: true,
    additionalProperties: false
};

const yesNoUnknownAnswerSchema = {
    type: "object",
    properties: {
        answer: { type: "string", enum: ["unknown", "yes", "no"] },
	    sources: AjvTypes.StringArray
    },
    allRequired: true,
    additionalProperties: false
};

const companyFieldStringAnswerSchema = {
    type: "object",
    properties: {
        answer: AjvTypes.UnknownOrString,
	    sources: AjvTypes.StringArray
    },
    allRequired: true,
    additionalProperties: false
};

const companyFieldStringArrayAnswerSchema = {
    type: "object",
    properties: {
        "answer": AjvTypes.UnknownOrStringArray,
	    "sources": AjvTypes.StringArray
    },
    allRequired: true,
    additionalProperties: false
};

const companyTechStackItemSchema = {
    type: "object",
    properties: {
        technology: { type: "string" },
	    sources: AjvTypes.StringArray
    },
    allRequired: true,
    additionalProperties: false
};

const companyEmployeePagesSchema = {
	type: "object",
    properties: {
        software_developer_with_technology_listed: AjvTypes.UnknownOrStringArray,
		hiring_manager: AjvTypes.UnknownOrStringArray,
		talent_acquisition_or_recruiter: AjvTypes.UnknownOrStringArray
    },
    allRequired: true,
    additionalProperties: false
};

const companyLinksSchema = {
	type: "object",
    properties: {
        website: AjvTypes.UnknownOrString,
		careers_page: AjvTypes.UnknownOrString,
		page_with_values: AjvTypes.UnknownOrString,
		linkedin_page: AjvTypes.UnknownOrString,
		sample_job_postings: AjvTypes.UnknownOrStringArray,
		employee_pages: companyEmployeePagesSchema
    },
    allRequired: true,
    additionalProperties: false
};


const companyDataItemSchema = {
    type: 'object',
    properties: {
        about: companyAboutSchema,
        comments: AjvTypes.StringArray,
        hires_interns: yesNoUnknownAnswerSchema,
        glassdoor_rating: AjvTypes.UnknownOrFloat32,
        available_in_canada: yesNoUnknownAnswerSchema,
        Canada_office_locations: companyFieldStringArrayAnswerSchema,
        remote_available: yesNoUnknownAnswerSchema,
        found_how: companyFieldStringAnswerSchema,
        tech_stack: {
			anyOf: [
				{ type: "string", enum: ["unknown"] },
				{ type: 'array', items: companyTechStackItemSchema }
			]
		},
        links: companyLinksSchema
    },
    allRequired: true,
    additionalProperties: false
};

const companyDataSubmissionSchema = {
    type: "object",
    properties: {
        author: AjvTypes.StringOrNull,
        date: AjvTypes.StringOrNull,
        company_data: {
            type: 'array',
            items: companyDataItemSchema
        }
    },
    allRequired: true,
    additionalProperties: false
};

export default companyDataSubmissionSchema;

