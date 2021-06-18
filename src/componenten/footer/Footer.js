import React from 'react';
import "./Footer.css"
import Button from "../button/Button";

function Footer({}) {
    return (
        <div className="footerContainer">
            <Button
                target="/"
                text={"Log out"}
            />
        </div>
    );
}

export default Footer;