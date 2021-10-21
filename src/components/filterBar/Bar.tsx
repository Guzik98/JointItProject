import React from 'react';
import './Bar.sass';
import IconComponent from './iconBar/IconComponent';
import { programingLanguageIconArray } from './iconBar/programing-language';
import { SearchBtn, SearchBtnSmall } from './buttons/search/Search';
import { MoreFilters } from './buttons/moreFilters/moreFilters';
import { LocationBtn } from './buttons/location/LocationBtn';
import MediaQuery from 'react-responsive';
import Tech from './buttons/tech/Tech';
import SortBy from '../mainContainer/offers/buttons/sortBy/SortBy';
import { ClickAwayListener } from '@material-ui/core';
import LongSearch from './buttons/search/popOut/LongSearch';
import { IconType } from '../../types/shortTypes';
import { useSettings } from '../../Settings';

const renderIcon = programingLanguageIconArray.map(({ name, icon }: IconType) =>
    <IconComponent name={name} icon={icon} key={name}/>);

function Bar(): JSX.Element {
    const { longFilterTech, longFilterLocation, longFilterCompany, setCity, setTech, setViewport } = useSettings();
    const [ isOpen, setIsOpen ] = React.useState(false);

    const handleOpenLongSearch = () => {
        setIsOpen(true);
        setCity('all');
        setTech('All');
        setViewport({
            latitude: 52.237049,
            longitude: 21.017532,
            width: '100%',
            height: '98%',
            zoom: 5,
        });
    };
    const handleCloseLongSearch = () => {
        if ( longFilterTech.length === 0
            &&  longFilterLocation.length === 0
            && longFilterCompany.length === 0) {
            setIsOpen(false);
        }
    };

    if ( !isOpen) {
        return (
            <div className="filter-bar">
                <div className="filter-bar-elements">
                    <MediaQuery minWidth={1025}>
                        <SearchBtn  handleOpen={handleOpenLongSearch}/>
                        <div className="location-icon">
                            <LocationBtn/>
                            <div className="icon-bar">
                                {renderIcon}
                            </div>
                            <MoreFilters/>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={1025}>
                        <SearchBtnSmall handleOpen={handleOpenLongSearch} />
                        <LocationBtn/>
                        <Tech/>
                        <MoreFilters/>
                        <SortBy/>
                    </MediaQuery>
                </div>
            </div>
        );
    } else {
        return (
            <ClickAwayListener onClickAway={handleCloseLongSearch}>
                <div className="long-search-bar">
                    <div className="long-search-bar-filter" >
                        <LongSearch handleClose ={handleCloseLongSearch}/>
                    </div>
                    <MediaQuery minWidth={1025}>
                        <MoreFilters/>
                    </MediaQuery>
                </div>
            </ClickAwayListener>
        );
    }
}

export default Bar;