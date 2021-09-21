import React from 'react';
import { Divider } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { IconType, programingLanguageIconArray } from '../../iconBar/programing-language';
import IconComponent from '../../iconBar/IconComponent';
import './Tech.sass';


const TechPopOut = (props: any) => {

    const handleClose = () => {
        props.handleClose ();
    };

    return (
        <>
            <div className="tech-pop-out-title">
                    <span>
                        Technology
                    </span>
                <span>
                         <div className="exit-icon" onClick={handleClose}>
                             <ClearIcon/>
                         </div>
                    </span>
            </div>
            <Divider/>
            <div className="tech-pop-out-content">
                {programingLanguageIconArray.map (({ name, icon }: IconType) =>
                    <IconComponent name={name} icon={icon} key={name}/>)
                }
            </div>
        </>

    );
};

export default TechPopOut;