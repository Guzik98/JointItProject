import React from 'react';
import './offerComponent.sass';
import MediaQuery from 'react-responsive';
import { OfferType, EmploymentType } from '../../../../offerType';


const CompanyIcon = (): JSX.Element => {
    return (
        <svg className="company-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path
        d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z">
            </path>
        </svg>
    );
};

const PointerIcon = () : JSX.Element => {
    return (
        <svg className="MuiSvgIcon-root pointer-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
            </path>
        </svg>
    );
};

const OfferComponent = (props : OfferType) : JSX.Element => {

    let minSalary = 0;
    let maxSalary = 0;
    let currency = 'Undisclosed Salary';
    let today = new Date().toISOString().split('T')[0];

    function displaySalary(type : EmploymentType) {
        if (type[0].salary !== null && type[0].salary !== undefined) {
            minSalary = type[0].salary.from;
            maxSalary = type[0].salary.to;
            currency = type[0].salary.currency;
        } else {
            currency = 'Undisclosed Salary';
        }
    }

    function getNumberOfDays(start: string, end: string){
        const date1 = new Date(start);
        const date2 = new Date(end);

        const oneDay = 1000 * 60 * 60 * 24;

        const diffInTime = date2.getTime() - date1.getTime();

        const diffInDays = Math.round(diffInTime / oneDay);

        if ( diffInDays < 1 ){
            return 'now';
        } else {
            return diffInDays + 'd ago';
        }
    }

    return (
        <div className="offer-border">
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
                                        {currency !== 'Undisclosed Salary' ? minSalary + ' - ' + maxSalary + ' ' + currency : currency }
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
                                            {props.employment_types.map((type)  => {
                                                displaySalary(type);
                                            })
                                            }
                                            {currency !== 'Undisclosed Salary' ?
                                                minSalary.toString().slice(0, -3) + 'k - '
                                                + maxSalary.toString().slice(0, -3) + 'k ' + currency
                                                : currency }
                                        </div>

                                    </MediaQuery>
                                </div>
                            </div>
                            <div className="bottom-info-skills">
                                <MediaQuery minWidth={1024}>
                                    {props.skills.map((type, index) =>
                                        <span key={index} className="skills">{type.name}</span>
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
        </div>
    );
};

export default OfferComponent;