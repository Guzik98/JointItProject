import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { HandlePopOut } from '../../../../types/shortTypes';
import '../buttons.sass';

export const SearchBtn = ( { handleOpen }: HandlePopOut) : JSX.Element => {
    return (
        <div className="search" onClick={ handleOpen }>
            <SearchIcon className="search-icon"/>
            Search
        </div>
    );
};

export const SearchBtnSmall = ( { handleOpen }: HandlePopOut): JSX.Element => {
    return (
        <Button className="small-btn-search" onClick={ handleOpen }>
            <SearchIcon className="search-icon"/>
        </Button>
    );
};


