import React from 'react';
import "./Footer.css";
import MenuButton from "../buttons/MenuButton";

function Footer({}) {
    return (
        <div className="footerContainer">
            <MenuButton
                target="/"
                text={"Log out"}
            />
        </div>
    );
}

export default Footer;