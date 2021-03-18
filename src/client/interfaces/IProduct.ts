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
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    limit: number;
}

export interface IProduct {
    id: string;
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

    // EXTRA
    comments?: string;
}

export interface IProductAdditionalIncrement {
    id: string;
    increment: number;
}
