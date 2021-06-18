import React from "react";
import './App.css';
import Aside from "../componenten/aside/Aside";
import Header from "../componenten/header/Header";
import Footer from "../componenten/footer/Footer";
import donDiablo from "../assets/Don-Diablo.png";
import hexagon from "../assets/Hex.png";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import ProfilePage from "../Pages/ProfilePage";
import SignUpPage from "../Pages/SignUpPage";
import UploadPage from "../Pages/SignUpPage";
import ContactPage from "../Pages/ContactPage";


function App() {
    return (

        <Router>
            <div className="container">

                <Header/>
                <Aside/>

                <switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/login-page">
                        <LoginPage/>
                    </Route>
                    <Route path="/profile-page">
                        <ProfilePage/>
                    </Route>
                    <Route path="/sign-up">
                        <SignUpPage/>
                    </Route>
                    <Route path="/upload-page">
                        <UploadPage/>
                    </Route>
                    <Route path="/contact-page">
                        <ContactPage/>
                    </Route>
                </switch>

                <div className="image">
                    <img id="donDiablo" src={donDiablo} alt="DonDiablo"/>
                    <img id="hexagon" src={hexagon} alt="hexagon"/>
                </div>
                <Footer/>
            </div>

        </Router>
    )
}

export default App;
