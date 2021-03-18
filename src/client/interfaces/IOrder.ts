export interface IOrder {
    id: string;
    paymentMethod: string;
    giftCard?: string;
    creditCard?: string;
    products: IOrderProduct[];
    total: number;
    userId: string;
    date: Date | string;
}

export interface IOrderProduct {
    itemId: string;
    productId: string;
    price: number;
    additionals: IOrderProductAdditional[];
    total: number;
    quantity: number;
    comments?: string;
    review: number;
    name?: string;
    image?: string;
}

export interface IOrderProductAdditional {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
}

export interface IOrderSummary {
    quantityOrders: number;
    totalProducts: number;
    quantityProducts: number;
}

export interface IOrderReview {
    orderId: string;
    productId: string;
    itemId: string;
    review: number;
}
