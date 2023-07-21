import React, {useState, useEffect} from "react";
import {TextSection} from "./TextSection/TextSection";
import {Paintings} from "./PaintingsSection/Paintings";
import {fadeInAnimation} from "./animations/FadeInAnimation";

export function About() {
    return (<div>About</div>)
}

export function Contact() {
    return (<div>Contact</div>)
}

export function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState("all"); // Set the initial category to "all"

    useEffect(() => {
        fadeInAnimation(); // Call the fadeInAnimation() function when the Paintings component is displayed
    }, [selectedCategory]);

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
            ) : (
                <Paintings selectedCategory={selectedCategory}/>
            )}
        </div>
    );
}