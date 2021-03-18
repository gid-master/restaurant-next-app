import { IOrder, IOrderReview } from '@/client/interfaces/IOrder';
import { AccountActions, AccountActionsTypes } from './types';

export const GetOrdersSuccess = (orders: IOrder[]): AccountActions => ({
    type: AccountActionsTypes.GET_ORDERS_SUCCESS,
    payload: orders
});

export const SetReviewSuccess = (review: IOrderReview): AccountActions => ({
    type: AccountActionsTypes.SET_REVIEW_SUCCESS,
    payload: review
});
