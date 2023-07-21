import {ArtistName} from "./ArtistName";
import {Categories} from "./Categories";
import {Personal} from "./Personal";
import {Socials} from "./Socials";
import React from "react";

export function TextColumn() {
    return <div className="text-column">
        <ArtistName/>
        <Categories/>
        <Personal/>
        <Socials/>
    </div>;
}