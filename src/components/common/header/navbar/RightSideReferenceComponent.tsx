
import React from 'react';
import { HeaderLinkType } from './RightSiderReferenceArray';

const RightSideReferenceComponent = ({ href, text }: HeaderLinkType): JSX.Element => {
    return (
        <a className="navbar-right-side-item rwdDisplay" aria-disabled="false" rel="noreferrer" href={href} target="_blank">
            <span className="navbar-right-side-item-label ">
                {text}
            </span>
        </a>
    );
};

export default RightSideReferenceComponent;
