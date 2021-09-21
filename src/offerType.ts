type SalaryType = {
    from: number,
    to: number,
    currency: string,
};

type EmploymentType = {
    type: string,
    salary: null | Array<SalaryType>
};

type SkillsType = {
    name: string,
    level: number
};

type OfferType = {
    title: string,
    street: string,
    city: string
    country_code: string,
    address_text: string,
    marker_icon: string,
    workplace_type: string,
    company_name: string,
    company_url: string,
    company_size: string
    experience_level: string,
    latitude: string,
    longitude: string,
    published_at: string,
    remote_interview: boolean,
    id: string,
    employment_types: Array<EmploymentType>
    company_logo_url: string
    skills: Array<SkillsType>
    remote: boolean
};

export default  OfferType;