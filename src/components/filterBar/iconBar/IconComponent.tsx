import React from 'react';


const IconComponent = ({ name, icon }: { name: string, icon: JSX.Element }): JSX.Element => {
    return (
            <div className="icon">
                <a className="circle" href="/all/">
                    {icon}
                </a>
                <span className="under-icon">
                    {name}
                </span>
            </div>
    );
};

export default IconComponent;