import React, { useState } from 'react';
import ReactMapGl, { Marker, Popup, NavigationControl } from 'react-map-gl';
import { filterFunction } from '../offers/offer/filters/filters';
import './Map.sass';
import { OfferType } from '../../../types/offerType';
import { useSettings } from '../../../Settings';
import { putSalary, ReturnSalaryMap } from '../offers/offer/function/offerComponentFunctions';
import { Size } from '../../../types/shortTypes';
import { useWindowSize } from '../../../handleScreen/useWindowSize';
import ChatIcon from '../../../assets/icons/svg/ChatIcon';
import { ClickAwayListener } from '@material-ui/core';
import Chatbot from './chatbot/ChatBot';


function Map(): JSX.Element{
    const { setUrlDetail, viewport, setViewport, setOpenDetailComponent } = useSettings();
    const [ selectedOffer, setSelectedOffer ] = useState<OfferType | null>(null);
    const [openChatBot, setOpenChatBot] = useState(false);

    const filter = filterFunction();

    const size: Size = useWindowSize();
    const style = {
        maxHeight: size.height - 155,
        minHeight: size.height - 155,
        maxWidth: (size.width < 1500 ? size.width / 2.55 : size.width / 2 - 20),
        minWidth: (size.width < 1500 ? size.width / 2.55 : size.width / 2 - 20),
    };

    const navControlStyle = {
        className: 'map-btn',
        width: 30,
        height: 30,
        right: 10,
        top: 10,
        showCompass: false,
    };

   return (
        <div className="map" style={style}>
            <ReactMapGl
                {...viewport}
                style={style}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle='mapbox://styles/mapbox/streets-v11'
                onViewportChange = { (viewport: React.SetStateAction<{ latitude: number; longitude: number;
                    width: string; height: string; zoom: number; }>) => {
                    setViewport(viewport);
                }}
            >
                <NavigationControl style={navControlStyle} />
                { filter?.slice(0, 50).map((offer : OfferType) => (
                    <Marker key={offer.id} latitude={+offer.latitude} longitude={+offer.longitude}  >
                        <button className="market-btn"
                                onMouseOver={ () =>setSelectedOffer(offer) }
                                onMouseLeave={ () =>setSelectedOffer(null) }
                                onClick={ async () => {
                                    await  setViewport({
                                        latitude: +offer.latitude,
                                        longitude: +offer.longitude,
                                        width: '100%',
                                        height: '98%',
                                        zoom: 16,
                                    });
                                    await setUrlDetail(`https://justjoin.it/api/offers/${offer.id}`);
                                    await setOpenDetailComponent(true);
                                } }
                        >
                            <img className = 'pointer'
                                 src={`/markers/${offer.marker_icon}.svg`}
                            />
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
                                {selectedOffer.employment_types.map((type, index) =>{
                                    const map = true;
                                    (putSalary(type, index, map));
                                })
                                }
                                <ReturnSalaryMap/>
                            </span>
                            <span>{selectedOffer.company_name}</span>
                        </div>
                    </div>
                </Popup> : null }
            </ReactMapGl>

            <ClickAwayListener onClickAway={() => setOpenChatBot(false)}>
            {openChatBot ?
                <div className='chat-bot'>
                    <Chatbot/>
                </div>
                :
                    <div className='chat-bot'
                         onClick={() => setOpenChatBot(true)}>
                        <div className='chat-icon-border'>
                            <ChatIcon/>
                        </div>
                    </div>
            }
            </ClickAwayListener>
        </div>

    );
}

export default Map;