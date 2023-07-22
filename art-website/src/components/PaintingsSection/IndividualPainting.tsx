import React from 'react';
import {PaintingData} from "../../data/paintingData";

interface IndividualPaintingProps {
    painting: PaintingData
}

function IndividualPainting({painting}: IndividualPaintingProps) {
    return (
        <div>{painting.alt}</div>
    );
}

export default IndividualPainting;