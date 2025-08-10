import { PaintingData } from './data/paintingData';

// Sorts the images in descending order by year (newest first), use id as the tie breaker
export function sortPaintings(paintings: PaintingData[]) {
    return paintings.sort((p1, p2) => Number(p2.year) - Number(p1.year) || p1.id - p2.id);
}