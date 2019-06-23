export interface Book{
    id: number;
    title: string;
    author: string;
    genre: string;
    description: string;
    rating?: number;
    pages?: number;
    published?: number;
    imageUrl?: string;
    favorite?: string;
}