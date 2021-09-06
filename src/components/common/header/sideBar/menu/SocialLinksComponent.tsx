import React from 'react';

import { MenuElements } from './MenuItems';


const SocialLinksComponent = ({ href, svg }: MenuElements ) : JSX.Element => {
    return (
        <a
            className="className"
           aria-disabled="false"
           rel="noreferrer"
           href={href}
           target="_blank"
        >
            <span>
                {svg}
            </span>
        </a>
    );
};

export default SocialLinksComponent;