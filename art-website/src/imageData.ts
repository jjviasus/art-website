import tulips_in_a_vase from "./assets/paintings/tulips_in_a_vase.jpg";
import sunflower from "./assets/paintings/sunflower.jpg";
import a_trio_of_vases_with_daisies from "./assets/paintings/a_trio_of_vases_with_daisies.jpg";
import mom from "./assets/paintings/mom.jpg";

interface ImageData {
  id: number;
  src: string;
  alt: string;
  categories: string[];
  medium: string;
  dimensions: string;
}

const imageData: ImageData[] = [
    {
        id: 1,
        src: sunflower,
        alt: "Sunflower",
        categories: ["all", "floral"],
        medium: "",
        dimensions: "",
    },
    {
        id: 2,
        src: tulips_in_a_vase,
        alt: "Tulips in a Vase",
        categories: ["all", "floral"],
        medium: "",
        dimensions: "",
    },
    {
        id: 3,
        src: a_trio_of_vases_with_daisies,
        alt: "A Trio of Vases with Daisies",
        categories: ["all", "floral", "still life"],
        medium: "Acrylic",
        dimensions: "9\" x 12\""
    },
        {
        id: 4,
        src: mom,
        alt: "Mom",
        categories: ["all", "portrait"],
        medium: "Acrylic",
        dimensions: "8\" x 8\""
    }
];

export default imageData;
