import React from "react";
import imageData, {PaintingData} from "../data/paintingData";
import '../styles/Gallery.css';
import {Link} from "react-router-dom";
import ImageComponent from "./ImageComponent";

interface GalleryProps {
    selectedCategory: string;
}

export function Gallery({selectedCategory}: GalleryProps) {
    // Filter the ImageData based on the selected category
    const filteredImages: PaintingData[] = imageData.filter((image) =>
        image.categories.includes(selectedCategory)
    );

    // Create three columns and populate them
    const columns: PaintingData[][] = [[], [], []];

    filteredImages.forEach((image, index) => {
        columns[index % 3].push(image);
    });

    return (
        <div className="gallery-container">
            {columns.map((column, columnIndex) => (
                <div className="gallery-column" key={columnIndex}>
                    {column.map((image) => (
                        <div className="gallery-column-content" key={image.id}>
                            <Link to={`/paintings/${image.id}`} className="gallery-column-content-link">
                                <ImageComponent image={image}/>
                            </Link>
                            <div className="gallery-column-title-mobile font-inria-serif-bold-sm black-text">
                                {image.alt}
                            </div>
                            <div className="gallery-column-info-mobile font-inria-serif-light-sm dark-gray-text">
                                {image.dimensions}, {image.medium}, {image.surface_material},{" "}
                                {image.year}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}






