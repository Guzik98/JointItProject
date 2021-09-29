import React, { useEffect, useState } from 'react';
import './Offers.sass';
import OffersWithSalary from './buttons/OffersWithSalary';
import AllOffers from './buttons/AllOffers';
import SortBy from './buttons/sortBy/SortBy';
import  MediaQuery  from 'react-responsive';
import OfferComponent from './offer/offerComponent';
import { OfferType } from '../../../offerType';
import { filterFunction } from './filters';
import { useSettings } from '../../../Settings';
import DetailOffert from './offerDertail/DetailOffert';

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
                width: window.innerWidth,
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
    const { error, data } = useSettings();
    const [openDetail, setOpenDetail ] = useState<boolean>(false);

    const handleClickOpen = () => {
        setOpenDetail(true);
    };

    const handleClickClose = () => {
        setOpenDetail(false);
    };


    const size: Size = useWindowSize();
    const filter = filterFunction();
    console.log( filter);
    const style = {
        maxHeight: size.height,
        minHeight: size.height,
    };

    if (error) return  ( <span>There is error</span>);
    if (!data) return ( <span>Loading...</span>);
    return (
        <div className="offers">
            { !openDetail ?
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
                    <div className="offers-content-3" style={style}>
                        { filter?.slice(0, 100).map(( { ...props } :OfferType) =>
                           <div key={props.id} onClick={handleClickOpen} >
                               <OfferComponent key={props.id}  {...props} />
                           </div>
                        )}

                    </div>
                </div>

                : <div style={style}>
                    <DetailOffert click = {handleClickClose}/>
                </div>
            }
        </div>
    );
}

export default Offers;