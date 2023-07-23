import React, {useState, useEffect} from "react";
import {TextSection} from "./TextSection/TextSection";
import {Paintings} from "./PaintingsSection/Paintings";
import {fadeInAnimation} from "./animations/FadeInAnimation";
import {PaintingData} from "../data/paintingData";
import IndividualPainting from "./PaintingsSection/IndividualPainting";

export function About() {
    return (<div>About</div>)
}

export function Contact() {
    return (<div>Contact</div>)
}

export function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState("all"); // Initial "all"
    const [selectedPainting, setSelectedPainting] = useState<PaintingData | null>(null); // Initial null

    useEffect(() => {
        setSelectedPainting(null)
        fadeInAnimation({selectors: '.dream img'});
    }, [selectedCategory]);

    useEffect(() => {
        fadeInAnimation({selectors: '.dream img'});
    }, [selectedPainting]);

    const handleCategoryClick = (category: string) => {
        if (category === selectedCategory) {
            setSelectedPainting(null)
            fadeInAnimation({selectors: '.dream img'});
        } else {
            setSelectedCategory(category);
        }
    }

    return (
        <div className="container">
            <div className="header artist-name">
                <div className="black-text inria-serif">Deborah</div>
                <div className="black-text inria-serif">Fanara</div>
                <div className="smaller-text kristi">art</div>
            </div>
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