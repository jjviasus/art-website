import React, {useEffect, useState} from "react";
import {TextSection} from "./TextSection/TextSection";
import {Paintings} from "./PaintingsSection/Paintings";
import {fadeInAnimation} from "./animations/FadeInAnimation";
import {PaintingData} from "../data/paintingData";
import IndividualPainting from "./PaintingsSection/IndividualPainting";
import {NavBar} from "./NavBar";
import {ArtistHeader} from "./ArtistHeader";


export function About() {
    return (<div>About</div>)
}

export function Contact() {
    return (<div>Contact</div>)
}

export function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState("all"); // Initial "all"
    const [selectedPainting, setSelectedPainting] = useState<PaintingData | null>(null); // Initial null
    const [isNavOpen, setIsNavOpen] = useState(false); // State to manage the navigation panel

    useEffect(() => {
        setSelectedPainting(null)
        fadeInAnimation({selectors: '.dream img'});
    }, [selectedCategory]);

    useEffect(() => {
        fadeInAnimation({selectors: '.dream img'});
    }, [selectedPainting]);

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
            setSelectedPainting(null)
            fadeInAnimation({selectors: '.dream img'});
        } else {
            setSelectedCategory(category);
        }
    }

    // Function to handle hamburger icon click
    const handleHamburgerClick = () => {
        setIsNavOpen((prev) => !prev);
    };

    // Function to handle item clicks in the navigation panel
    const handleNavItemClicked = (item: string) => {
        console.log("Item clicked:", item);
        setIsNavOpen(false);
        // Add any logic you need when an item is clicked
    };

    return (
        <div className="container">
            <ArtistHeader handleHamburgerClick={handleHamburgerClick}/>
            <NavBar
                isOpen={isNavOpen}
                onClose={() => setIsNavOpen(false)}
                onItemClick={handleNavItemClicked}
            />
            <TextSection
                setSelectedCategory={handleCategoryClick}
                selectedCategory={selectedCategory}
            />
            {selectedCategory === "about" ? (
                <About/>
            ) : selectedCategory === "contact" ? (
                <Contact/>
            ) : selectedPainting ? (
                <IndividualPainting painting={selectedPainting}/>
            ) : (
                <Paintings
                    selectedCategory={selectedCategory}
                    setSelectedPainting={setSelectedPainting}
                />
            )}
        </div>
    );
}