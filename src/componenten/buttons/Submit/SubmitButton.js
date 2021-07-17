import React from 'react';
import "./SubmitButton.css";


function SubmitButton({text}) {

    return (
        <article>
            <button className="submit-button"
                    type="submit"
            >{text}
            </button>



        </article>
    )
}

export default SubmitButton;