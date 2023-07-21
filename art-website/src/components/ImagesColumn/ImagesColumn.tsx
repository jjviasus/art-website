import React from "react";
import IMG_5543 from "../../assets/IMG_5543.jpg";
import IMG_5544 from "../../assets/IMG_5544.jpg";
import IMG_5547 from "../../assets/IMG_5547.jpg";
import IMG_5548 from "../../assets/IMG_5548.jpg";
import IMG_5550 from "../../assets/IMG_5550.jpg";
import IMG_5551 from "../../assets/IMG_5551.jpg";
import IMG_5552 from "../../assets/IMG_5552.jpg";
import IMG_5553 from "../../assets/IMG_5553.jpg";
import IMG_5554 from "../../assets/IMG_5554.jpg";
import IMG_5555 from "../../assets/IMG_5555.jpg";
import IMG_5556 from "../../assets/IMG_5556.jpg";
import IMG_5557 from "../../assets/IMG_5557.jpg";

export function ImagesColumn() {
    return (
        <div className="images-column">
            <div className="dream">
                <img src={IMG_5543} alt="Painting Name 1" />
                <img src={IMG_5544} alt="Painting Name 2" />
                <img src={IMG_5547} alt="Painting Name 4" />
                <img src={IMG_5548} alt="Painting Name 5" />
            </div>
            <div className="dream">
                <img src={IMG_5550} alt="Painting Name 7" />
                <img src={IMG_5551} alt="Painting Name 8" />
                <img src={IMG_5552} alt="Painting Name 9" />
                <img src={IMG_5553} alt="Painting Name 10" />
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
