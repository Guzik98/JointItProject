import React from 'react';
import { HandlePopOut, IconType } from '../../../../types/shortTypes';
import { Divider } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { programingLanguageIconArray } from '../../iconBar/programing-language';
import IconComponent from '../../iconBar/IconComponent';
import './Tech.sass';

const TechPopOut = ({ handleClose } : HandlePopOut) : JSX.Element=> {
    return (
        <>
            <div className="tech-pop-out-title">
                        Technology
                <div className="exit-icon" onClick={ handleClose }>
                    <ClearIcon/>
                </div>
            </div>
            <Divider/>
            <div className="tech-pop-out-content">
                {programingLanguageIconArray.map(({ name, icon }: IconType) =>
                    <IconComponent name={name} icon={icon} key={name}/>)
                }
            </div>
        </>

    );
};

export default TechPopOut;