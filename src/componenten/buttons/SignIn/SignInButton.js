import React from 'react';
import "./SignInButton.css";
function SignInButton({ text}) {

    return (
        <article>
            <button className="signInButton"
                    type="submit"
            >{text}
            </button>



        </article>
    )
}
export default SignInButton;