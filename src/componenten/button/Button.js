import React from 'react';
import {useHistory} from "react-router-dom";
import "./Button.css";

function Button({target, text}) {
    const history = useHistory();

    function handleClick() {
        history.push(target);
    }

    return (
        <article>
            <button
                type="button"
                onClick = {handleClick}
            >{text}
            </button>



        </article>
    )
}




export default Button;