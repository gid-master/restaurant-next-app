import { ICart } from '@/client/interfaces/ICart';
import { ICheckoutResponse } from '@/client/interfaces/ICheckout';

export interface CheckoutState {
    cart: ICart[];
    checkout: ICheckoutResponse;
    preferredCart: ICart;
}

export const INITIAL_STATE: CheckoutState = {
    cart: [],
    checkout: null,
    preferredCart: null
};
