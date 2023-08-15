import React from 'react';
import {useParams, Link} from 'react-router-dom';
import '../styles/IndividualPainting.css';
import imageData from '../data/paintingData';
import leftArrow from '../assets/icons/left-arrow.svg';
import rightArrow from '../assets/icons/right-arrow.svg';

interface IndividualPaintingProps {
    selectedCategory: string;
}

export function IndividualPainting({selectedCategory}: IndividualPaintingProps) {
    const {id} = useParams();

    // Check if the id parameter is undefined or not a valid number
    if (!id || isNaN(parseInt(id))) {
        return <></>;
    }

    const paintingId = parseInt(id);

    // Filter paintings that belong to the same category as the current painting
    const filteredPaintings = imageData.filter(painting => painting.categories.includes(selectedCategory));

    const currentIndex = filteredPaintings.findIndex((painting) => painting.id === paintingId);

    // Calculate the index of the previous painting within the selected category
    const previousIndex = (currentIndex - 1 + filteredPaintings.length) % filteredPaintings.length;

    // Find the painting with the matching id in the imageData array
    const painting = imageData.find((painting) => painting.id === paintingId);

    if (!painting) {
        return <div>Painting not found.</div>;
    }

    return (
        <>
            <div className="individual-painting-container-desktop">
                <Link
                    to={`/paintings/${filteredPaintings[previousIndex].id}`}
                    className="arrow"
                >
                    <img src={leftArrow} alt="Left arrow"/>
                </Link>
                <div className="individual-painting-container-content">
                    <div className="font-inria-serif-bold black-text">
                        {painting.alt}
                    </div>
                    <img src={painting.src} alt="" key=""/>
                    <div className="font-inria-serif-light dark-gray-text">
                        {painting.dimensions}, {painting.medium},{' '}
                        {painting.surface_material}, {painting.year}
                    </div>
                </div>
                <Link
                    to={`/paintings/${filteredPaintings[(currentIndex + 1) % filteredPaintings.length].id}`}
                    className="arrow"
                >
                    <img src={rightArrow} alt="Right arrow"/>
                </Link>
            </div>
            <div className="individual-painting-container-mobile">
                <img src={painting.src} alt="" key=""/>
                <div className="title font-inria-serif-bold-sm black-text">
                    {painting.alt}
                </div>
                <div className="font-inria-serif-light-sm dark-gray-text">
                    {painting.dimensions}, {painting.medium},{' '}
                    {painting.surface_material}, {painting.year}
                </div>
            </div>
        </>
    );
}
