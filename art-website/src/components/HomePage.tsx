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

    return (
        <div className="container">
            <TextSection
                setSelectedCategory={setSelectedCategory}
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