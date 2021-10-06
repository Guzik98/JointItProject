import React from 'react';
import { DialogContent, DialogTitle, Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { ButtonType, HandlePopOut } from '../../../../../../types/shortTypes';
import MediaQuery from 'react-responsive';
import { SortByButtonsComponent, sortByButtons } from './SortByPopComponent';

const SortByPopOut = ({ handleClose }: HandlePopOut): JSX.Element => {
    return (
        <>
            <MediaQuery maxWidth={1024}>
                <DialogTitle>
                    <div className="sort-by-title">
                        <span>Sort By</span>
                        <CloseIcon onClick={handleClose}/>
                    </div>
                </DialogTitle>
            </MediaQuery>
            <Divider/>
            <DialogContent>
                <div className="sort-by-pop-out-body">
                    {sortByButtons.map(({ name }: ButtonType) =>
                        <div onClick={handleClose} key={name}>
                            <SortByButtonsComponent
                                name={name} key={name}/>
                        </div>)
                    }
                </div>
            </DialogContent>
        </>
    );
};

export default SortByPopOut;