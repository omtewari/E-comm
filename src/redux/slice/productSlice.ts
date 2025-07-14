import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchCategories, fetchProductsByCategory } from '../../api/products';

export const getProducts = createAsyncThunk('products/getAll', async () => {
  const res = await fetchAllProducts();
  return res.data;
});

export const getCategories = createAsyncThunk('products/getCategories', async () => {
  const res = await fetchCategories();
  return res.data;
});

export const getProductsByCategory = createAsyncThunk('products/byCategory', async (category: string) => {
  const res = await fetchProductsByCategory(category);
  return res.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    categories: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default productSlice.reducer;
