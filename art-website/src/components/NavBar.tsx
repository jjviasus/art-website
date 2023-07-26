import closeIcon from "../assets/icons/times-solid.svg";
import React from "react";
import "../styles/NavBar.css"

interface NavBarProps {
    isOpen: boolean;
    onClose: () => void;
    onItemClick: (item: string) => void;
}

export function NavBar({isOpen, onClose, onItemClick}: NavBarProps) {
    return (
        <div className={`nav-bar ${isOpen ? "open" : ""}`}>
            <div className="close-btn" onClick={onClose}>
                <img className="closeIcon" src={closeIcon} alt="Close"/>
            </div>
            <div className="nav-items">
                <div className="nav-item" onClick={() => onItemClick("Item 1")}>
                    Item 1
                </div>
                <div className="nav-item" onClick={() => onItemClick("Item 2")}>
                    Item 2
                </div>
                <div className="nav-item" onClick={() => onItemClick("Item 3")}>
                    Item 3
                </div>
            </div>
        </div>
    );
}