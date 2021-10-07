import React from 'react';
import './offerComponent.sass';
import { EmploymentType, OfferType } from '../../../../types/offerType';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { useSettings } from '../../../../Settings';
import { getNumberOfDays, putSalary, ReturnSalary } from './function/offerComponentFunctions';
import CompanyIconOffer from '../../../../assets/icons/svg/CompanyIconOffer';
import PointerIconOffer from '../../../../assets/icons/svg/PointerIconOffer';

const OfferComponent = (props : OfferType) : JSX.Element => {
    const { setUrlDetail, setViewport, setOpenDetailComponent } = useSettings();

    const today = new Date().toISOString().split('T')[0];

    const setUrl = () => {
        setUrlDetail(`https://justjoin.it/api/offers/${props.id}`);
    };

    const setViewportFunction = () => {
        setViewport({
            latitude: +props.latitude,
            longitude: +props.longitude,
            width: '100%',
            height: '98%',
            zoom: 16,
        });
    };

    const openComponent = () => {
            setOpenDetailComponent(true);
    };

    return (
        <Link className="offer-border" to={`Offers/${props.id}` }
              onClick={ () => {
                  setUrl();
                  setViewportFunction();
                  openComponent();
                  }}
        >
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
                                        {props.employment_types.map((type : EmploymentType)  => {
                                            putSalary(type);
                                        })}
                                        <ReturnSalary/>
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
                                    <CompanyIconOffer/>
                                    {props.company_name}
                                </div>
                                <div className="where-type">
                                    <MediaQuery minWidth={1024}>
                                        <PointerIconOffer/>
                                        <span className="where">
                                            {props.city}
                                        </span>

                                        <span className="type">
                                             {props.workplace_type}
                                        </span>
                                    </MediaQuery>

                                    <MediaQuery maxWidth={1024}>
                                        <div className="salary-text">
                                            {props.employment_types.map((type : EmploymentType)  => {
                                              putSalary(type);
                                            })}
                                            <ReturnSalary/>
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
                                    <PointerIconOffer/>
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