import React from "react";
import {Link} from "react-router-dom";

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
      <Link
        className={`row gray-text abel ${selectedCategory === "all" ? "selected-category" : ""}`}
        onClick={() => handleCategoryClick("all")}
        to="/"
      >
        all
      </Link>
      <Link
        className={`row gray-text abel ${selectedCategory === "still life" ? "selected-category" : ""}`}
        onClick={() => handleCategoryClick("still life")}
        to="/still-life"
      >
        still life
      </Link>
      <Link
        className={`row gray-text abel ${selectedCategory === "landscape" ? "selected-category" : ""}`}
        onClick={() => handleCategoryClick("landscape")}
        to="/landscape"
      >
        landscape
      </Link>
      <Link
        className={`row gray-text abel ${selectedCategory === "portrait" ? "selected-category" : ""}`}
        onClick={() => handleCategoryClick("portrait")}
        to="/portrait"
      >
        portrait
      </Link>
      <Link
        className={`row gray-text abel ${selectedCategory === "figure" ? "selected-category" : ""}`}
        onClick={() => handleCategoryClick("figure")}
        to="/figure"
      >
        figure
      </Link>
      <Link
        className={`row gray-text abel ${selectedCategory === "floral" ? "selected-category" : ""}`}
        onClick={() => handleCategoryClick("floral")}
        to="/floral"
      >
        floral
      </Link>
      <Link
        className={`row gray-text abel ${selectedCategory === "interior" ? "selected-category" : ""}`}
        onClick={() => handleCategoryClick("interior")}
        to="/interior"
      >
        interior
      </Link>
    </div>
  );
}
