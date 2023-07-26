import hamburger from "../assets/icons/bars-solid.svg";
import React from "react";

interface HeaderProps {
    handleHamburgerClick: () => void;
}

export function Header({handleHamburgerClick}: HeaderProps) {
    return (
        <div className="header">
            <div className="artist-name black-text inria-serif">Deborah</div>
            <div className="artist-name black-text inria-serif">Fanara</div>
            <div className="artist-name smaller-text kristi">art</div>
            <img
                className="hamburger"
                src={hamburger}
                alt="hamburger"
                onClick={handleHamburgerClick} // Attach the click event handler to the hamburger icon
            />
        </div>
    );
}