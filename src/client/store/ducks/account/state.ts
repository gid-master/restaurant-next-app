import { IOrder } from '@/client/interfaces/IOrder';

export interface AccountState {
    orders: IOrder[];
}

export const INITIAL_STATE: AccountState = {
    orders: []
};
