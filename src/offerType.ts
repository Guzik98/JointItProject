export type EmploymentType = [
    {
        type: string,
        salary: {
            from: number,
            to: number,
            currency: string,
        } | null
    }
];

export type SkillsType = [
    {
        name: string,
        level: number
    }
];

export type OfferType = {
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
    employment_types: EmploymentType
    company_logo_url: string
    skills: SkillsType
    remote: boolean
};
