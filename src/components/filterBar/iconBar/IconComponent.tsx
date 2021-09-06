import React from 'react';


const IconComponent = ({ name, svg }: { name: string, svg: JSX.Element }): JSX.Element => {
    return (
        <div className="icon-bar-level2">
            <div className="icon">
                <a className="circle java-script-icon"  href="/all/">
                    { svg }
                </a>
                <span className="under-icon">
                    { name }
                </span>
            </div>
        </div>
    );
};

export default IconComponent;