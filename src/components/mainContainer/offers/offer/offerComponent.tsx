import React from 'react';
import './offerComponent.sass';
import { OfferType } from '../../../../types/offerType';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { useSettings } from '../../../../Settings';
import { CompanyIcon, PointerIcon, getNumberOfDays } from './offerComponentFunctions';


const OfferComponent = (props : OfferType) : JSX.Element => {
    const { setUrlDetail, setViewport, setOpenDetailComponent, employmentType } = useSettings();

    const today = new Date().toISOString().split('T')[0];

    let minSalary: number | undefined = 0;
    let maxSalary: number | undefined = 0;
    let currency: string | undefined = 'Undisclosed Salary';

    const  displaySalary = (type: { type: string; salary: { from: number; to: number; currency: string } | null })  =>{

        if (type.salary !== null && type.salary !== undefined && type.type == employmentType.toLowerCase()) {
            minSalary = type.salary.from;
            maxSalary = type.salary.to;
            currency = type.salary.currency;

        }
        if (type.salary !== null && type.salary !== undefined && type.type == 'mandate_contract') {
            minSalary = type.salary.from;
            maxSalary = type.salary.to;
            currency = type.salary.currency;
        }
        if (type.salary !== null && type.salary !== undefined && employmentType == 'All') {
            minSalary = type.salary.from;
            maxSalary = type.salary.to;
            currency = type.salary.currency;
        }
    };

    return (
        <Link className="offer-border" to={`Offers/${props.id}` } onClick={ () => {
            setOpenDetailComponent(true);
            setUrlDetail(`https://justjoin.it/api/offers/${props.id}`);
            setViewport({
                latitude: +props.latitude,
                longitude: +props.longitude,
                width: '100%',
                height: '98%',
                zoom: 16,
            });
        } }>
            <div className="offer-border-level2">
                <div className="offer-border-level3">
                    <div className="logo">
                        <div className="logo-border">
                            <img
                                src={props.company_logo_url}
                                alt={props.title + ' ' +  props.experience_level} className="image"/>
                        </div>
                    </div>

                    <div className="info">
                        <div className="top-info">
                            <div className="position-info">
                                <div className="position">
                                    <div className="position-text">
                                        {props.title}
                                    </div>
                                </div>
                            </div>
                            <div className="salary-info">
                                <MediaQuery minWidth={1024}>
                                    <div className="salary-text">
                                        {props.employment_types.map((type)  => {
                                            displaySalary(type);
                                        })
                                        }
                                        {currency !== 'Undisclosed Salary' ? minSalary + ' - '
                                            + maxSalary + ' ' + currency.toUpperCase() : currency }
                                    </div>
                                </MediaQuery>
                            </div>
                            <div className="update-info">
                                {getNumberOfDays(props.published_at, today)}
                            </div>
                        </div>
                        <div className="bottom-info">
                            <div className="bottom-info-left">
                                <div className="company-name">
                                    <CompanyIcon/>
                                    {props.company_name}
                                </div>
                                <div className="where-type">
                                    <MediaQuery minWidth={1024}>
                                        <PointerIcon/>
                                        <span className="where">
                                            {props.city}
                                        </span>

                                        <span className="type">
                                             {props.workplace_type}
                                        </span>
                                    </MediaQuery>

                                    <MediaQuery maxWidth={1024}>
                                        <div className="salary-text">
                                            {currency !== 'Undisclosed Salary' ?
                                                minSalary.toString().slice(0, -3) + 'k - '
                                                + maxSalary.toString().slice(0, -3) + 'k ' + currency.toUpperCase()
                                                : currency }
                                        </div>
                                    </MediaQuery>
                                </div>
                            </div>
                            <div className="bottom-info-skills">
                                <MediaQuery minWidth={1024}>
                                    {props.skills.map((type) =>
                                        <span key={props.longitude} className="skills">{type.name}</span>
                                    )}
                                </MediaQuery>

                            </div>
                            <div className="bottom-info-where">
                                <MediaQuery maxWidth={1024}>
                                    <span className="where">
                                            {props.city}
                                        </span>
                                    <span className="type-small-screen">
                                              , {props.workplace_type}
                                    </span>
                                    <PointerIcon/>
                                </MediaQuery>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default OfferComponent;