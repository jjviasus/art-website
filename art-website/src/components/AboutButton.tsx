import React from "react";
import {Link} from "react-router-dom";
import '../styles/AboutButton.css';

interface AboutButtonProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function AboutButton({ selectedCategory, onSelectCategory }: AboutButtonProps) {
  const handleCategoryClick = (category: string) => {
    onSelectCategory(category)
  };

  return (
    <div className="aboutButton">
      <Link
          className={`row gray-text font-abel ${selectedCategory === "about" ? "selected-category" : ""}`}
          onClick={() => handleCategoryClick("about")}
          to="/about"
      >
        about
      </Link>
    </div>
  );
}
