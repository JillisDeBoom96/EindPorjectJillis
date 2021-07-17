import React from 'react';
import {useHistory} from "react-router-dom";
import "./MenuButton.css";

function MenuButton({target, text}) {
    const history = useHistory();

    function handleClick() {
        history.push(target);
    }

    return (
        <article>
            <button className="menuButton"
                type="button"
                onClick = {handleClick}
            >{text}
            </button>



        </article>
    )
}




export default MenuButton;