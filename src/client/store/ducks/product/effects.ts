import { ThunkAction } from 'redux-thunk';
import { getAllProducts } from '@/client/services/ProductService';
import { IResponse } from '@/client/interfaces/IResponse';
import { IProduct } from '@/client/interfaces/IProduct';
import { ApplicationState } from '@/client/store';
import { ProductActions } from './types';
import { GetProductsSuccess } from './actions';

type Effect = ThunkAction<void, ApplicationState, null, ProductActions>;

export const GetProducts = (): Effect => async (dispatch) => {
    const response: IResponse<IProduct[]> = await getAllProducts();
    dispatch(GetProductsSuccess(response.success ? response.data : null));
};
