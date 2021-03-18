import { IProduct, IProductAdditionalIncrement } from '@/client/interfaces/IProduct';
import { Action } from 'redux';

export enum ProductActionsTypes {
    SET_SEARCH_TERM = '@product/SET_SEARCH_TERM',
    SET_SORT = '@product/SET_SORT',
    SET_FILTER = '@product/SET_FILTER',
    GET_PRODUCTS_SUCCESS = '@product/GET_PRODUCTS_SUCCESS'
}

interface SetSearchTermAction extends Action {
    type: ProductActionsTypes.SET_SEARCH_TERM;
    payload: string;
}

interface SetSortAction extends Action {
    type: ProductActionsTypes.SET_SORT;
    payload: string;
}

interface SetFilterAction extends Action {
    type: ProductActionsTypes.SET_FILTER;
    payload: string;
}

interface GetProductsSuccessAction extends Action {
    type: ProductActionsTypes.GET_PRODUCTS_SUCCESS;
    payload: IProduct[];
}

export type ProductActions = SetSearchTermAction | SetSortAction | SetFilterAction | GetProductsSuccessAction;
