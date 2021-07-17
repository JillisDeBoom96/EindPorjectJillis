import React from 'react';
import "./LoginPage.css";
import SignUpButton from "../componenten/buttons/SignUpButton";
import LoginButton from "../componenten/buttons/LoginButton";
import Checkbox from "../componenten/buttons/Checkbox";


function LoginPage({}) {
    return (
        <div className="formLogin">
            <form action="" >
                <fieldset className="fieldsetLogin">
                <legend>Login</legend>
                    <label className="login-label">Username:</label>
                    <input className="inputMargin" type="Text" placeholder="DonDiablo"/>
                    <label className="login-label">Password:</label>
                    <input type="Text" placeholder="*******"/>
                    <Checkbox  text="Remember my username."/>

                    
                    <SignUpButton
                        id="sign-up"
                        target="/signup-page"
                        text="Sign up here"
                    />

                    <LoginButton
                    id="login-button"
                    target="/"
                    text="Login"
                    />

                </fieldset>


            </form>

        </div>
    );
}

export default LoginPage;