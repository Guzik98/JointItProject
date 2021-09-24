import React, { useEffect, useState } from 'react';

import './Offers.sass';
import OffersWithSalary from './buttons/OffersWithSalary';
import AllOffers from './buttons/AllOffers';
import SortBy from './buttons/sortBy/SortBy';
import  MediaQuery  from 'react-responsive';
import OfferComponent from './offer/offerComponent';

import { OfferType } from '../../../offerType';
import { filterFunction } from './filters';

interface Size {
    width: number | undefined;
    height: number | undefined;
}
function useWindowSize(): Size {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight - 200,
            });
        }
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}


function Offers(): JSX.Element {
    const size: Size = useWindowSize();
    const filter3 = filterFunction();


    const style = {
        maxHeight: size.height,
        minHeight: size.height,
    };


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
                        <div className="offers-content-3" style={style}>
                            {
                                filter3?.slice(0, 200).map(( { ...props } :OfferType) =>
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