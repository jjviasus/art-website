import {ArtistName} from "./ArtistName";
import {Categories} from "./Categories";
import {Personal} from "./Personal";
import {Socials} from "./Socials";
import React from "react";
import '../../styles/TextSection.css';

interface TextColumnProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

export function TextSection({selectedCategory, setSelectedCategory}: TextColumnProps) {
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category); // Update the selected category in the parent component
    };

    return (
        <div className="text-column">
            <ArtistName/>
            <Categories
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategoryClick}
            />
            <div className="text-column-bottom-row">
                <Personal
                    selectedCategory={selectedCategory}
                    onSelectCategory={handleCategoryClick}
                />
                <Socials/>
            </div>
        </div>
    );
}
