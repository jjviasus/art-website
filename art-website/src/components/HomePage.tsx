import React, { useState } from "react";
import { TextSection } from "./TextSection/TextSection";
import { Paintings } from "./PaintingsSection/Paintings";

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all"); // Set the initial category to "all"

  return (
    <div className="container">
      <TextSection setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
      <Paintings selectedCategory={selectedCategory} />
    </div>
  );
}