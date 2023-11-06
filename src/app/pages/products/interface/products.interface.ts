export interface Products {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    images:      string[];
    category: Category;
}
export interface ItemsCart extends Products {
    quantity: number;
}

export interface Category {
    id:         number;
    name:       string;
    image:      string;
}