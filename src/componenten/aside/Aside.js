import React from 'react';
import "./Aside.css";
import MenuButton from "../buttons/MenuButton";

function Aside({}) {
    return (
        <div className="asideContainer">

            <MenuButton
                target="/profile-page"
                text="Profile"
            />
            <MenuButton
                target="/upload-page"
                text="Drop Demo"
            />
            <MenuButton
                target="/Demo's"
                text="Demo's"
            />

            <MenuButton
                target="/"
                text="HomePage"
            />

        </div>
    );
}

export default Aside;