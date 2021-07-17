import React from 'react';
import {useHistory} from "react-router-dom";
import "./ProfileButton.css";

function ProfileButton({target, text}) {
    const history = useHistory();

    function handleClick() {
        history.push(target);
    }

    return (
        <article>
            <button className="profile-button"
                    type="button"
                    onClick = {handleClick}
            >{text}
            </button>



        </article>
    )
}

export default ProfileButton;