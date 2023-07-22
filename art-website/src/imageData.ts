import tulips_in_a_vase from "./assets/paintings/tulips_in_a_vase.jpg";
import sunflower from "./assets/paintings/sunflower.jpg";
import a_trio_of_vases_with_daisies from "./assets/paintings/a_trio_of_vases_with_daisies.jpg";
import mom from "./assets/paintings/mom.jpg";
import ensemble from "./assets/paintings/ensemble.jpg";
import my_cup_of_tea from "./assets/paintings/my_cup_of_tea.jpg";
import best_buddy from "./assets/paintings/best_buddy.jpg";
import lobster_man from "./assets/paintings/lobster_man.jpg";

export interface ImageData {
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
    },
    {
        id: 5,
        src: ensemble,
        alt: "Ensemble",
        categories: ["all", "still life"],
        medium: "Acrylic",
        dimensions: "12\" x 9\""
    },
    {
        id: 6,
        src: my_cup_of_tea,
        alt: "My Cup of Tea",
        categories: ["all", "still life"],
        medium: "Acrylic",
        dimensions: "6\" x 6\""
    },
        {
        id: 7,
        src: best_buddy,
        alt: "Best Buddy",
        categories: ["all", "portrait"],
        medium: "Acrylic",
        dimensions: "12\" x 9\""
    },
    {
        id: 8,
        src: lobster_man,
        alt: "Lobster Man",
        categories: ["all", "portrait"],
        medium: "Acrylic",
        dimensions: "6\" x 6\""
    },
];

export default imageData;
