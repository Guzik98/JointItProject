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
    const { isAuthenticated, role } = useAuthSettings();

    const [formData, setFormData] = React.useState<OfferType>({
        _id: '',
        address_text: '',
        city: '',
        company_logo_url: '',
        company_name: '',
        company_size: '',
        company_url: '',
        employment_types: [],
        experience_level: '',
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
        workplace_type: '',
        country_code: 'pl'
    });

    const [skills, setSkills] = useState<SkillsType[]>([{
        name: '',
        level: 1
    }]);

    const [employment, setEmployment] = useState<EmploymentType[]>([]);


    const submit = () => {
        skills.map((item) => {
            console.log(item);
            return formData.skills.push(item);
        });
        employment.map((item) => {
            return formData.employment_types.push(item);
        });
        alert('FORM SUBMITTED');
        console.log(formData);
        console.log(skills);
    };


    // const incrementSkillCounter = () => {
    //     setSkillCounter( skillCounter + 1);
    // }

    const style = {
        maxHeight: size.height - 200
    };

    const classes = useStyles();
    // const today = new Date().toISOString();

    // const onSubmit: SubmitHandler<OfferType> = async (offer) => {
    //     const geocode = await getLocation(offer.street + ', ' + offer.city + ' ' + 'POLAND');
    //     let setRemote = false;
    //     if (offer.workplace_type === 'remote') {
    //         setRemote = true;
    //     }

    //     await axios.post('http://localhost:3000/offers', {
    //         title: offer.title,
    //         street: offer.street,
    //         city: offer.city,
    //         country_code: 'PL',
    //         address_text: (offer.street + ', ' + offer.city),
    //         company_name: offer.company_name,
    //         latitude: geocode.latitude,
    //         longitude: geocode.longitude,
    //         company_url: offer.company_url,
    //         company_size: offer.company_size + '+',
    //         published_at: today,
    //         company_logo_url: 'https://bucket.justjoin.it/offers/company_logos/thumb/4c551fc844fd284c3bb56a481bf8ee7121045deb.png?1633525582',
    //         id: (offer.company_name + ' ' + offer.title + ' ' + offer.city).replaceAll(' ', '-'),
    //         experience_level: offer.experience_level,
    //         workplace_type: offer.workplace_type,
    //         remote: setRemote,
    //         remote_interview: interview,
    //         marker_icon: markerIconhook.toLowerCase(),
    //         skills: [
    //             {
    //                 name: 'javascript',
    //                 level: '2',
    //             },
    //             {
    //                 name: 'java',
    //                 level: '1',
    //             }
    //         ],
    //         employment_types: [
    //             {
    //                 type: 'b2b',
    //                 salary: {
    //                     from: 90000,
    //                     to: 98000,
    //                     currency: 'pln'
    //                 }
    //             }
    //         ]
    //     })
    //         .then(() => {
    //             navigate('/mainpage');
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    if (isAuthenticated && role == 'EMPLOYER') {
        return (
            <div className="post-offer-background">
                <div className="post-offer-content" style={style}>
                    <h1>
                        Post offers on JustJoinIt
                    </h1>
                    <CompanyInfo formData={formData} setFormData={setFormData}/>
                    <EmploymentInfo formData={formData} setFormData={setFormData}/>

                    <EmploymentInfoType employment={employment} setEmployment={setEmployment}/>
                    <Skills skills={skills} setSkills={setSkills}/>

                    <Button
                        onClick={submit}
                        classes={{ root: classes.button }}
                    >
                        Submit
                    </Button>
                </div>
            </div>
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