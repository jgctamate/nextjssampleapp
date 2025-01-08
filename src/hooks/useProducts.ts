import axios from 'axios';

type Product = {
  id: number;
  name: string;
  brand: string;
  basePrice: number;
  description: string;
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = async (): Promise<Product[]> => {
  await delay(2000);
  const response = await axios.get('https://dummyapi.online/api/products');
  return response.data;
};