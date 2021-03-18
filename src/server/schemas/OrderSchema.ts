import { models, model, Schema, SchemaDefinition, Model } from 'mongoose';
import { BaseSchema, BaseModel } from './BaseSchema';

export interface IOrderReview {
    orderId: string;
    productId: string;
    itemId: string;
    review: number;
}

export interface IOrderProductAdditional {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
}

export interface IOrderProduct {
    id?: string;
    itemId: string;
    productId: string;
    name: string;
    image: string;
    price: number;
    additionals: IOrderProductAdditional[];
    total: number;
    quantity: number;
    comments?: string;
    review?: number;
}

export interface IOrder {
    id?: string;
    paymentMethod: string;
    giftCard?: string;
    creditCard?: string;
    products: IOrderProduct[];
    total: number;
    userId: string;
    date: Date | string;
}

const OrderProductAdditionalDefinition: SchemaDefinition = {
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
};

const OrderProductSchema: SchemaDefinition = {
    itemId: { type: Schema.Types.ObjectId, required: true, auto: true },
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    additionals: [OrderProductAdditionalDefinition],
    total: { type: Number, required: true },
    comments: { type: String, required: false },
    review: { type: Number, required: false }
};

const OrderSchema = new BaseSchema<IOrder>({
    paymentMethod: { type: String, required: true },
    giftCard: { type: String, required: false },
    creditCard: { type: String, required: false }, // just the token
    products: [OrderProductSchema],
    total: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true }
});

export type OrderModel = BaseModel<IOrder> & IOrder;

export default (models.Order as Model<OrderModel>) || model<OrderModel>('Order', OrderSchema);
