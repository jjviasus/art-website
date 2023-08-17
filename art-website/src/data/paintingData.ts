import glass_charm_simplicity from "../assets/paintings/glass_charm_simplicity.jpg";
import my_cup_of_tea from "../assets/paintings/my_cup_of_tea.jpg";
import vintage_treasures from "../assets/paintings/vintage_treasures.jpg";
import citrus_sunshine from "../assets/paintings/citrus_sunshine.jpg";
import a_trio_of_vases_with_daisies from "../assets/paintings/a_trio_of_vases_with_daisies.jpg";
import ensemble from "../assets/paintings/ensemble.jpg";
import fresh_fruit_delight from "../assets/paintings/fresh_fruit_delight.jpg";
import freshly_squeezed from "../assets/paintings/freshly_squeezed.jpg";
import kind_of_blue from "../assets/paintings/kind_of_blue.jpg";
import simple_found_objects from "../assets/paintings/simple_found_objects.jpg";
import a_fragile_delight from "../assets/paintings/a_fragile_delight.jpg";
import my_favorite_things from "../assets/paintings/my_favorite_things.jpg";
import still_life_with_bird_whistle from "../assets/paintings/still_life_with_bird_whistle.jpg";
import still_life_with_peonies from "../assets/paintings/still_life_with_peonies.jpg";
import memories_of_mom from "../assets/paintings/memories_of_mom.jpg";
import stripes_and_solids from "../assets/paintings/stripes_and_solids.jpg";
import quince_blossoms_and_two_vases from "../assets/paintings/quince_blossoms_and_two_vases.jpg";
import rotary_retro from "../assets/paintings/rotary_retro.jpg";
import telephone_memories from "../assets/paintings/telephone_memories.jpg";
import blue_jars from "../assets/paintings/blue_jars.jpg";
import just_one from "../assets/paintings/just_one.jpg";
import stripes_and_swirls_with_a_trio_of_jars from "../assets/paintings/stripes_and_swirls_with_a_trio_of_jars.jpg";
import springtime_flower from "../assets/paintings/springtime_flower.jpg";
import hyacinths_and_daffodils from "../assets/paintings/hyacinths_and_daffodils.jpg";
import morning_daffodils from "../assets/paintings/morning_daffodils.jpg";
import lemons_and_a_pitcher from "../assets/paintings/lemons_and_a_pitcher.jpg";
import yellow_and_crimson from "../assets/paintings/yellow_and_crimson.jpg";

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
        src: glass_charm_simplicity,
        alt: "Glass Charm Simplicity",
        categories: ["all", "still life"],
        surface_material: "Wooden cradle board",
        medium: "Acrylic",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 2,
        src: my_cup_of_tea,
        alt: "My Cup of Tea",
        categories: ["all", "still life"],
        surface_material: "Paper",
        medium: "Acrylic",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 3,
        src: vintage_treasures,
        alt: "Vintage Treasures",
        categories: ["all", "still life"],
        surface_material: "Canvas panel",
        medium: "Acrylic",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 4,
        src: citrus_sunshine,
        alt: "Citrus Sunshine",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 5,
        src: a_trio_of_vases_with_daisies,
        alt: "A Trio of Vases with Daisies",
        categories: ["all", "still life", "floral"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "9\" x 12\"",
        year: "2023",
    },
    {
        id: 6,
        src: ensemble,
        alt: "Ensemble",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "12\" x 9\"",
        year: "2023",
    },
    {
        id: 7,
        src: fresh_fruit_delight,
        alt: "Fresh Fruit Delight",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "8\" x 6\"",
        year: "2023",
    },
    {
        id: 8,
        src: freshly_squeezed,
        alt: "Freshly Squeezed",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas",
        dimensions: "12\" x 9\"",
        year: "2023",
    },
    {
        id: 9,
        src: kind_of_blue,
        alt: "Kind of Blue",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas",
        dimensions: "9\" x 12\"",
        year: "2023",
    },
    {
        id: 10,
        src: simple_found_objects,
        alt: "Simple Found Objects",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas",
        dimensions: "9\" x 12\"",
        year: "2023",
    },
    {
        id: 11,
        src: a_fragile_delight,
        alt: "A Fragile Delight",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas panel",
        dimensions: "12\" x 9\"",
        year: "2023",
    },
    {
        id: 12,
        src: my_favorite_things,
        alt: "My Favorite Things",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas panel",
        dimensions: "9\" x 12\"",
        year: "2023",
    },
    {
        id: 13,
        src: still_life_with_bird_whistle,
        alt: "Still Life with Bird Whistle",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "9\" x 12\"",
        year: "2023",
    },
    {
        id: 14,
        src: still_life_with_peonies,
        alt: "Still Life with Peonies",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 15,
        src: memories_of_mom,
        alt: "Memories of Mom",
        categories: ["all", "portrait"],
        surface_material: "Acrylic",
        medium: "Canvas",
        dimensions: "8\" x 8\"",
        year: "2023",
    },
    {
        id: 16,
        src: stripes_and_solids,
        alt: "Stripes and Solids",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "8\" x 6\"",
        year: "2023",
    },
    {
        id: 17,
        src: quince_blossoms_and_two_vases,
        alt: "Quince Blossoms and Two Vases",
        categories: ["all", "still life", "floral"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "6\" x 8\"",
        year: "2023",
    },
    {
        id: 18,
        src: rotary_retro,
        alt: "Rotary Retro",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas panel",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 19,
        src: telephone_memories,
        alt: "Telephone Memories",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas panel",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 20,
        src: blue_jars,
        alt: "Blue Jars",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Wooden Cradle Board",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 21,
        src: just_one,
        alt: "Just One...",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Wooden Cradle Board",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 22,
        src: stripes_and_swirls_with_a_trio_of_jars,
        alt: "Stripes and Swirls with a Trio of Jars",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas",
        dimensions: "10\" x 10\"",
        year: "2023",
    },
    {
        id: 23,
        src: springtime_flower,
        alt: "Springtime Flower",
        categories: ["all", "still life", "floral"],
        surface_material: "Acrylic",
        medium: "Wooden Panel",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 24,
        src: hyacinths_and_daffodils,
        alt: "Hyacinths and Daffodils",
        categories: ["all", "still life", "floral"],
        surface_material: "Acrylic",
        medium: "Wooden Panel",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 25,
        src: morning_daffodils,
        alt: "Morning Daffodils",
        categories: ["all", "still life", "floral"],
        surface_material: "Acrylic",
        medium: "Canvas",
        dimensions: "8\" x 10\"",
        year: "2023",
    },
    {
        id: 26,
        src: lemons_and_a_pitcher,
        alt: "Lemons and a Pitcher",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas",
        dimensions: "8\" x 8\"",
        year: "2023",
    },
    {
        id: 27,
        src: yellow_and_crimson,
        alt: "Yellow and Crimson",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas",
        dimensions: "11\" x 14\"",
        year: "2023",
    }
];

export default imageData;
