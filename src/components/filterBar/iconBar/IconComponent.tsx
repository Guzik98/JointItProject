import React from 'react';
import { useSettings } from '../../../Settings';

const IconComponent = ({ name, icon }: { name: string, icon: JSX.Element }): JSX.Element => {
    const { setTech, tech } = useSettings();
    return (
        <div
            onClick={() => setTech(`${name}`)}
            className = {`${tech !== name && tech != 'All' ? 'un-active' : '' }` }
        >
            <div
                className="icon"
                 key={name}>
                <span className="circle">
                    {icon}
                </span>
                <span className="under-icon">
                    {name}
                </span>
            </div>
        </div>
    );
};

export default IconComponent;