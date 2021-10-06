import React from 'react';
import './Bar.sass';
import '../../assets/programing-language-icon.svg';
import IconComponent from './iconBar/IconComponent';
import { IconType, programingLanguageIconArray } from './iconBar/programing-language';
import { SearchBtn, SearchBtnSmall } from './buttons/search/Search';
import { MoreFilters } from './buttons/moreFilters/moreFilters';
import { LocationBtn } from './buttons/location/LocationBtn';
import MediaQuery from 'react-responsive';
import Tech from './buttons/tech/Tech';
import SortBy from '../mainContainer/offers/buttons/sortBy/SortBy';
import { ClickAwayListener } from '@material-ui/core';
import LongSearch from './buttons/search/popOut/LongSearch';

const renderIcon = programingLanguageIconArray.map(({ name, icon }: IconType) =>
    <IconComponent name={name} icon={icon} key={name}/>);

function Bar(): JSX.Element {

    const [ isOpen, setIsOpen ] = React.useState(false);

    const handleOpenLongSearch = () => {
        setIsOpen(true);
    };
    const handleCloseLongSearch = () => {
        setIsOpen(false);
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
                        <Tech/>
                        <LocationBtn/>
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
                </div>
            </ClickAwayListener>
        );
    }
}

export default Bar;