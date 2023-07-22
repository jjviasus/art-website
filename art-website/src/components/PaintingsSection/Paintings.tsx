import React, {useEffect} from "react";
import imageData, {ImageData} from "../../imageData";

interface ImagesColumnProps {
    selectedCategory: string;
}

export function Paintings({selectedCategory}: ImagesColumnProps) {
    useEffect(() => {
        console.log("Selected Category:", selectedCategory);
    }, [selectedCategory]);

    // Filter the ImageData based on the selected category
    const filteredImages: ImageData[] = imageData.filter((image) =>
        image.categories.includes(selectedCategory)
    );

    // Create three columns and populate them
    const columns: ImageData[][] = [[], [], []];

    filteredImages.forEach((image, index) => {
        columns[index % 3].push(image);
    });

    return (
        <div className="images-column">
            {columns.map((column, columnIndex) => (
                <div className="dream" key={columnIndex}>
                    {column.map((image) => (
                        <img src={image.src} alt={image.alt} key={image.id}/>
                    ))}
                </div>
            ))}
        </div>
    );
}






