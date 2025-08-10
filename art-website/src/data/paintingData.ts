import glass_charm_simplicity from "../assets/paintings/glass_charm_simplicity.jpg";
import my_cup_of_tea from "../assets/paintings/my_cup_of_tea.jpg";
import vintage_treasures from "../assets/paintings/vintage_treasures.jpg";
import citrus_sunshine from "../assets/paintings/citrus_sunshine.jpg";
import a_trio_of_vases_with_daisies from "../assets/paintings/a_trio_of_vases_with_daisies.jpg";
import ensemble from "../assets/paintings/ensemble.jpg";
import fresh_fruit_delight from "../assets/paintings/fresh_fruit_delight.jpg";
// import freshly_squeezed from "../assets/paintings/freshly_squeezed.jpg"; // removed
import kind_of_blue from "../assets/paintings/kind_of_blue.jpg";
import simple_found_objects from "../assets/paintings/simple_found_objects.jpg";
// import a_fragile_delight from "../assets/paintings/a_fragile_delight.jpg"; // removed
import my_favorite_things from "../assets/paintings/my_favorite_things.jpg";
import still_life_with_bird_whistle from "../assets/paintings/still_life_with_bird_whistle.jpg";
import still_life_with_peonies from "../assets/paintings/still_life_with_peonies.jpg";
import memories_of_mom from "../assets/paintings/memories_of_mom.jpg";
import stripes_and_solids from "../assets/paintings/stripes_and_solids.jpg";
// import quince_blossoms_and_two_vases from "../assets/paintings/quince_blossoms_and_two_vases.jpg"; // removed
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
import mt_diablo_ca_challenge from "../assets/paintings/mt_diablo_ca_challenge.jpg";
import winter_in_penticton_bc from "../assets/paintings/winter_in_penticton_bc.jpg";
import winter_in_bc_2 from "../assets/paintings/winter_in_bc_2.jpg";
import backyard_with_red_maple_and_boat from "../assets/paintings/backyard_with_red_maple_and_boat.jpg";
import yellow_leaf_mulberry_tree from "../assets/paintings/yellow_leaf_mulberry_tree.jpg";
import twilight_on_warren_st from "../assets/paintings/twilight_on_warren_st.jpg";
// import homegrown_tomatoes from "../assets/paintings/homegrown_tomatoes.jpg"; // removed
import otis from "../assets/paintings/otis.jpg";
import blue_jar_florals from "../assets/paintings/blue_jar_florals.jpg";
import chululas_and_tabasco from "../assets/paintings/chululas_and_tabasco.jpg";
import cupcake_trio from "../assets/paintings/cupcake_trio.jpg";
import four_cupcakes_with_candles from "../assets/paintings/four_cupcakes_with_candles.jpg";
import green_and_purple_succulents from "../assets/paintings/green_and_purple_succulents.jpg";
import green_olives_in_jar from "../assets/paintings/green_olives_in_jar.jpg";
import green_tabasco_and_vine_tomato from "../assets/paintings/green_tabasco_and_vine_tomato.jpg";
import green_tabasco from "../assets/paintings/green_tabasco.jpg";
import house_on_lavender_farm from "../assets/paintings/house_on_lavender_farm.jpg";
import kalamata_jar from "../assets/paintings/kalamata_jar.jpg";
import lavender_fields_with_sky from "../assets/paintings/lavender_fields_with_sky.jpg";
import lavender_rows from "../assets/paintings/lavender_rows.jpg";
import olive_jar from "../assets/paintings/olive_jar.jpg";
import original_tabasco from "../assets/paintings/original_tabasco.jpg";
import sriracha_and_lime from "../assets/paintings/sriracha_and_lime.jpg";
import succulent from "../assets/paintings/succulent.jpg";
import tomatoes_on_vine from "../assets/paintings/tomatoes_on_vine.jpg";
import vlasic_gherkins from "../assets/paintings/vlasic_gherkins.jpg";

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
    // { // removed
    //     id: 8,
    //     src: freshly_squeezed,
    //     alt: "Freshly Squeezed",
    //     categories: ["all", "still life"],
    //     surface_material: "Acrylic",
    //     medium: "Canvas",
    //     dimensions: "12\" x 9\"",
    //     year: "2023",
    // },
    {
        id: 8,
        src: kind_of_blue,
        alt: "Kind of Blue",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas",
        dimensions: "9\" x 12\"",
        year: "2023",
    },
    {
        id: 9,
        src: simple_found_objects,
        alt: "Simple Found Objects",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas",
        dimensions: "9\" x 12\"",
        year: "2023",
    },
    // { // removed
    //     id: 11,
    //     src: a_fragile_delight,
    //     alt: "A Fragile Delight",
    //     categories: ["all", "still life"],
    //     surface_material: "Acrylic",
    //     medium: "Canvas panel",
    //     dimensions: "12\" x 9\"",
    //     year: "2023",
    // },
    {
        id: 10,
        src: my_favorite_things,
        alt: "My Favorite Things",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas panel",
        dimensions: "9\" x 12\"",
        year: "2023",
    },
    {
        id: 11,
        src: still_life_with_bird_whistle,
        alt: "Still Life with Bird Whistle",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "9\" x 12\"",
        year: "2023",
    },
    {
        id: 12,
        src: still_life_with_peonies,
        alt: "Still Life with Peonies",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 13,
        src: memories_of_mom,
        alt: "Memories of Mom",
        categories: ["all", "portrait"],
        surface_material: "Acrylic",
        medium: "Canvas",
        dimensions: "8\" x 8\"",
        year: "2023",
    },
    {
        id: 14,
        src: stripes_and_solids,
        alt: "Stripes and Solids",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "8\" x 6\"",
        year: "2023",
    },
    // { // removed
    //     id: 17,
    //     src: quince_blossoms_and_two_vases,
    //     alt: "Quince Blossoms and Two Vases",
    //     categories: ["all", "still life", "floral"],
    //     surface_material: "Acrylic",
    //     medium: "Paper",
    //     dimensions: "6\" x 8\"",
    //     year: "2023",
    // },
    {
        id: 15,
        src: rotary_retro,
        alt: "Rotary Retro",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas panel",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 16,
        src: telephone_memories,
        alt: "Telephone Memories",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas panel",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 17,
        src: blue_jars,
        alt: "Blue Jars",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Wooden Cradle Board",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 18,
        src: just_one,
        alt: "Just One...",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Wooden Cradle Board",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 19,
        src: stripes_and_swirls_with_a_trio_of_jars,
        alt: "Stripes and Swirls with a Trio of Jars",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas",
        dimensions: "10\" x 10\"",
        year: "2023",
    },
    {
        id: 20,
        src: springtime_flower,
        alt: "Springtime Flower",
        categories: ["all", "still life", "floral"],
        surface_material: "Acrylic",
        medium: "Wooden Panel",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 21,
        src: hyacinths_and_daffodils,
        alt: "Hyacinths and Daffodils",
        categories: ["all", "still life", "floral"],
        surface_material: "Acrylic",
        medium: "Wooden Panel",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 22,
        src: morning_daffodils,
        alt: "Morning Daffodils",
        categories: ["all", "still life", "floral"],
        surface_material: "Acrylic",
        medium: "Canvas",
        dimensions: "8\" x 10\"",
        year: "2023",
    },
    {
        id: 23,
        src: lemons_and_a_pitcher,
        alt: "Lemons and a Pitcher",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas",
        dimensions: "8\" x 8\"",
        year: "2023",
    },
    {
        id: 24,
        src: yellow_and_crimson,
        alt: "Yellow and Crimson",
        categories: ["all", "still life"],
        surface_material: "Acrylic",
        medium: "Canvas",
        dimensions: "11\" x 14\"",
        year: "2023",
    },
    {
        id: 25,
        src: mt_diablo_ca_challenge,
        alt: "Mt Diablo, CA Challenge",
        categories: ["all", "landscape"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "8\" x 6\"",
        year: "2023",
    },
    {
        id: 26,
        src: winter_in_penticton_bc,
        alt: "Winter in Penticton, BC",
        categories: ["all", "landscape"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "8\" x 6\"",
        year: "2023",
    },
    {
        id: 27,
        src: winter_in_bc_2,
        alt: "Winter in BC #2",
        categories: ["all", "landscape"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "8\" x 6\"",
        year: "2023",
    },
    {
        id: 28,
        src: backyard_with_red_maple_and_boat,
        alt: "Backyard with Red Maple and Boat",
        categories: ["all", "landscape"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 29,
        src: yellow_leaf_mulberry_tree,
        alt: "Yellow Leaf Mulberry Tree",
        categories: ["all", "landscape"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    {
        id: 30,
        src: twilight_on_warren_st,
        alt: "Twilight on Warren St",
        categories: ["all", "landscape"],
        surface_material: "Acrylic",
        medium: "Paper",
        dimensions: "6\" x 6\"",
        year: "2023",
    },
    // { // removed
    //     id: 34,
    //     src: homegrown_tomatoes,
    //     alt: "Homegrown Tomatoes",
    //     categories: ["all", "still life"],
    //     surface_material: "Acrylic",
    //     medium: "Wooden Cradle Board",
    //     dimensions: "6\" x 6\"",
    //     year: "2023",
    // }
    {
        id: 31,
        src: otis,
        alt: "Otis",
        categories: ["all", "animals"],
        surface_material: "Canvas",
        medium: "Acrylic",
        dimensions: "12\" x 12\"",
        year: "2024",
    },
       {
        id: 32,
        src: cupcake_trio,
        alt: "Cupcake Trio",
        categories: ["all", "still life"],
        surface_material: "Cradled wood panel",
        medium: "Acrylic",
        dimensions: "8\" x 8\"",
        year: "2024",
    },
    {
        id: 33,
        src: blue_jar_florals,
        alt: "Blue Jar Florals",
        categories: ["all", "still life", "floral"],
        surface_material: "Canvas board",
        medium: "Oil",
        dimensions: "10\" x 10\"",
        year: "2025",
    },
    {
        id: 34,
        src: chululas_and_tabasco,
        alt: "Chululas and Tabasco",
        categories: ["all", "still life"],
        surface_material: "Canvas",
        medium: "Acrylic",
        dimensions: "8\" x 8\"",
        year: "2025",
    },
    {
        id: 35,
        src: four_cupcakes_with_candles,
        alt: "Four Cupcakes with Candles",
        categories: ["all", "still life"],
        surface_material: "Canvas",
        medium: "Acrylic",
        dimensions: "10\" x 10\"",
        year: "2025",
    },
    {
        id: 36,
        src: green_and_purple_succulents,
        alt: "Green and Purple Succulents",
        categories: ["all", "still life"],
        surface_material: "Canvas paper",
        medium: "Oil",
        dimensions: "6\" x 6\"",
        year: "2025",
    },
    {
        id: 37,
        src: green_olives_in_jar,
        alt: "Green Olives in Jar",
        categories: ["all", "still life"],
        surface_material: "Canvas paper",
        medium: "Oil",
        dimensions: "6\" x 6\"",
        year: "2025",
    },
    {
        id: 38,
        src: green_tabasco_and_vine_tomato,
        alt: "Green Tabasco and Vine Tomato",
        categories: ["all", "still life"],
        surface_material: "Birch panel",
        medium: "Oil",
        dimensions: "6\" x 8\"",
        year: "2025",
    },
    {
        id: 39,
        src: green_tabasco,
        alt: "Green Tabasco",
        categories: ["all", "still life"],
        surface_material: "Birch panel",
        medium: "Oil",
        dimensions: "6\" x 6\"",
        year: "2025",
    },
    {
        id: 40,
        src: house_on_lavender_farm,
        alt: "House on Lavender Farm",
        categories: ["all", "landscape"],
        surface_material: "Canvas",
        medium: "Acrylic",
        dimensions: "10\" x 10\"",
        year: "2025",
    },
    {
        id: 41,
        src: kalamata_jar,
        alt: "Kalamata Jar",
        categories: ["all", "still life"],
        surface_material: "Canvas",
        medium: "Oil",
        dimensions: "5\" x 7\"",
        year: "2025",
    },
    {
        id: 42,
        src: lavender_fields_with_sky,
        alt: "Lavender Fields with Sky",
        categories: ["all", "landscape"],
        surface_material: "Canvas",
        medium: "Acrylic",
        dimensions: "5\" x 7\"",
        year: "2025",
    },
    {
        id: 43,
        src: lavender_rows,
        alt: "Lavender Rows",
        categories: ["all", "landscape"],
        surface_material: "Canvas",
        medium: "Acrylic",
        dimensions: "5\" x 7\"",
        year: "2025",
    },
    {
        id: 44,
        src: olive_jar,
        alt: "Olive Jar",
        categories: ["all", "still life"],
        surface_material: "Canvas",
        medium: "Oil",
        dimensions: "5\" x 7\"",
        year: "2025",
    },
    {
        id: 45,
        src: original_tabasco,
        alt: "Original Tabasco Bottle",
        categories: ["all", "still life"],
        surface_material: "Canvas paper",
        medium: "Oil",
        dimensions: "6\" x 6\"",
        year: "2025",
    },
    {
        id: 46,
        src: sriracha_and_lime,
        alt: "Sriracha and Lime",
        categories: ["all", "still life"],
        surface_material: "Birch panel",
        medium: "Oil",
        dimensions: "6\" x 6\"",
        year: "2025",   
    },
    {
        id: 47,
        src: succulent,
        alt: "Succulent",
        categories: ["all", "still life", "floral"],
        surface_material: "Canvas paper",
        medium: "Oil",
        dimensions: "6\" x 6\"",
        year: "2025",   
    },
    {
        id: 48,
        src: tomatoes_on_vine,
        alt: "Tomatoes on Vine",
        categories: ["all", "still life"],
        surface_material: "Birch panel",
        medium: "Oil",
        dimensions: "6\" x 6\"",
        year: "2025",   
    },
    {
        id: 49,
        src: vlasic_gherkins,
        alt: "Vlasic Gherkins",
        categories: ["all", "still life"],
        surface_material: "Birch panel",
        medium: "Oil",
        dimensions: "6\" x 6\"",
        year: "2025",
    }
];

export default imageData;
