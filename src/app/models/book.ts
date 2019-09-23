export interface Book{
    id: number;
    title: string;
    author: string;
    genre: string;
    description: string;
    ratingSum?: number;
    ratings?: number;
    pages?: number;
    published?: number;
    imageUrl?: string;
    favorite?: string;
}