import { EmploymentType, SkillsType } from './offerType';

type OfferTypeDetail = {
    body: string,
    apply_body: null,
    title: string,
    street: string,
    city: string,
    country_code: string,
    address_text: string,
    marker_icon: string,
    workplace_type: string
    company_name: string,
    company_url: string,
    company_size: string,
    experience_level: string,
    latitude: string,
    longitude: string,
    apply_url: string,
    published_at: string,
    remote_interview: string,
    video_key: null,
    video_provider: string,
    future_consent_title: string,
    future_consent: string,
    information_clause: string,
    custom_content_title: string | null,
    custom_consent: string | null,
    id: string,
    tags: [],
    company_logo_url: string,
    banner_url: null,
    skills: SkillsType,
    remote: boolean,
    employment_types : EmploymentType[]
    company_profile: {
        url: string,
        short_description: string,
        cover_photo_url: string,
    }
};
export default OfferTypeDetail;