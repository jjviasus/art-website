import React from "react";
import imageData, {PaintingData} from "../../data/paintingData";

interface ImagesColumnProps {
    selectedCategory: string;
    setSelectedPainting: (image: PaintingData | null) => void;
}

export function Paintings({selectedCategory, setSelectedPainting}: ImagesColumnProps) {
    const handlePaintingClick = (image: PaintingData) => {
        console.log(`Painting ${image.alt} clicked!`);
        setSelectedPainting(image); // Call the onSelectPainting function with the selected painting
    }

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
        <div className="images-column">
            {columns.map((column, columnIndex) => (
                <div className="dream" key={columnIndex}>
                    {column.map((image) => (
                        <img src={image.src} alt={image.alt} key={image.id} onClick={() => handlePaintingClick(image)}/>
                    ))}
                </div>
            ))}
        </div>
    );
}






