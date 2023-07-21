import React, {useEffect} from "react";
import IMG_5543 from "../../assets/paintings/IMG_5543.jpg";
import IMG_5544 from "../../assets/paintings/IMG_5544.jpg";
import IMG_5550 from "../../assets/paintings/IMG_5550.jpg";
import IMG_5554 from "../../assets/paintings/IMG_5554.jpg";
import IMG_5555 from "../../assets/paintings/IMG_5555.jpg";
import IMG_5556 from "../../assets/paintings/IMG_5556.jpg";
import IMG_5557 from "../../assets/paintings/IMG_5557.jpg";

interface ImagesColumnProps {
  selectedCategory: string;
}

export function Paintings({ selectedCategory }: ImagesColumnProps) {
  useEffect(() => {
    console.log("Selected Category:", selectedCategory);
  }, [selectedCategory]);

    return (
        <div className="images-column">
            <div className="dream">
                <img src={IMG_5543} alt="Painting Name 1" />
                <img src={IMG_5544} alt="Painting Name 2" />
            </div>
            <div className="dream">
                <img src={IMG_5550} alt="Painting Name 7" />
            </div>
            <div className="dream">
                <img src={IMG_5554} alt="Painting Name 11" />
                <img src={IMG_5555} alt="Painting Name 12" />
                <img src={IMG_5556} alt="Painting Name 13" />
                <img src={IMG_5557} alt="Painting Name 14" />
            </div>
        </div>
    );
}
