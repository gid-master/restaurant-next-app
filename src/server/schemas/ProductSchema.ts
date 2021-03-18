import { models, model, Schema, SchemaDefinition, Model } from 'mongoose';
import { BaseSchema, BaseModel } from './BaseSchema';

export interface IProductReview {
    totalRating: number;
    totalReviews: number;
    rating1: number;
    rating2: number;
    rating3: number;
    rating4: number;
    rating5: number;
}

export interface IProductAdditional {
    id?: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    limit: number;
}

export interface IProduct {
    id?: string;
    sku: string;
    quantity: number;

    category: string;

    name: string;
    description: string;
    image: string;

    price: number;
    previousPrice: number;

    suggested: boolean;
    special: boolean;

    calories: number;
    servingPeople: number;
    portionSize: number;
    unitType: string;

    ingredients: string[];

    maxAdditionals: number;
    additionals: IProductAdditional[];

    reviews: IProductReview;
}

const ProductReviewSchema: SchemaDefinition = {
    totalRating: { type: Number, required: false },
    totalReviews: { type: Number, required: false },
    rating1: { type: Number, required: false },
    rating2: { type: Number, required: false },
    rating3: { type: Number, required: false },
    rating4: { type: Number, required: false },
    rating5: { type: Number, required: false }
};

const ProductAdditionalSchema: SchemaDefinition = {
    id: { type: Schema.Types.ObjectId, required: true, auto: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    limit: { type: Number, required: true }
};

const ProductSchema = new BaseSchema<IProduct>({
    sku: { type: String, required: true, unique: true },
    quantity: { type: Number, required: true },

    category: { type: String, required: true },

    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },

    price: { type: Number, required: true },
    previousPrice: { type: Number, required: true },

    suggested: { type: Boolean, required: true },
    special: { type: Boolean, required: true },

    calories: { type: Number, required: true },
    servingPeople: { type: Number, required: true },
    portionSize: { type: Number, required: true },
    unitType: { type: String, required: true },

    ingredients: [{ type: String, required: true }],

    maxAdditionals: { type: Number, required: true },

    additionals: [ProductAdditionalSchema],
    reviews: ProductReviewSchema
});

export type ProductModel = BaseModel<IProduct> & IProduct;

export default (models.Product as Model<ProductModel>) || model<ProductModel>('Product', ProductSchema);
