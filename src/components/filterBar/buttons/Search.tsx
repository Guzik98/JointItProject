import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

import './buttons.sass';



export const SearchBtn = (props: any) : JSX.Element => {

    const onClick = () => {
        props.open();
    };
    return (
        <div className="search" onClick={onClick}>
            <SearchIcon className="search-icon"/>
            Search
        </div>
    );
};

export const SearchBtnSmall = (props: any): JSX.Element => {

    const onClick = () => {
        props.open();
    };

    return (
        <Button className="small-btn-search" onClick={onClick}>
            <SearchIcon className="search-icon"/>
        </Button>
    );
};


