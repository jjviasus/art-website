import tulips_in_a_vase from "../assets/paintings/tulips_in_a_vase.jpg";
import sunflower from "../assets/paintings/sunflower.jpg";
import a_trio_of_vases_with_daisies from "../assets/paintings/a_trio_of_vases_with_daisies.jpg";
import mom from "../assets/paintings/mom.jpg";
import ensemble from "../assets/paintings/ensemble.jpg";
import my_cup_of_tea from "../assets/paintings/my_cup_of_tea.jpg";
import best_buddy from "../assets/paintings/best_buddy.jpg";
import lobster_man from "../assets/paintings/lobster_man.jpg";
// import avocados_in_frame from "../assets/paintings/avocados_in_frame.jpg";
// import chickens_in_frame from "../assets/paintings/chickens_in_frame.jpg";
// import pepper_in_frame from "../assets/paintings/pepper_in_frame.jpg";
// import group_3 from "../assets/paintings/group_3.jpg";

// import tulips_in_a_vase from "../assets/paintings/group_3.jpg";
// import sunflower from "../assets/paintings/group_3.jpg";
// import a_trio_of_vases_with_daisies from "../assets/paintings/group_3.jpg";
// import mom from "../assets/paintings/group_3.jpg";
// import ensemble from "../assets/paintings/group_3.jpg";
// import my_cup_of_tea from "../assets/paintings/group_3.jpg";
// import best_buddy from "../assets/paintings/group_3.jpg";
// import lobster_man from "../assets/paintings/group_3.jpg";
// import avocados_in_frame from "../assets/paintings/group_3.jpg";
// import chickens_in_frame from "../assets/paintings/group_3.jpg";
// import pepper_in_frame from "../assets/paintings/group_3.jpg";
// import group_3 from "../assets/paintings/group_3.jpg";

export interface PaintingData {
    id: number;
    src: string;
    alt: string;
    categories: string[];
    surface_material: string;
    medium: string;
    dimensions: string;
    year: string;
}

const imageData: PaintingData[] = [
    {
        id: 1,
        src: sunflower,
        alt: "Sunflower",
        categories: ["all", "floral"],
        surface_material: "Canvas",
        medium: "Acrylic",
        dimensions: "9\" x 9\"",
        year: "2023",
    },
    {
        id: 2,
        src: tulips_in_a_vase,
        alt: "Tulips in a Vase",
        categories: ["all", "floral"],
        surface_material: "Canvas",
        medium: "Acrylic",
        dimensions: "5\" x 7\"",
        year: "2023",
    },
    {
        id: 3,
        src: a_trio_of_vases_with_daisies,
        alt: "A Trio of Vases with Daisies",
        categories: ["all", "floral", "still life"],
        surface_material: "Canvas",
        medium: "Acrylic",
        dimensions: "9\" x 12\"",
        year: "2023",
    },
    {
        id: 4,
        src: mom,
        alt: "Mom",
        categories: ["all", "portrait"],
        surface_material: "Canvas",
        medium: "Acrylic",
        dimensions: "8\" x 8\"",
        year: "2023",
    },
    {
        id: 5,
        src: ensemble,
        alt: "Ensemble",
        categories: ["all", "still life"],
        surface_material: "Canvas",
        medium: "Acrylic",
        dimensions: "12\" x 9\"",
        year: "2023",
    },
    {
        id: 6,
        src: my_cup_of_tea,
        alt: "My Cup of Tea",
        categories: ["all", "still life"],
        surface_material: "Canvas",
        medium: "Acrylic",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 7,
        src: best_buddy,
        alt: "Best Buddy",
        categories: ["all", "portrait"],
        surface_material: "Canvas",
        medium: "Acrylic",
        dimensions: "12\" x 9\"",
        year: "2023",
    },
    {
        id: 8,
        src: lobster_man,
        alt: "Lobster Man",
        categories: ["all", "portrait"],
        surface_material: "Canvas",
        medium: "Acrylic",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    // {
    //     id: 9,
    //     src: avocados_in_frame,
    //     alt: "Avocados in Frame",
    //     categories: ["all", "still life"],
    //     surface_material: "Canvas",
    //     medium: "Acrylic",
    //     dimensions: "6\" x 6\"",
    //     year: "2023",
    // },
    // {
    //     id: 10,
    //     src: chickens_in_frame,
    //     alt: "Chickens in Frame",
    //     categories: ["all", "still life"],
    //     surface_material: "Canvas",
    //     medium: "Acrylic",
    //     dimensions: "6\" x 6\"",
    //     year: "2023",
    // },
    // {
    //     id: 11,
    //     src: pepper_in_frame,
    //     alt: "Pepper in Frame",
    //     categories: ["all", "still life"],
    //     surface_material: "Canvas",
    //     medium: "Acrylic",
    //     dimensions: "6\" x 6\"",
    //     year: "2023",
    // },
    //     {
    //     id: 12,
    //     src: group_3,
    //     alt: "Group 3",
    //     categories: ["all", "still life"],
    //     surface_material: "Canvas",
    //     medium: "Acrylic",
    //     dimensions: "6\" x 6\"",
    //     year: "2023",
    // }
];

export default imageData;
