import axios from 'axios';
import { IResponse } from '@/client/interfaces/IResponse';
import { IOrder, IOrderReview } from '@/client/interfaces/IOrder';

export const getOrders = async (): Promise<IResponse<IOrder[]>> => axios.get('order');

export const reviewOrder = async (review: IOrderReview): Promise<IResponse<IOrderReview>> => axios.post('order/review', review);
