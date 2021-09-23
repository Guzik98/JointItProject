import React from 'react';

import './Offers.sass';
import OffersWithSalary from './buttons/OffersWithSalary';
import AllOffers from './buttons/AllOffers';
import SortBy from './buttons/sortBy/SortBy';
import MediaQuery from 'react-responsive';
import OfferComponent from './offer/offerComponent';
import { useSettings } from '../../../Settings';
import { EmploymentType, OfferType } from '../../../offerType';

function Offers(): JSX.Element {
    const { data,  city, tech, seniority, fromSalary } = useSettings();
    const filterCity = data?.filter(function (item : {
        city: string;
    }) : boolean {
        if (city !== 'all'){
            return  item.city === city;
        }
        return  item.city == item.city;
        }
    );

    const filterTech = filterCity?.filter(function (item : {
            marker_icon: string;
        }) : boolean {
            if (tech !== 'All'){
                return  item.marker_icon === tech.toLocaleLowerCase();
            }
            return  item.marker_icon == item.marker_icon;
        }
    );

    const filterSeniority = filterTech?.filter(function (item : {
        experience_level : string
    }) : boolean {
        if ( seniority !== 'All'){
            return  item.experience_level === seniority.toLocaleLowerCase();
        }
        return true;
    });

    let salaryFilter;
    if (filterSeniority !== undefined) {
        salaryFilter = filterSeniority.filter(function (item : {
            employment_types: EmploymentType;
        }) :  boolean {
            console.log(item.employment_types[0].salary);
            if ( item.employment_types[0].salary !== null) {
                return item.employment_types[0].salary.from > fromSalary;
            }
            return  true;
        });
    }


    // filterTech?.map(({ ...props }: OfferType) =>
    //     props.employment_types.filter((item => {
    //             if (item.salary !== null) {
    //                 return item.salary.from > fromSalary;
    //             }
    //         })
    //     ));



    console.log(filterCity);

    const size = 6;
    return (
        <div className="offers">
            <div className="offers-level-2">
                <div className="offers-menu">
                    <div className="left-side-buttons">
                        <OffersWithSalary/>
                        <AllOffers/>
                    </div>
                    <div className="offers-menu-left-side">
                        <MediaQuery minWidth={1024}>
                            <SortBy/>
                        </MediaQuery>
                    </div>
                </div>
                <div className="offersContent">
                    <div className="offers-content-2">
                        <div className="offers-content-3">
                            {
                                salaryFilter?.slice(0, size).map(( { ...props } :OfferType) =>
                                    <OfferComponent key={props.id}  {...props}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offers;