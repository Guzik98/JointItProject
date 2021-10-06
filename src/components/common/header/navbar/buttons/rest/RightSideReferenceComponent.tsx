import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderLinkType } from '../../../../../../types/shortTypes';

const RightSideReferenceComponent = ({ text }: HeaderLinkType): JSX.Element => {
    return (
        <NavLink className="navbar-right-side-item rwdDisplay"
                 aria-disabled="false" rel="noreferrer"
                 to={`/${text}`}
                 target="_blank"
                 activeClassName="header-active">
            <span className="navbar-right-side-item-label">
                {text}
            </span>
        </NavLink>
    );
};

export default RightSideReferenceComponent;
