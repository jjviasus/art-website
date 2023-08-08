import React from 'react';
import '../../styles/IndividualPaiting.css'
import { useParams } from 'react-router-dom';
import imageData from "../../data/paintingData";

function IndividualPainting() {
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
        <div className="individual-image-column">
            <div className="painting-container">
                <div className="title inria-serif-bold">{painting.alt}</div>
                <img className="painting-image" src={painting.src} alt="" key=""/>
                <div className="info-purchase">
                    <div className="inria-serif-light dark-gray-text">{painting.dimensions}, {painting.medium}, {painting.surface_material}, {painting.year}</div>
                    <div className="inria-serif-light dark-gray-text purchase">purchase</div>
                </div>
            </div>
        </div>
    );
}

export default IndividualPainting;