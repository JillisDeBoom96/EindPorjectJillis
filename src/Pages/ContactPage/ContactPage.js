import React from 'react';
import './ContactPage.css';
import SubmitButton from "../componenten/buttons/SubmitButton";
import {useHistory} from "react-router-dom";


function ContactPage({}) {

    const history = useHistory();

    function handleClick() {
        history.push("/")
        alert("Request has been send.");
    }

    return (
        <div className="contactPage">
            <form onSubmit={handleClick} className="formContact">
                <fieldset className="fieldsetContact">
                    <legend>Contact</legend>
                    <p><b>We only respond during work days.</b></p>

                    <label className="label-contact">Name*</label>
                    <input type="text" placeholder="Don Diablo"/>

                    <label className="label-contact">Subject*</label>
                    <input type="text" placeholder=""/>

                    <label className="label-contact">Message*</label>
                    <textarea style={{borderRadius: "10px"}} className="textarea-contact" name="Message" id="Message" cols="30" rows="10" placeholder="Your reason to contact."></textarea>

                    <SubmitButton
                    id="submit-login"
                    text="submit"
                    />



                    <p>Email: DonDiablo@Hexagon.com</p>
                </fieldset>
            </form>
        </div>
    );
}

export default ContactPage;