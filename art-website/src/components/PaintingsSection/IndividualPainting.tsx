import React from 'react';
import {PaintingData} from "../../data/paintingData";

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
                    <div className="inria-serif-light">{painting.dimensions}, {painting.surface_material}, {painting.medium}, 2023</div>
                    <div className="inria-serif-bold purchase">purchase</div>
                </div>
            </div>
        </div>
    );
}

export default IndividualPainting;