import React from 'react';
import {useHistory} from "react-router-dom";
import "./LoginButton.css";

function LoginButton({target, text}) {
    const history = useHistory();

    function handleClick() {
        history.push(target);
    }

    return (
        <article>
            <button className="login-button"
                type="button"
                onClick = {handleClick}
            >{text}
            </button>


        </article>
    )
}

export default LoginButton;