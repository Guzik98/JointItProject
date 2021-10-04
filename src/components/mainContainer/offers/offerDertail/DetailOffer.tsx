import React, { useEffect, useState } from 'react';
import { useSettings } from '../../../../Settings';
import useFetch from '../../../../types/useFetch';
import OfferTypeDetail from '../../../../types/offerDetailType';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './DetailOffer.sass' ;
import { createStyles, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Tab from './components/Tab';
import Tech from './components/Tech';
import MediaQuery from 'react-responsive';
import Description from './components/Description';
import DisplaySalary from './components/DisplaySalary';

const useStyles = makeStyles(() =>
    createStyles({
        icon_back: {
            position: 'absolute',
            color: 'white',
            minWidth: '24px',
            minHeight: 24,
            maxHeight: 24,
            marginTop: 15,
            marginLeft: 9,
            padding: 0,
            cursor: 'pointer',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }
    }),
);

const PointerIcon = () : JSX.Element => {
    return (
        <svg className="pointer-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0
                9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
            </path>
        </svg>
    );
};


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

const DetailOffer = () : JSX.Element => {
    const size: Size = useWindowSize();
    const { setViewport, setOpenDetailComponent, urlDetail, setDataDetail,  dataDetail } = useSettings();
    const { data } = useFetch<OfferTypeDetail>(urlDetail);

    const style = {
        maxHeight: size.height,
        minHeight: size.height,
    };
    const classes = useStyles();


    if ( data != undefined ){
        setDataDetail(data);
    }

    if ( dataDetail != undefined)
        return (
        <div className = "content-detail" style={style}>
            <div className = "header-detail-offer">
                <Link to='/Offers'>
                    <Button classes = {{ root : classes.icon_back }}
                            onClick = { () => {
                                setOpenDetailComponent(false);
                                setViewport({
                                    latitude: 52.237049,
                                    longitude: 21.017532,
                                    width: '100%',
                                    height: '98%',
                                    zoom: 5,
                                });
                            }}
                    >
                        <ArrowBackIcon/>
                    </Button>
                </Link>
                <div className = "header">
                    <div className = "header-content">
                        <div className = "logo">
                            <div className = "logo-level2">
                                <div className = "logo-level3">
                                    <img  className = "logo-level4"
                                          src= {`${dataDetail.company_logo_url}`} alt={dataDetail.company_name}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className = "header-info">
                            <div className = "offer-title"> { dataDetail.title } </div>
                            <div className = "address-type">
                            <span className = "address-text">
                                    <PointerIcon/>
                                { dataDetail.address_text }
                            </span>
                                <MediaQuery minWidth={1025}>
                                 <span className = "work-type">
                                    { dataDetail.workplace_type === 'remote' ?
                                        'Fully Remote'
                                        : dataDetail.workplace_type }
                                </span>
                                </MediaQuery>
                            </div>
                            <MediaQuery maxWidth={1025}>
                                 <span className = "work-type">
                                    { dataDetail.workplace_type === 'remote'
                                        ? 'Fully Remote'
                                        : dataDetail.workplace_type }
                                </span>
                            </MediaQuery>
                            <MediaQuery minWidth={1025}>
                                { dataDetail.employment_types.map((type) => {
                                    return ( <DisplaySalary key={type.type}   {...type} /> );
                                })}
                            </MediaQuery>
                        </div>
                    </div>
                    <MediaQuery maxWidth={1025}>
                        { dataDetail.employment_types.map((type) => {
                            return ( <DisplaySalary key={type.type}   {...type} /> );
                        })}
                    </MediaQuery>
                </div>
                <Tab/>
            </div>
            <div>
                <Tech/>
                <Description/>
            </div>
        </div>
    );
    return  ( <span>Loading</span>);
};

export default DetailOffer;