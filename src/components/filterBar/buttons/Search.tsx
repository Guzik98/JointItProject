import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from '@material-ui/core';

import './buttons.sass';

export const SearchBtn = (): JSX.Element => {
    return (
        <div className="search">
            <SearchIcon className="search-icon"/>
            Search
        </div>
    );
};

export const SearchBtnSmall = (): JSX.Element => {
    return (
        <Button className="small-btn-search">
            <SearchIcon className="search-icon"/>
        </Button>
    );
};


