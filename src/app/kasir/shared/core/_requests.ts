import api from '@/config/api';
import {
  AddProductToCartRequest,
  AddProductToCartResponse,
  CartsResponse,
  ProductsResponse,
} from './_models';

// Products API
const GET_PRODUCTS = `${process.env.API_URL}/api/products`;
const GET_PRODUCT_BY_ID = `${process.env.API_URL}/api/products/show`;

// Carts API
const ADD_PRODUCT_TO_CART = `${process.env.API_URL}/api/carts/add-product-to-cart`;
const GET_ALL_CARTS = `${process.env.API_URL}/api/carts/all`;
const DELETE_CART_ITEM_BY_ID = `${process.env.API_URL}/api/carts/delete`;
const DELETE_ALL_CART_ITEMS = `${process.env.API_URL}/api/carts/delete/all`;

export async function getAllProducts(
  search: {
    product_name?: string;
  },
  page: number = 1,
  limit?: number
) {
  const actualLimit = limit ?? 10;
  const res = await api.get<IBaseResponse<ProductsResponse[]>>(GET_PRODUCTS, {
    params: {
      ...search,
      page,
      limit: actualLimit,
    },
  });

  return res.data;
}

export async function getProductById(id: string | undefined) {
  const res = await api.get<IBaseResponse<ProductsResponse>>(
    `${GET_PRODUCT_BY_ID}/${id}`
  );

  return res.data.data;
}

export async function addProductToCart(data: AddProductToCartRequest) {
  const res = await api.post<IBaseResponse<AddProductToCartResponse>>(
    ADD_PRODUCT_TO_CART,
    data
  );

  return res.data.data;
}

export async function getAllCarts() {
  const res = await api.get<IBaseResponse<CartsResponse[]>>(GET_ALL_CARTS);
  return res.data;
}

export async function deleteCartById(id: string) {
  const res = await api.delete<IBaseResponse<CartsResponse>>(
    `${DELETE_CART_ITEM_BY_ID}/${id}`
  );
  return res.data;
}

export async function deleteAllCarts() {
  await api.delete<IBaseResponse<CartsResponse>>(DELETE_ALL_CART_ITEMS);
}