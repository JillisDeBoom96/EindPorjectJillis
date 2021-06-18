import React from 'react';
import "./LoginPage.css";
import SignUpButton from "../componenten/buttons/SignUpButton";
import LoginButton from "../componenten/buttons/LoginButton";



function LoginPage({}) {
    return (
        <div className="formLogin">
            <form>
                <fieldset>
                <legend>Login</legend>
                    <label>Username:</label>
                    <input type="Text" placeholder="DonDiablo"/>
                    <label>Password:</label>
                    <input type="Text" placeholder="*******"/>

                    <SignUpButton
                        id="sign-in"
                        target="/"
                        text="Sign up here."
                    >Sign-Up</SignUpButton>

                    <LoginButton
                    id="login-button"
                    target="/"
                    text="Login"
                    >Login</LoginButton>

                </fieldset>


            </form>

        </div>
    );
}

export default LoginPage;