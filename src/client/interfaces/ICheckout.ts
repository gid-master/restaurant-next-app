import { IProduct } from './IProduct';

export enum PaymentMethodEnum {
    CREDIT_CARD = 'creditcard',
    GIFT_CARD = 'giftcard'
}
export interface ICreditCard {
    cardNumber: number;
    nameHolder: string;
    cvv: number;
    expiration: string;
}
export interface ICheckout {
    products: IProduct[];
    paymentMethod: string;
    giftCard: string;
    creditCard: ICreditCard;
}

export interface ICheckoutResponse {
    success: boolean;
    message: string;
}
