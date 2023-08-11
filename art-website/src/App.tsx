import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import './global.css';
import "./styles/App.css"
import {AboutButton, Categories, Socials} from './components';
import {fadeInAnimation} from './animations/FadeInAnimation';
import {MobileArtistHeader} from "./components/MobileArtistHeader";
import {MobileNavBar} from "./components/MobileNavBar";
import {AboutPage} from "./components/AboutPage";
import {Gallery, IndividualPainting} from "./components";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("all"); // Initial "all"
    const [isNavOpen, setIsNavOpen] = useState(false); // State to manage the navigation panel
    let navigate = useNavigate();

    useEffect(() => {
        fadeInAnimation({selectors: '.dream img'});
    }, [])

    useEffect(() => {
        console.log('navigate')
        fadeInAnimation({selectors: '.dream img'});
    }, [navigate])

    useEffect(() => {
        fadeInAnimation({selectors: '.dream img'});
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
            fadeInAnimation({selectors: '.dream img'});
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
        <div className="container">
            <MobileArtistHeader handleHamburgerClick={handleHamburgerClick}/>
            <MobileNavBar
                setSelectedCategory={handleCategoryClick}
                selectedCategory={selectedCategory}
                isOpen={isNavOpen}
                onClose={() => setIsNavOpen(false)}
            />
            <div className="text-column">
                <div className="artist-name black-text">
                    <div className="inria-serif">Deborah</div>
                    <div className="inria-serif">Fanara</div>
                    <div className="smaller-text kristi">art</div>
                </div>
                <Categories
                    selectedCategory={selectedCategory}
                    onSelectCategory={handleCategoryClick}
                />
                <div className="text-column-bottom-row">
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
                <Route path="/paintings/:id" element={<IndividualPainting/>}/>
            </Routes>
        </div>
    )
}

export default App;
