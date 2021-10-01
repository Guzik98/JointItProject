import React, { useEffect, useState } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import { filterFunction } from '../offers/filters';


import './Map.sass';
import { OfferType } from '../../../offerType';
import { useSettings } from '../../../Settings';



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
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}


function Map(): JSX.Element{
    const { setUrlDetail, viewport, setViewport, setOpenDetailComponent } = useSettings();
    const size: Size = useWindowSize();
    const style = {
        maxHeight: size.height,
        minHeight: size.height,
        width: size.width,
    };
    const filter = filterFunction();



    const [ selectedOffer, setSelectedOffer ] = useState<OfferType | null>(null);
    

    return (
        <div className="map" style={style}>
            <ReactMapGl {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle='mapbox://styles/mapbox/streets-v11'
                onViewportChange = { (viewport: React.SetStateAction<{ latitude: number; longitude: number;
                    width: string; height: string; zoom: number; }>) => {
                    setViewport(viewport);
                }}
            >
                { filter?.slice(0, 500).map((offer : OfferType) => (
                    <Marker key={offer.id} latitude={+offer.latitude} longitude={+offer.longitude}  >
                        <button className="market-btn"
                            onMouseOver={ () => setSelectedOffer(offer) }
                            onMouseLeave={ () =>setSelectedOffer(null) }
                            onClick={ () => {
                                 setUrlDetail(`https://justjoin.it/api/offers/${offer.id}`);
                                    setOpenDetailComponent(true);
                                 setViewport({
                                    latitude: +offer.latitude,
                                    longitude: +offer.longitude,
                                    width: '100%',
                                    height: '98%',
                                    zoom: 16,
                                }); 
                            } }
                        >
                            <img className = 'pointer'
                                 src={`/markers/${offer.marker_icon}.svg`}/>

                        </button>
                    </Marker>
                ))}
                { selectedOffer ? <Popup longitude={+selectedOffer.longitude} latitude={+selectedOffer.latitude}>
                    <div className="popup-marker">
                        <div className="popup-logo">
                            <img src={selectedOffer.company_logo_url} alt='logo'/>
                        </div>
                        <div className="popup-content">
                            <span>{ selectedOffer.title }</span>
                            <span className="popup-salary">
                                {selectedOffer.employment_types[0].salary != null ?
                                    selectedOffer.employment_types[0].salary.from + ' - '
                                    + selectedOffer.employment_types[0].salary.to +
                                    +  selectedOffer.employment_types[0].salary?.currency
                                    :  null
                                }
                            </span>
                            <span>{selectedOffer.company_name}</span>
                        </div>
                    </div>
                </Popup> : null }

            </ReactMapGl>
        </div>
    );
}

export default Map;