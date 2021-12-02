import React from 'react';
import { Header } from '../../components/common';
import MediaQuery from 'react-responsive';
import { Bar } from '../../components/filterBar';
import { MainContainer } from '../../components/mainContainer';
import { useSettings } from '../../Settings';
import { useAuthSettings } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

const MainPage = (): JSX.Element => {
    const navigate = useNavigate();
    const { openDetailComponent } = useSettings();
    const { isAuthenticated } = useAuthSettings();

    console.log(isAuthenticated);

    if (isAuthenticated) {
        return (
            <div className="App">
                <Header/>
                <MediaQuery maxWidth={1025}>
                    {openDetailComponent ? null : <Bar/>}
                </MediaQuery>
                <MediaQuery minWidth={1025}>
                    <Bar/>
                </MediaQuery>
                <MainContainer/>
            </div>
        );
    } else {
        return (
            <>
                {navigate('/signin')}
            </>
        );
    }


};

export default MainPage;