import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import './styles.css';
import "./styles/App.css"
import "./styles/Paintings.css"
import {Paintings, TextSection} from './components';
import {fadeInAnimation} from './components/animations/FadeInAnimation';
import {PaintingData} from "./data/paintingData";
import {ArtistHeader} from "./components/ArtistHeader";
import {NavBar} from "./components/NavBar";
import {About} from "./components/About";
import IndividualPainting from "./components/PaintingsSection/IndividualPainting";

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
            <ArtistHeader handleHamburgerClick={handleHamburgerClick}/>
            <NavBar
                setSelectedCategory={handleCategoryClick}
                selectedCategory={selectedCategory}
                isOpen={isNavOpen}
                onClose={() => setIsNavOpen(false)}
            />
            <TextSection
                setSelectedCategory={handleCategoryClick}
                selectedCategory={selectedCategory}
            />
            <Routes>
                <Route path="/" element={<Paintings selectedCategory={"all"}/>} />
                <Route path="/still-life" element={<Paintings selectedCategory={"still life"}/>} />
                <Route path="/landscape" element={<Paintings selectedCategory={"landscape"}/>} />
                <Route path="/portrait" element={<Paintings selectedCategory={"portrait"}/>} />
                <Route path="/figure" element={<Paintings selectedCategory={"figure"}/>} />
                <Route path="/floral" element={<Paintings selectedCategory={"floral"}/>} />
                <Route path="/interior" element={<Paintings selectedCategory={"interior"}/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/paintings/:id" element={<IndividualPainting/>} />
            </Routes>
        </div>
    )
}

export default App;
