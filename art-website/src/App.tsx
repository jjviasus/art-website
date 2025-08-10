import React, {useEffect, useState} from 'react';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import './global.css';
import "./styles/App.css"
import {AboutButton, Categories, Socials} from './components';
import {fadeInAnimation} from './animations/FadeInAnimation';
import {AboutPage} from "./components/AboutPage";
import {Gallery, IndividualPainting} from "./components";
import closeIcon from "./assets/icons/times-solid.svg";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("all"); // Initial "all"
    const [isNavOpen, setIsNavOpen] = useState(false); // State to manage the navigation panel
    let navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        /* Remove this to get rid of animation */
        fadeInAnimation({selectors: '.gallery-column img'});
    }, [])

    useEffect(() => {
        if (location.pathname === '/') {
            setSelectedCategory('all')
        } else if (location.pathname === '/still-life') {
            setSelectedCategory('still life')
        } else if (location.pathname === '/landscape') {
            setSelectedCategory('landscape')
        } else if (location.pathname === '/portrait') {
            setSelectedCategory('portrait')
        } else if (location.pathname === '/floral') {
            setSelectedCategory('floral')
        } else if (location.pathname === '/animals') {
            setSelectedCategory('animals')
        } else if (location.pathname === '/about') {
            setSelectedCategory('about')
        }
    }, [location])

    useEffect(() => {
        /* Remove this to get rid of animation */
        fadeInAnimation({selectors: '.gallery-column img'});
    }, [navigate])

    useEffect(() => {
        /* Remove this to get rid of animation */
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
            /* Remove this to get rid of animation */
            fadeInAnimation({selectors: '.gallery-column img'});
        } else {
            setSelectedCategory(category);
        }
        setIsNavOpen(false);
    }

    // Function to handle menu button click
    const handleMenuClick = () => {
        setIsNavOpen((prev) => !prev);
    };

    return (
        <div className="app-container">
            <div className="mobile-artist-header">
                <div className="black-text font-inria-serif">Deborah</div>
                <div className="black-text font-inria-serif">Fanara</div>
                <div className="black-text smaller-text font-kristi">art</div>
                <div className="gray-text mobile-menu-btn font-inria-serif-light" onClick={handleMenuClick}>Menu</div>
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
                <Route path="/animals" element={<Gallery selectedCategory={"animals"}/>}/>
                {/* <Route path="/interior" element={<Gallery selectedCategory={"interior"}/>}/> */}
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/paintings/:id" element={<IndividualPainting selectedCategory={selectedCategory}/>}/>
            </Routes>
        </div>
    )
}

export default App;
