import tulips_in_a_vase from "./assets/tulips_in_a_vase.jpg";
import sunflower from "./assets/sunflower.jpg.jpg";
import a_trio_of_vases_with_daisies from "./assets/a_trio_of_vases_with_daisies.jpg";
import mom from "./assets/mom.jpg";

interface ImageData {
  id: number;
  src: string;
  alt: string;
  categories: string[];
  medium: string;
  dimensions: string;
}

const imagesData: ImageData[] = [
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

export default imagesData;
