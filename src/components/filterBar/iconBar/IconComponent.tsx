import React from 'react';


const IconComponent = ({ name, icon }: { name: string, icon: JSX.Element }): JSX.Element => {
    return (
        <div className="icon-bar-level2">
            <div className="icon">
                <a className="circle" href="/all/">
                    {icon}
                </a>
                <span className="under-icon">
                    {name}
                </span>
            </div>
        </div>
    );
};

export default IconComponent;