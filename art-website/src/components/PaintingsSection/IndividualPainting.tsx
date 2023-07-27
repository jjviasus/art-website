import React from 'react';
import {PaintingData} from "../../data/paintingData";
import '../../styles/IndividualPaiting.css'

interface IndividualPaintingProps {
    painting: PaintingData
}

function IndividualPainting({painting}: IndividualPaintingProps) {
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