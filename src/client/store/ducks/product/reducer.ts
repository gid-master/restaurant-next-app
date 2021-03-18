import { Reducer } from 'redux';
import { ProductState, INITIAL_STATE } from './state';
import { ProductActions, ProductActionsTypes } from './types';

const productReducer: Reducer<ProductState, ProductActions> = (state: ProductState = INITIAL_STATE, action: ProductActions): ProductState => {
    switch (action.type) {
        case ProductActionsTypes.SET_SEARCH_TERM:
            return { ...state, searchTerm: action.payload };

        case ProductActionsTypes.SET_SORT:
            return { ...state, sortId: action.payload };

        case ProductActionsTypes.SET_FILTER:
            return { ...state, filterId: action.payload };

        case ProductActionsTypes.GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload };

        default:
            return state;
    }
};

export default productReducer;
