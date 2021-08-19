import React from 'react';
import "./ProfilePage.css";
import ProfileButton from "../../componenten/buttons/Profile/ProfileButton";

function ProfilePage({}) {
    return (
        <div>
            <form className="formProfile" action="">
                <fieldset className="fieldsetProfile">
                    <legend>Profile</legend>
                    <label className="label-profile">Artist name:</label>
                    <input type="text" placeholder="Don Diablo"/>

                    <label className="label-profile">Biography</label>
                    <textarea className="textarea-profile" name="biography" id="biography" cols="30" rows="10" placeholder="Tell something about yourself."></textarea>
                    <ProfileButton
                    text="Save"
                    />


                </fieldset>
            </form>
        </div>
    );
}

export default ProfilePage;