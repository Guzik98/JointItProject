import React from 'react';
import SettingsIcon from '../../../../../../../../assets/icons/svg/SettingsIcon';

const Settings = () : JSX.Element => {
    return (
        <div className='sign-btn'>
             <span className="sign-btn-label ">
                 <SettingsIcon/>
                    Settings
            </span>
        </div>
    );
};

export default Settings;