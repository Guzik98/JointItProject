import React, { useEffect } from 'react';
import { useSettings } from '../../../../Settings';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './DetailOffer.sass';
import { Button, createStyles, makeStyles } from '@material-ui/core';
import Tab from './components/Tab';
import Tech from './components/Tech';
import MediaQuery from 'react-responsive';
import Description from './components/Description';
import DisplaySalary from './components/DisplaySalary';
import { EmploymentType } from '../../../../types/offerType';
import CompanyProfile from './components/CompanyProfile';
import PointerIconDetail from '../../../../assets/icons/svg/PointerIconDetail';
import { useWindowSize } from '../../../../handleScreen/useWindowSize';
import { Size } from '../../../../types/shortTypes';

const useStyles = makeStyles(() =>
    createStyles({
        icon_back: {
            position: 'absolute',
            color: 'white',
            maxHeight: 36,
            maxWidth: 36,
            minWidth: 36,
            marginTop: 15,
            marginLeft: 9,
            padding: 0,
            cursor: 'pointer',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }
    }),
);

const DetailOffer = () : JSX.Element => {
    const size: Size = useWindowSize();
    const { setViewport, setOpenDetailComponent, urlDetail, setDataDetail,  dataDetail } = useSettings();
    const classes = useStyles();

    const style = {
        maxHeight: (size.width < 1025 ? size.height - 50 :  size.height - 200 ),
        minHeight: (size.width < 1025 ? size.height - 50 :  size.height - 200 ),
    };

    useEffect( () => {
        if (!urlDetail) return ;

        const fetchData = async () => {
            const response = await fetch(urlDetail);
            return response.json();
        };

        fetchData().then(data =>  setDataDetail(data));
    }, [urlDetail]);

    if ( dataDetail)
        return (
        <div className = "content-detail" style={style}>
            <div className = "header-detail-offer">
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
                                    <PointerIconDetail/>
                                { dataDetail.address_text }
                            </span>
                                <MediaQuery minWidth={1025}>
                                 <span className = "work-type">
                                     {dataDetail.workplace_type === 'partly_remote' ? 'Partly Remote' : null}
                                     {dataDetail.workplace_type === 'office' ? 'Office' : null}
                                     {dataDetail.workplace_type === 'remote' ? 'Remote' : null}
                                </span>
                                </MediaQuery>
                            </div>
                            <MediaQuery maxWidth={1025}>
                                 <span className = "work-type">
                                     {dataDetail.workplace_type === 'partly_remote' ? 'Partly Remote' : null}
                                     {dataDetail.workplace_type === 'office' ? 'Office' : null}
                                     {dataDetail.workplace_type === 'remote' ? 'Remote' : null}
                                </span>
                            </MediaQuery>
                            <MediaQuery minWidth={1025}>
                                { dataDetail.employment_types.map((type: EmploymentType) => {
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
                { dataDetail.company_profile ? <CompanyProfile/> : null}
                <Tech/>
                <Description/>
            </div>
        </div>
    );
    return  (
            <span className = "content-detail" style={style} >Loading...</span>
    );
};

export default DetailOffer;