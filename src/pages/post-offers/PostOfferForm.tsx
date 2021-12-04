import React, { useState } from 'react';
import './post-offer.sass';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { EmploymentType, OfferType, SkillsType } from '../../types/offerType';
import { Size } from '../../types/shortTypes';
import { useWindowSize } from '../../helpfuntions/handleScreen/useWindowSize';
import { useAuthSettings } from '../../AuthContext';
import CompanyInfo from './components/CompanyInfo';
import EmploymentInfo from './components/EmploymentInfo';
import Skills from './components/Skills';
import EmploymentInfoType from './components/EmploymentInfoType';
import getLocation from './functions/getCordinates';
import axios from 'axios';

const useStyles = makeStyles(() =>
    createStyles({
        button: {
            width: '100%',
            color: '#fff',
            backgroundColor: '#3f51b5'
        },
    }),
);

const PostOfferFrom = (): JSX.Element => {
    const navigate = useNavigate();
    const size: Size = useWindowSize();
    const style = {
        maxHeight: size.height - 200
    };

    const classes = useStyles();
    const today = new Date().toISOString();

    const { isAuthenticated, role } = useAuthSettings();
    const initialValue = {
        _id: '',
        address_text: '',
        city: '',
        company_logo_url: '',
        company_name: '',
        company_url: '',
        company_size: '',
        employment_types: [],
        experience_level: 'junior',
        id: '',
        latitude: '',
        longitude: '',
        marker_icon: '',
        published_at: '',
        remote: false,
        remote_interview: false,
        skills: [],
        street: '',
        title: '',
        workplace_type: 'remote',
        country_code: 'PL',
    };

    const [formData, setFormData] = React.useState<OfferType>(initialValue);

    const [skills, setSkills] = useState<SkillsType[]>([{
        name: '',
        level: 1
    }]);

    const [employment, setEmployment] = useState<EmploymentType[]>([{
        type: 'b2b',
        salary: null
    }]);

    type ErrorType = {
        error: string
    };
   const [errorArray, setErrorArray] = useState<ErrorType[]>([]);


    const submit = async (formData: OfferType) => {
        employment.map((item) => {
            return formData.employment_types.push(item);
        });
        skills.map((item) => {
            return formData.skills.push(item);
        });

        const geocode = await getLocation(formData.street + ', ' + formData.city + ' ' + 'POLAND');
        await axios.post('http://localhost:3000/offers', {
            title: formData.title,
            street: formData.street,
            city: formData.city,
            country_code: 'PL',
            address_text: (formData.street + ', ' + formData.city),
            company_name: formData.company_name,
            latitude: geocode.latitude,
            longitude: geocode.longitude,
            company_url: formData.company_url,
            company_size: formData.company_size + '+',
            published_at: today,
            company_logo_url: 'https://bucket.justjoin.it/offers/company_logos/thumb/4c551fc844fd284c3bb56a481bf8ee7121045deb.png?1633525582',
            id: (formData.company_name + ' ' + formData.title + ' ' + formData.city).replaceAll(' ', '-'),
            experience_level: formData.experience_level,
            workplace_type: formData.workplace_type,
            remote: formData.remote,
            remote_interview: formData.remote_interview,
            marker_icon: formData.marker_icon,
            skills: formData.skills,
            employment_types: formData.employment_types,
        }, {
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('accessToken') as string)
                    }
            })
            .then(() => {
                alert('FORM SUBMITTED');
                navigate('/mainpage');
            })
            .catch((error) => {
                setFormData({ ...formData, skills: [], employment_types: [] });
                setErrorArray([]);
                error.response.data.message.map((text: string)=> {
                    setErrorArray(setErrorArray =>[...setErrorArray, { error: text }]);
                });
                alert(error.response.data.message);
            });
    };

    if (isAuthenticated && role == 'EMPLOYER') {
        return (
            <>
                <div className="post-offer-background">
                    <div className="post-offer-content" style={style}>
                        <h1>
                            Post offers on JustJoinIt
                        </h1>
                        <CompanyInfo formData={formData} setFormData={setFormData}/>
                        <EmploymentInfo formData={formData} setFormData={setFormData}/>
                        <div>
                            <EmploymentInfoType employment={employment} setEmployment={setEmployment}/>
                        </div>
                        <Skills skills={skills} setSkills={setSkills}/>

                        <Button
                            onClick={ () => submit(formData) }
                            classes={{ root: classes.button }}
                        >
                            Submit
                        </Button>
                        {
                            errorArray.map((item, index) => {
                                return (
                                    <div key={index} className='error'>
                                        {item.error}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

            </>

        );
    } else {
        return (
            <>
                {navigate('/signin')}
            </>
        );
    }
};

export default PostOfferFrom;