import React from 'react';
import './location.sass';

import DropdownIcon from '../../../../assets/icons/dropdown-icon';

const LocationBtn = (): JSX.Element => {
    return (
        <div className="location">
            <button className="location-btn">
                <span className="location-btn-span">Location<span>
                </span>
                    <DropdownIcon/>
                </span>
                <span
                    className="MuiTouchRipple-root">
                </span>
            </button>
        </div>
    );
};

export default LocationBtn;