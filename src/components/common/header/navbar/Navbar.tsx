import React from 'react';
import './Navbar.sass';
import PostJob from './buttons/postJob/PostJob';
import { RightSideReferenceArray } from './buttons/rest/RightSideReferenceArray';
import RightSideReferenceComponent from './buttons/rest/RightSideReferenceComponent';
import { useAuthSettings } from '../../../../AuthContext';


const Navbar = (): JSX.Element => {
    const { role } = useAuthSettings();

    return (
        <div className="navbar-container">
            <div className="border-test-job rwdDisplay">
                <p className="text-job ">
                    #1 job Board for IT industry in Poland
                </p>
            </div>
            <div className="navbar-right-side">
                {RightSideReferenceArray.map(({ text }) =>
                    <RightSideReferenceComponent text={text} key={text}/>)}
                { role === 'EMPLOYER' ?
                    <a className="navbar-right-side-item rwdDisplay">
                        <PostJob/>
                    </a>
                    : null
                 }
            </div>
        </div>
    );
};

export default Navbar;