import React from "react";

export function Personal() {
  const handlePersonalClick = (section: string) => {
    console.log(`Clicked on ${section} section!`);
  };

  return (
    <div className="personal">
      <div className="row gray-text abel" onClick={() => handlePersonalClick("about")}>
        about
      </div>
      <div className="row gray-text abel" onClick={() => handlePersonalClick("contact")}>
        contact
      </div>
    </div>
  );
}
