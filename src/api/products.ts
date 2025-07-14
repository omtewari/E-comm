import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const fetchAllProducts = () => axios.get(`${BASE_URL}/products`);
export const fetchCategories = () => axios.get(`${BASE_URL}/products/categories`);
export const fetchProductsByCategory = (category: string) =>
  axios.get(`${BASE_URL}/products/category/${category}`);
export const fetchProductById = (id: string) =>
  axios.get(`${BASE_URL}/products/${id}`);
