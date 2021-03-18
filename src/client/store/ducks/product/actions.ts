import { IProduct } from '@/client/interfaces/IProduct';
import { ProductActions, ProductActionsTypes } from './types';

export const SetSearchTerm = (searchTerm: string): ProductActions => ({
    type: ProductActionsTypes.SET_SEARCH_TERM,
    payload: searchTerm
});

export const SetSort = (sortId: string): ProductActions => ({
    type: ProductActionsTypes.SET_SORT,
    payload: sortId
});

export const SetFilter = (filterId: string): ProductActions => ({
    type: ProductActionsTypes.SET_FILTER,
    payload: filterId
});

export const GetProductsSuccess = (products: IProduct[]): ProductActions => ({
    type: ProductActionsTypes.GET_PRODUCTS_SUCCESS,
    payload: products
});
