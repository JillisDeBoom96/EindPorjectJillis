import React from 'react';
import "./SignUpPage.css";
import Checkbox from "../componenten/buttons/Checkbox";
import SignInButton from "../componenten/buttons/SignInButton";
import {useHistory} from "react-router-dom";



function SignUpPage({}) {
    const history = useHistory();

    function handleClick() {
        history.push("/login-page");
        alert("Account has been made.")
    }

    return (
        <div className="signUpPage">
            <form onSubmit={handleClick}>
                <fieldset className="fieldsetSignUp">
                    <legend>Sign-Up</legend>
                    <label className="label-signup">Username*</label>
                    <input type="text" placeholder="DonDiablo"/>

                    <label className="label-signup">Password*</label>
                    <input type="text" placeholder="******"/>

                    <label className="label-signup">Confirm Password*</label>
                    <input type="text" placeholder="******"/>

                    <label className="label-signup">E-Mail*</label>
                    <input type="text" placeholder="DonDiablo@DonDiablo.com"/>

                    <label className="label-signup">Confirm E-Mail*</label>
                    <input type="text" placeholder="DonDiablo@DonDiablo.com"/>

                    <label className="label-signup">Instagram</label>
                    <input type="text" placeholder=""/>

                    <label className="label-signup">Facebook</label>
                    <input type="text" placeholder=""/>

                    <label className="label-signup">Phone number</label>
                    <input type="text" placeholder="+31 612 3456 789"/>

                    <Checkbox text="Keep me up to date about Demo's that have been checked out."/>
                    <Checkbox text="Keep me up to date about news of Don Diablo's team."/>

                <SignInButton
                    id="sign-in"
                    text="Sign-In"
                />



                </fieldset>
            </form>

        </div>
    );
}

export default SignUpPage;