import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EmploymentInfoType from '../post-offers/components/EmploymentInfoType';
import { EmploymentType, OfferType, SkillsType } from '../../types/offerType';
import Skills from '../post-offers/components/Skills';
import { Size } from '../../types/shortTypes';
import { useWindowSize } from '../../helpfuntions/handleScreen/useWindowSize';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
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


const EditOffer = () : JSX.Element => {
    const navigate = useNavigate();
    const location = useLocation();
    const offer: OfferType = location.state;
    const size: Size = useWindowSize();
    const classes = useStyles();
    const style = {
        maxHeight: size.height - 200
    };

    const [employment, setEmployment] = useState<EmploymentType[]>(offer.employment_types);
    const [skill, setSkill] = useState<SkillsType[]>(offer.skills);

    const submit = async () => {
        await axios.post(`http://localhost:3000/offers/your-offers/${offer._id}`,
            {
                skills: skill,
                employment_types: employment
            },
            {
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('accessToken') as string)
            }
        }).then(() => {
                alert('FORM UPDATED');
                navigate('/mainpage');
            })
        .catch((response) => {
            console.log(response.data);
        });
    };

    return (
            <div className="post-offer-background">
                <div className="post-offer-content" style={style}>
                    <EmploymentInfoType employment={employment} setEmployment={setEmployment}/>
                    <Skills skills={skill} setSkills={setSkill}/>
                    <Button
                        onClick={ () => submit() }
                        classes={{ root: classes.button }}
                    >
                        Submit
                    </Button>

                </div>
            </div>
    );
};

export default EditOffer;