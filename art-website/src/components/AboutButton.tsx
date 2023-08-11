import React from "react";
import {Link} from "react-router-dom";
import '../styles/AboutButton.css';

interface PersonalProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function AboutButton({ selectedCategory, onSelectCategory }: PersonalProps) {
  const handleCategoryClick = (category: string) => {
    console.log(`Personal ${category} clicked!`);
    onSelectCategory(category)  // Call the onSelectPersonal function with the selected personal category
  };

  return (
    <div className="aboutButton">
      <Link
          className={`row gray-text abel ${selectedCategory === "about" ? "selected-category" : ""}`}
          onClick={() => handleCategoryClick("about")}
          to="/about"
      >
        about
      </Link>
    </div>
  );
}
