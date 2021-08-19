import React from 'react';
import "./Footer.css";
import MenuButton from "../buttons/Menu/MenuButton";

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