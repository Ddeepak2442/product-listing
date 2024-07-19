export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    discountPercentage:number;
    price: number;
    rating: number;
    stock: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    thumbnail: string;
    volume: number;
    weight:number;
    brand:string
  }
  