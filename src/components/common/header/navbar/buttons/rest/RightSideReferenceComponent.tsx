import React from 'react';
import { HeaderLinkType } from '../../../../../../types/shortTypes';

const RightSideReferenceComponent = ({ text }: HeaderLinkType): JSX.Element => {
    return (
        <a
                 aria-disabled="false" rel="noreferrer"
                 target="_blank"
                 className='navbar-right-side-item rwdDisplay'
      >
            <span className={'navbar-right-side-item rwdDisplay ' + (text === 'Offers' ? 'active-header' : null )  }>
                {text}
            </span>
        </a>
    );
};

export default RightSideReferenceComponent;
