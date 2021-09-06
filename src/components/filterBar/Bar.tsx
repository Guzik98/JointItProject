import React from 'react';

import './Bar.sass';

import '../../assets/programing-language-icon.svg';


import IconComponent from './iconBar/IconComponent';
import { programingLanguageIconArray } from '../../assets/programing-language';
import SearchBtn from './buttons/search/search';
import LocationBtn from './buttons/location/location';
import MoreFilters from './buttons/moreFilters/moreFilters';

function Bar(): JSX.Element {
    return (
        <div className="filter-bar">
            <div className="filter-bar-elements">
                <SearchBtn/>
                <LocationBtn/>
                <div className="icon-bar">
                    <div className="icon-bar-level2">
                        <div className="icon">
                            <div className="circle all-icon">
                                <a>
                                    All
                                </a>
                            </div>
                            <span className="under-icon">
                                All
                            </span>
                        </div>
                    </div>
                    {programingLanguageIconArray.map(({ name, icon }) => <IconComponent name={name} svg={icon}
                                                                                      key={name}/>
                    )}
                </div>
                <MoreFilters/>
            </div>
        </div>
    );
}

export default Bar;