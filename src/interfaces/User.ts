export interface User {
    name?: string;
    email?: string;
    password?: string;
    isAdmin?: boolean;
}

export interface Product {
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    available?: boolean; 
  }
  