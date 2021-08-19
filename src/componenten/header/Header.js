import React from 'react';
import "./Header.css";
import MenuButton from "../buttons/Menu/MenuButton";

function Header({}) {
    return (
        <div className="headerContainer">
            <nav>
                <MenuButton
                    target="/login-page"
                    text="Login"
                />
                <MenuButton
                    target="/contact-page"
                    text="Contact"
                />
            </nav>
        </div>
    );
}

export default Header;