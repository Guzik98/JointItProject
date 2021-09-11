import React from 'react';

import './Bar.sass';
import '../../assets/programing-language-icon.svg';
import IconComponent from './iconBar/IconComponent';
import {programingLanguageIconArray} from './iconBar/programing-language';
import {SearchBtn, SearchBtnSmall} from './buttons/Search';
import {MoreFilters, MoreFiltersSmall} from './buttons/moreFilters';
import {LocationBtn, LocationSmall} from './buttons/LocationBtn';
import MediaQuery from 'react-responsive';
import Tech from './buttons/Tech';
import SortBy from '../mainContainer/offers/buttons/sortBy/SortBy';

const renderIcon = programingLanguageIconArray.map(({name, icon}) =>
    <IconComponent name={name} icon={icon} key={name}/>);

function Bar(): JSX.Element {

    return (
        <div className="filter-bar">
            <div className="filter-bar-elements">
                <MediaQuery minWidth={1024}>
                    <SearchBtn/>
                    <div className="location-icon">
                        <LocationBtn/>
                        <div className="icon-bar">
                            {renderIcon}
                        </div>
                        <MoreFilters/>
                    </div>
                </MediaQuery>

                <MediaQuery maxWidth={1024}>
                    <SearchBtnSmall/>
                    <Tech/>
                    <LocationSmall/>
                    <MoreFiltersSmall/>
                    <SortBy/>
                </MediaQuery>
            </div>
        </div>

    );
    // else {
    //     return (
    //         <ClickAwayListener onClickAway={handleLongSearchClose}>
    //             <div className="long-search-bar">
    //                 <div className="long-search-bar-filter" >
    //                     <LongSearch/>
    //                 </div>
    //                 <div onClick={handleLongSearchClose}>
    //                     <MoreFilters/>
    //                 </div>
    //             </div>
    //         </ClickAwayListener>
    //     );
    // }
}

export default Bar;