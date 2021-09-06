import React from 'react';
import './Search.sass';

import SearchIcon from '@material-ui/icons/Search';

const SearchBtn = (): JSX.Element => {
    return (
        <div>
            <div className="manual-search">
                <div className="manual-search-level2">
                    <a className="search-expand">
                        <button className="manual-search-btn">
                            <SearchIcon/>
                            <input
                                autoComplete="off"
                                placeholder="Search"
                                type="text"
                                className="search-input"
                                aria-autocomplete="list"
                                autoCapitalize="none"
                                spellCheck="false"
                                value=""
                                id="mui-85635"/>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SearchBtn;

