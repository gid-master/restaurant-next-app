import { ThunkAction } from 'redux-thunk';
import { IResponse } from '@/client/interfaces/IResponse';
import { IOrder, IOrderReview } from '@/client/interfaces/IOrder';
import { getOrders, reviewOrder } from '@/client/services/AccountService';
import { GetOrdersSuccess, SetReviewSuccess } from './actions';
import { AccountState } from './state';
import { AccountActions } from './types';

type Effect = ThunkAction<void, AccountState, null, AccountActions>;

export const GetOrders = (): Effect => async (dispatch) => {
    const response: IResponse<IOrder[]> = await getOrders();
    dispatch(GetOrdersSuccess(response.success ? response.data : null));
};

export const SetReview = (data: IOrderReview): Effect => async (dispatch) => {
    const response: IResponse<IOrderReview> = await reviewOrder(data);
    if (response.success) {
        dispatch(SetReviewSuccess(response.data));
    }
};
