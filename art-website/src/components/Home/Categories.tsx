import React from "react";

export function Categories() {
  const handleCategoryClick = (category: string) => {
    console.log(`Category ${category} clicked!`);
  };

  return (
    <div className="categories">
      <div className="row gray-text abel" onClick={() => handleCategoryClick("all")}>
        all
      </div>
      <div className="row gray-text abel" onClick={() => handleCategoryClick("still life")}>
        still life
      </div>
      <div className="row gray-text abel" onClick={() => handleCategoryClick("landscape")}>
        landscape
      </div>
      <div className="row gray-text abel" onClick={() => handleCategoryClick("portrait")}>
        portrait
      </div>
      <div className="row gray-text abel" onClick={() => handleCategoryClick("figure")}>
        figure
      </div>
      <div className="row gray-text abel" onClick={() => handleCategoryClick("floral")}>
        floral
      </div>
      <div className="row gray-text abel" onClick={() => handleCategoryClick("interior")}>
        interior
      </div>
    </div>
  );
}
