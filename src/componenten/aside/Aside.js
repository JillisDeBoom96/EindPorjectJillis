import React from 'react';
import "./Aside.css"
import Button from "../button/Button";

function Aside({}) {
    return (
        <div className="asideContainer">
            <Button
                target="/profile-page"
                text="Profile"
            />
            <Button
                target="/upload-page"
                text="Drop Demo"
            />
            <Button
                target="/Demo's"
                text="Demo's"
            />
            <Button
                target="/"
                text="HomePage"
            />

        </div>
    );
}

export default Aside;