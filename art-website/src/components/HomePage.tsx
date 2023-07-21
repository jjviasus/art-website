import React from "react";
import { TextColumn } from "./TextColumn/TextColumn";
import { ImagesColumn } from "./ImagesColumn/ImagesColumn";

export function HomePage() {
    return <div className="container">
        <TextColumn/>
        <ImagesColumn/>
    </div>;
}