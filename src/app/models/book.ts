export interface Book{
    id: string;
    title: string;
    author: string;
    genre: string;
    description: string;
    rating?: number;
    pages?: number;
    published?: string;
    imageUrl?: string;
}