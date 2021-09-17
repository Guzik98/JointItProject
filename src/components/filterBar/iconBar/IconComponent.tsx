import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../../../Settings';



const IconComponent = ({ name, icon }: { name: string, icon: JSX.Element }): JSX.Element => {
    const  { city, setTech } = useSettings();
    return (

                    <Link to={`/${city}/${name}`} onClick={() => setTech( `${name}` ) } className="icon-level-2">
                        <div className="icon" key={name}>
                        <a className="circle" >
                            {icon}
                        </a>
                        <span className="under-icon">
                            {name}
                        </span>
                        </div>
                    </Link>

    );
};

export default IconComponent;