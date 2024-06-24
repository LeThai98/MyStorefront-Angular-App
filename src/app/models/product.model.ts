export interface Product {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
}

export interface AddedProduct extends Product{
    amount: string;
}