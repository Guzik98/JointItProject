import React, { useEffect, useState } from 'react';
import './Offers.sass';
import OffersWithSalary from './buttons/OffersWithSalary';
import AllOffers from './buttons/AllOffers';
import SortBy from './buttons/sortBy/SortBy';
import  MediaQuery  from 'react-responsive';
import OfferComponent from './offer/offerComponent';
import { filterFunction } from './offer/filters';
import { useSettings } from '../../../Settings';
import DefaultComponent from './offer/DefaultComponent';
import DetailOffer from './offerDertail/DetailOffer';

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
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}

function Offers(): JSX.Element {
    const { openDetailComponent } = useSettings();
    const filter = filterFunction();

    const size: Size = useWindowSize();
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
                        { !filter ? 'Loading' : null }
                        { filter?.length != 0 ?
                            filter?.slice(0, 50).map(( props, index ) =>
                                <div key={index}>
                                    <OfferComponent {...props} />
                                 </div>)
                            : <DefaultComponent/> }
                    </div>
                </div>
                : <div style={style}>
                    <DetailOffer/>
                </div>
            }
        </div>
    );
}

export default Offers;