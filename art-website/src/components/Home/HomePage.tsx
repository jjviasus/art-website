import {ArtistName} from "./ArtistName";
import {Categories} from "./Categories";
import {Personal} from "./Personal";
import {Socials} from "./Socials";
import React from "react";

export function HomePage() {
    return <div className="container">
        <div className="text-column">
            <ArtistName/>
            <Categories/>
            <Personal/>
            <Socials/>
        </div>
        <div className="images-column">
            Collection of images.
        </div>
    </div>;
}