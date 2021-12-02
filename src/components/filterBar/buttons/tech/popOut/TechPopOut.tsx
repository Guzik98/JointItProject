import React from 'react';
import { HandlePopOut, IconType } from '../../../../../types/shortTypes';
import { Divider } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { programingLanguageIconArray } from '../../../iconBar/programing-language';
import IconComponent from '../../../iconBar/IconComponent';
import '../Tech.sass';

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
                {programingLanguageIconArray.map((  props   : IconType) =>
                    <div onClick={ handleClose}  key={props.name}>
                        <IconComponent name = {props.name} icon ={ props.icon} />
                    </div>
                )}
            </div>
        </>

    );
};

export default TechPopOut;