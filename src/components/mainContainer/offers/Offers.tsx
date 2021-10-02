import React, { useEffect, useState } from 'react';
import './Offers.sass';
import OffersWithSalary from './buttons/OffersWithSalary';
import AllOffers from './buttons/AllOffers';
import SortBy from './buttons/sortBy/SortBy';
import  MediaQuery  from 'react-responsive';
import OfferComponent from './offer/offerComponent';
import { OfferType } from '../../../offerType';
import { filterFunction } from './offer/filters';
import { useSettings } from '../../../Settings';
import DetailOffert from './offerDertail/DetailOffert';
import DeflautComponent from './offer/DeflautComponent';

interface Size {
    width: number | undefined;
    height: number | undefined;
}

function useWindowSize(): Size {
    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth / 2,
                height: window.innerHeight - 200,
            });
        }
        window.addEventListener('resize', handleResize);
        console.log(window.innerWidth);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}

function Offers(): JSX.Element {
    const { openDetailComponent } = useSettings();


    const size: Size = useWindowSize();
    const filter = filterFunction();
    console.log( filter);

    const style = {
        maxHeight: size.height,
        minHeight: size.height,
    };



    return (
        <div className="offers">
            { !openDetailComponent ?
                <div className="offers-level-2">
                <div className="offers-menu">
                    <div className="left-side-buttons">
                        <OffersWithSalary/>
                        <AllOffers/>
                    </div>
                    <div className="offers-menu-left-side">
                        <MediaQuery minWidth={1025}>
                            <SortBy/>
                        </MediaQuery>
                    </div>
                </div>
                    <div className="offers-content-3" style={style}>

                        { filter?.length != 0 ?
                            filter?.slice(0, 50).map(({ ...props } :OfferType) =>
                                <div key={props.id}>
                                    <OfferComponent key={props.id}  {...props} />
                                 </div>)
                            : <DeflautComponent/> }
                    </div>
                </div>


                : <div style={style}>
                    <DetailOffert />
                </div>
            }
        </div>
    );
}

export default Offers;