export type CompanyProduct = {
    "name": string,
    "description": "unknown" | string
}

export type CompanyAbout = {
    "name": null | "string",
    "brief_description": "unknown" | string,
    "detailed_description": "unknown" | string,
    "products": "unknown" | CompanyProduct[]
};

export type YesNoUnknownAnswer = {
    "answer": "unknown" | "yes" | "no",
	"sources": string[]
};

export type CompanyFieldAnswer<T> = {
    "answer": "unknown" | T,
    "sources": string[]
};

export type CompanyTechStackItem = {
    "technology": string,
    "sources": string[]
};

export type CompanyEmployeePages = {
    "software_developer_with_technology_listed": "unknown" | string[],
	"hiring_manager": "unknown" | string[],
	"talent_acquisition_or_recruiter": "unknown" | string[]
};

export type CompanyLinks = {
    "website": "unknown" | string,
    "careers_page": "unknown" | string,
    "page_with_values": "unknown" | string,
    "linkedin_page": "unknown" | string,
    "sample_job_postings": "unknown" | string[],
    "employee_pages": CompanyEmployeePages
}

export type CompanyDataItem = {
    "about": CompanyAbout,
    "comments": string[],
    "hires_interns": YesNoUnknownAnswer,
    "glassdoor_rating": "unknown" | number,
    "available_in_canada": YesNoUnknownAnswer,
    "Canada_office_locations": CompanyFieldAnswer<string[]>,
    "remote_available": YesNoUnknownAnswer,
    "found_how": CompanyFieldAnswer<string>,
    "tech_stack": "unknown" | CompanyTechStackItem[],
    "links": CompanyLinks
};

export type CompanyDataSubmission = {
    "author": null | string,
    "date": null | string,
    "company_data": CompanyDataItem[]
};
