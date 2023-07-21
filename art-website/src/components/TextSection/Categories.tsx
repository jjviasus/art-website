import React from "react";

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}
export function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  const handleCategoryClick = (category: string) => {
    console.log(`Category ${category} clicked!`);
    onSelectCategory(category); // Call the onSelectCategory function with the selected category
  };

  return (
    <div className="categories">
      <div
        className={`row gray-text abel ${selectedCategory === "all" ? "selected-category" : ""}`}
        onClick={() => handleCategoryClick("all")}
      >
        all
      </div>
      <div
        className={`row gray-text abel ${selectedCategory === "still life" ? "selected-category" : ""}`}
        onClick={() => handleCategoryClick("still life")}
      >
        still life
      </div>
      <div
        className={`row gray-text abel ${selectedCategory === "landscape" ? "selected-category" : ""}`}
        onClick={() => handleCategoryClick("landscape")}
      >
        landscape
      </div>
      <div
        className={`row gray-text abel ${selectedCategory === "portrait" ? "selected-category" : ""}`}
        onClick={() => handleCategoryClick("portrait")}
      >
        portrait
      </div>
      <div
        className={`row gray-text abel ${selectedCategory === "figure" ? "selected-category" : ""}`}
        onClick={() => handleCategoryClick("figure")}
      >
        figure
      </div>
      <div
        className={`row gray-text abel ${selectedCategory === "floral" ? "selected-category" : ""}`}
        onClick={() => handleCategoryClick("floral")}
      >
        floral
      </div>
      <div
        className={`row gray-text abel ${selectedCategory === "interior" ? "selected-category" : ""}`}
        onClick={() => handleCategoryClick("interior")}
      >
        interior
      </div>
    </div>
  );
}
