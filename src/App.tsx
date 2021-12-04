import React from 'react';
import './App.sass';
import { Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/signup/SignUpPage';
import SignInPage from './pages/signin/SignInPage';
import MainPage from './pages/main-page/MainPage';
import PostOfferForm from './pages/post-offers/PostOfferForm';
import EditOffer from './pages/edit-offer/EditOffer';

const App = (): JSX.Element  => {

    return (
        <Routes>
            <Route path="/" element={<SignInPage/>} />
            <Route path="/signin" element={<SignInPage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/mainpage"  element={<MainPage/>} />
            <Route path="/postoffer" element={<PostOfferForm/>} />
            <Route path="/mainpage/edit-offer" element={<EditOffer/>}/>
        </Routes>
    );
};

export default App;
