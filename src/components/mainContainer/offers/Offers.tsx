import React, { useState } from 'react';
import './Offers.sass';
import SortBy from './buttons/sortBy/SortBy';
import  MediaQuery  from 'react-responsive';
import OfferComponent from './offer/offerComponent';
import { filterFunction } from './offer/filters/filters';
import { useWindowSize } from '../../../helpfuntions/handleScreen/useWindowSize';
import { Size, TabActiveType } from '../../../types/shortTypes';
import { useAuthSettings } from '../../../AuthContext';
import { useSettings } from '../../../Settings';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Offers(): JSX.Element {
    const size: Size = useWindowSize();
    const filter = filterFunction();
    const { userOffers, role, setUserOffers } = useAuthSettings();
    const { setWithSalary } = useSettings();
    const navigate = useNavigate();

    const style = {
        minHeight: size.height - 200,
        maxHeight: size.height - 200,
        maxWidth: size.width < 1025 ? size.width - 20 : (size.width < 1500 ? size.width / 1.68 : size.width / 2),
        minWidth: size.width < 1025 ? size.width - 20 : (size.width < 1500 ? size.width / 1.68 : size.width / 2),
    };

    const [tabUserOffersActive, setTabUserOffersActive] = useState<TabActiveType>({
        withOutSalary: true,
        withSalary: false,
        userOffers: false,
    });

    const deleteOffer = (id: string) : void => {
        const url = `http://localhost:3000/offers/your-offers/${id}`;
        axios.delete(url, {
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('accessToken') as string)
            }
        });
        setUserOffers(userOffers?.filter(item => {
            return item._id != id;
        }));
    };


    return (
        <div className="offers">
            <div className="offers-level-2">
                <div className="offers-menu">
                    <div className="left-side-buttons">
                        <div
                            className={`${tabUserOffersActive.withSalary ? 'tab-active offers' : 'offers'}`}
                            onClick={() => {
                                setWithSalary(true);
                                setTabUserOffersActive({
                                    userOffers: false,
                                    withOutSalary: false,
                                    withSalary: true
                                });
                            }}
                        >
                            <MediaQuery minWidth={1025}>
                                <span className="tab-offers-text">
                                    Offers with salary
                                </span>
                            </MediaQuery>
                            <MediaQuery maxWidth={1025}>
                                <span>
                                    With salary
                                </span>
                            </MediaQuery>
                        </div>
                        {role == 'EMPLOYER' &&
                        <div
                            className={`${tabUserOffersActive.withOutSalary ? 'tab-active offers' : 'offers'}`}
                            onClick={() => {
                                setWithSalary(false);
                                setTabUserOffersActive({
                                    userOffers: false,
                                    withOutSalary: true,
                                    withSalary: false
                                });
                            }}
                        >
                            All offers
                        </div>
                        }
                        <div
                            className={`${tabUserOffersActive.userOffers ? 'tab-active offers' : 'offers'}`}
                            onClick={() => {
                                setTabUserOffersActive({
                                    userOffers: true,
                                    withOutSalary: false,
                                    withSalary: false
                                });
                            }}
                        >
                            User offers
                        </div>
                    </div>
                    <div className="offers-menu-left-side">
                        <MediaQuery minWidth={1025}>
                            <SortBy/>
                        </MediaQuery>
                    </div>
                </div>
                <div className="offers-content-3" style={style}>
                    {tabUserOffersActive.userOffers ?
                        userOffers?.map((props) => {
                                return (
                                    <>
                                        <div key={props._id}>
                                            <OfferComponent { ...props }/>
                                            <div className="offers-option">
                                                <Button className="options edit-offer"
                                                        onClick={() => navigate('edit-offer',  { state: { ...props } } ) }
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    className="options delete-offer"
                                                    onClick={ () =>  deleteOffer(props._id) }
                                                >
                                                    delete
                                                </Button>
                                            </div>
                                        </div>
                                    </>
                                );
                            }
                        )
                        : filter?.length != 0 &&
                        filter?.slice(0, 50).map((props) =>
                            <div key={props._id}>
                                <OfferComponent { ...props }/>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Offers;