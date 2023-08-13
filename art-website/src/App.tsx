import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import './global.css';
import "./styles/App.css"
import {AboutButton, Categories, Socials} from './components';
import {fadeInAnimation} from './animations/FadeInAnimation';
import {AboutPage} from "./components/AboutPage";
import {Gallery, IndividualPainting} from "./components";
import hamburger from "./assets/icons/bars-solid.svg";
import closeIcon from "./assets/icons/times-solid.svg";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("all"); // Initial "all"
    const [isNavOpen, setIsNavOpen] = useState(false); // State to manage the navigation panel
    let navigate = useNavigate();

    useEffect(() => {
        fadeInAnimation({selectors: '.gallery-column img'});
    }, [])

    useEffect(() => {
        console.log('navigate')
        fadeInAnimation({selectors: '.gallery-column img'});
    }, [navigate])

    useEffect(() => {
        fadeInAnimation({selectors: '.gallery-column img'});
    }, [selectedCategory]);

    // Toggle the "no-scroll" class on the body element when the nav bar is open
    useEffect(() => {
        if (isNavOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isNavOpen]);

    const handleCategoryClick = (category: string) => {
        if (category === selectedCategory) {
            fadeInAnimation({selectors: '.gallery-column img'});
        } else {
            setSelectedCategory(category);
        }
        setIsNavOpen(false);
    }

    // Function to handle hamburger icon click
    const handleHamburgerClick = () => {
        setIsNavOpen((prev) => !prev);
    };

    return (
        <div className="app-container">
            <div className="mobile-artist-header">
                <div className="black-text font-inria-serif">Deborah</div>
                <div className="black-text font-inria-serif">Fanara</div>
                <div className="black-text smaller-text font-kristi">art</div>
                <img
                    className="hamburger"
                    src={hamburger}
                    alt="hamburger"
                    onClick={handleHamburgerClick}
                />
            </div>
            <div className={`mobile-nav-bar ${isNavOpen ? "open" : ""}`}>
                <div className="mobile-nav-close-btn" onClick={() => setIsNavOpen(false)}>
                    <img className="mobile-nav-close-icon" src={closeIcon} alt="Close"/>
                </div>
                <div className="mobile-nav-items">
                    <div className="mobile-nav-items-container">
                        <div className="mobile-nav-item">
                            <Categories selectedCategory={selectedCategory} onSelectCategory={handleCategoryClick}/>
                        </div>
                        <div className="mobile-nav-item">
                            <AboutButton selectedCategory={selectedCategory} onSelectCategory={handleCategoryClick}/>
                        </div>
                        <div className="mobile-nav-item">
                            <Socials/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="desktop-nav-bar">
                <div className="desktop-nav-bar-artist-name black-text">
                    <div className="font-inria-serif">Deborah</div>
                    <div className="font-inria-serif">Fanara</div>
                    <div className="smaller-text font-kristi">art</div>
                </div>
                <Categories
                    selectedCategory={selectedCategory}
                    onSelectCategory={handleCategoryClick}
                />
                <div className="desktop-nav-bar-bottom-row">
                    <AboutButton
                        selectedCategory={selectedCategory}
                        onSelectCategory={handleCategoryClick}
                    />
                    <Socials/>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Gallery selectedCategory={"all"}/>}/>
                <Route path="/still-life" element={<Gallery selectedCategory={"still life"}/>}/>
                <Route path="/landscape" element={<Gallery selectedCategory={"landscape"}/>}/>
                <Route path="/portrait" element={<Gallery selectedCategory={"portrait"}/>}/>
                <Route path="/figure" element={<Gallery selectedCategory={"figure"}/>}/>
                <Route path="/floral" element={<Gallery selectedCategory={"floral"}/>}/>
                <Route path="/interior" element={<Gallery selectedCategory={"interior"}/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/paintings/:id" element={<IndividualPainting selectedCategory={selectedCategory}/>}/>
            </Routes>
        </div>
    )
}

export default App;
