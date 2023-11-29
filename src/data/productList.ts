
export interface Product {
    id: number;
    productName: string;
    brand: string;
    price: number;
    quantity: number;
    total: number;
    status: string;
    image: string;
  }

export const productList: Product[] = [
    {
      id: 1,
      productName: "Product 1",
      brand: "Brand A",
      price: 20.5,
      quantity: 5,
      total: 102.5,
      status: "Approved",
      image: "image_url",
    },
    {
      id: 2,
      productName: "Product 2",
      brand: "Brand B",
      price: 15.2,
      quantity: 3,
      total: 45.6,
      status: "Missing",
      image: "image_url",
    },
    // Add more products as needed
  ];