import React from 'react';
import  './offerComponent.sass';
import MediaQuery from 'react-responsive';

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


const OfferComponent = () : JSX.Element => {

    return (
        <div className="offer-border">
            <div className="offer-border-level2">
                <div className="offer-border-level3">
                    <div className="logo">
                        <div className="logo-border">
                            <img
                                src="https://bucket.justjoin.it/offers/company_logos/thumb/bf134c3b721167aeb70871e08e523190c99bb65c.png?1617968818"
                                alt="Front-End Developer (Junior/Mid)" className="image"/>
                        </div>
                    </div>
                    <div className="info">
                        <div className="top-info">
                            <div className="position-info">
                                <div className="position">
                                    <div className="position-text">
                                        Front End Develeoper
                                    </div>
                                </div>
                            </div>
                            <div className="salary-info">
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <MediaQuery minWidth={1024}>
                                    <div className="salary-text">
                                        5 500 - 9000 PLN
                                    </div>
                                </MediaQuery>
                            </div>
                            <div className="update-info">
                                New
                            </div>
                        </div>
                        <div className="bottom-info">
                            <div className="bottom-info-left">
                                <div className="company-name">
                                    <CompanyIcon/>
                                    Sofomo
                                </div>
                                <div className="where-type">
                                    <MediaQuery minWidth={1024}>
                                        <PointerIcon/>
                                        <span className="where">
                                            Poznan
                                        </span>

                                        <span className="type">
                                              Fully remote
                                        </span>
                                    </MediaQuery>

                                    <MediaQuery maxWidth={1024}>
                                        <div className="salary-text">
                                            5 500 - 9000 PLN
                                        </div>
                                    </MediaQuery>
                                </div>
                            </div>
                            <div className="bottom-info-skills">
                                <MediaQuery minWidth={1024}>
                                    <span className="skills">
                                    Javascript
                                    </span>
                                        <span className="skills">
                                        Kolin
                                    </span>
                                        <span className="skills">
                                        Java
                                    </span>
                                </MediaQuery>

                            </div>
                            <div className="bottom-info-where">
                                <MediaQuery maxWidth={1024}>

                                    <span className="where">
                                            Poznan
                                        </span>
                                    <span className="type-small-screen">
                                              , Fully remote
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