import closeIcon from "../assets/icons/times-solid.svg";
import React from "react";
import "../styles/NavBar.css"
import {Categories} from "./TextSection/Categories";
import {Personal} from "./TextSection/Personal";
import {Socials} from "./TextSection/Socials";

interface NavBarProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    isOpen: boolean;
    onClose: () => void;
}

export function NavBar({selectedCategory, setSelectedCategory, isOpen, onClose}: NavBarProps) {
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category); // Update the selected category in the parent component
    };

    return (
        <div className={`nav-bar ${isOpen ? "open" : ""}`}>
            <div className="close-btn" onClick={onClose}>
                <img className="closeIcon" src={closeIcon} alt="Close"/>
            </div>
            <div className="nav-items">
                <div className="nav-items-container">
                    <div className="nav-item">
                        <Categories selectedCategory={selectedCategory} onSelectCategory={handleCategoryClick}/>
                    </div>
                    <div className="nav-item">
                        <Personal selectedCategory={selectedCategory} onSelectCategory={handleCategoryClick}/>
                    </div>
                    <div className="nav-item">
                        <Socials/>
                    </div>
                </div>
            </div>
        </div>
    );
}