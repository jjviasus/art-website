import React from 'react';
import '../styles/IndividualPaiting.css'
import { useParams } from 'react-router-dom';
import imageData from "../data/paintingData";

export function IndividualPainting() {
    const { id } = useParams();

    // Check if the id parameter is undefined or not a valid number
    if (!id || isNaN(parseInt(id))) {
        return <></>;
    }

    // Find the painting with the matching id in the imageData array
    const painting = imageData.find(painting => painting.id === parseInt(id));

    if (!painting) {
        return <div>Painting not found.</div>;
    }

    return (
        <div className="individual-painting-container">
            <div className="individual-painting-container-content">
                <div className="title font-inria-serif-bold">{painting.alt}</div>
                <img src={painting.src} alt="" key=""/>
                <div className="info-purchase">
                    <div className="font-inria-serif-light dark-gray-text">{painting.dimensions}, {painting.medium}, {painting.surface_material}, {painting.year}</div>
                    <div className="font-inria-serif-light dark-gray-text purchase-button">purchase</div>
                </div>
            </div>
        </div>
    );
}