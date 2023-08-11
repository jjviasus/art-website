import hamburger from "../assets/icons/bars-solid.svg";
import React from "react";
import '../styles/MobileArtistHeader.css';

interface HeaderProps {
    handleHamburgerClick: () => void;
}

export function MobileArtistHeader({handleHamburgerClick}: HeaderProps) {
    return (
        <div className="artist-header">
            <div className="black-text inria-serif">Deborah</div>
            <div className="black-text inria-serif">Fanara</div>
            <div className="black-text smaller-text kristi">art</div>
            <img
                className="hamburger"
                src={hamburger}
                alt="hamburger"
                onClick={handleHamburgerClick} // Attach the click event handler to the hamburger icon
            />
        </div>
    );
}