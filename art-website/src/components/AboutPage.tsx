import React from "react";
import personal from "../assets/personal/IMG_1911.jpg";
import "../styles/AboutPage.css";


export function AboutPage() {
    return (
        <div className="about-page-container">
            <img src={personal} alt="personal"/>
            <div className="about-page-header black-text font-kristi">About Me</div>
            <div className="about-page-text black-text font-inria-serif-light">
                <p>
                    Deborah Fanara is an artist with a story as diverse as her creations. Beginning her journey as an
                    art
                    major, she immersed herself in pottery and painting before life led her to a degree in occupational
                    therapy. Now, after years, she has reignited her passion for painting, crafting still lifes that
                    capture
                    the beauty in the ordinary.
                </p>
                <p>
                    Returning to her brushes with fervor, Deborah's daily dedication has birthed a revival. Focusing on
                    still life, she intricately captures the essence of everyday objects, each stroke breathing life
                    into
                    her canvases. Engaging in art challenges on social media, her work finds a community of admirers and
                    fellow creators.
                </p>
                <p>
                    Deborah Fanara's artistic reawakening is a testament to the enduring power of creativity. Her
                    journey
                    from occupational therapy back to the canvas inspires others to pursue their passions, reminding us
                    that
                    it's never too late to embrace the call of art.
                </p>
            </div>
        </div>
    )
}

