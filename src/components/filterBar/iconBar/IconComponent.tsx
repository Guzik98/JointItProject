import React from 'react';
import { useSettings } from '../../../Settings';
import { IconType } from '../../../types/shortTypes';

const IconComponent = (  props  : IconType) : JSX.Element => {
    const { setTech, tech } = useSettings();

    return (
        <div
            onClick={() =>  setTech(`${props.name}`) }
            className = {`${tech !== props.name && tech != 'All' ? 'un-active' : '' }` }
        >
            <div
                className="icon"
                 key={props.name}>
                <span className="circle">
                    {props.icon}
                </span>
                <span className="under-icon">
                    {props.name}
                </span>
            </div>
        </div>
    );
};

export default IconComponent;