import React from 'react';
import MyProfileIcon from '../../../../../../../../assets/icons/svg/MyProfileIcon';

const MyProfile = (): JSX.Element => {
    return (
        <div className='sign-btn'>
             <span className="sign-btn-label ">
                 <MyProfileIcon/>
                    My profile
            </span>
        </div>
    );
};

export default MyProfile;