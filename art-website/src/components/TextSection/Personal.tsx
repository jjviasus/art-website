import React from "react";

interface PersonalProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function Personal({ selectedCategory, onSelectCategory }: PersonalProps) {
  const handleCategoryClick = (category: string) => {
    console.log(`Personal ${category} clicked!`);
    onSelectCategory(category)  // Call the onSelectPersonal function with the selected personal category
  };

  return (
    <div className="personal">
      <div className={`row gray-text abel ${selectedCategory === "about" ? "selected-category" : ""}`} onClick={() => handleCategoryClick("about")}>
        about
      </div>
      <div className={`row gray-text abel ${selectedCategory === "contact" ? "selected-category" : ""}`} onClick={() => handleCategoryClick("contact")}>
        contact
      </div>
    </div>
  );
}
