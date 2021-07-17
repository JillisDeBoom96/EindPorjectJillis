import React from 'react';
import {useHistory} from "react-router-dom";
import "./SignUpButton.css";

function SignUpButton({target, text}) {
    const history = useHistory();

    function handleClick() {
        history.push(target);
    }

    return (
        <article>
            <button className="signUpButton"
                type="button"
                onClick = {handleClick}
            >{text}
            </button>



        </article>
    )
}

export default SignUpButton;