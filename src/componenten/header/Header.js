import React from 'react';
import "./Header.css"
import Button from "../button/Button";

function Header({}) {
    return (
        <div className="headerContainer">
            <nav>
                <Button
                    target="/login-page"
                    text="Login"
                />
                <Button
                    target="/contact-page"
                    text="Contact"
                />
            </nav>
        </div>
    );
}

export default Header;