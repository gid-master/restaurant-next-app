import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import BaseController from './BaseController';
import { OrderModel, OrderSchema, IOrder, IOrderProduct, IOrderReview, ProductSchema } from './../schemas';
import { AuthMiddleware } from './../middlewares';

class OrderController extends BaseController {
    public getAllOrders = async (req: NextApiRequest, res: NextApiResponse): Promise<NextApiResponse> => {
        try {
            const userId: string = await AuthMiddleware.authenticate(req);

            const result: IOrder[] = await OrderSchema.aggregate([
                // WHERE
                { $match: { userId: mongoose.Types.ObjectId(userId) } },
                { $sort: { date: -1 } },

                // PRODUCTS
                {
                    $lookup: {
                        from: 'products',
                        localField: 'products.productId',
                        foreignField: '_id',
                        as: 'productsCollection'
                    }
                },

                // FIELDS TO BE RETURNED
                {
                    $project: {
                        _id: 0,
                        id: '$_id',
                        paymentMethod: '$paymentMethod',
                        giftCard: '$giftCard',
                        creditCard: '$creditCard',
                        total: '$total',
                        userId: '$userId',
                        date: '$date',

                        products: {
                            $map: {
                                input: '$products',
                                as: 'product',
                                in: {
                                    itemId: '$$product.itemId',
                                    productId: '$$product.productId',
                                    price: '$$product.price',
                                    additionals: '$$product.additionals',
                                    total: '$$product.total',
                                    quantity: '$$product.quantity',
                                    comments: '$$product.comments',
                                    review: '$$product.review',

                                    name: {
                                        $arrayElemAt: [
                                            {
                                                $map: {
                                                    input: {
                                                        $filter: {
                                                            input: '$productsCollection',
                                                            as: 'productsCollection',
                                                            cond: {
                                                                $eq: ['$$productsCollection._id', '$$product.productId']
                                                            }
                                                        }
                                                    },
                                                    as: 'data',
                                                    in: '$$data.name'
                                                }
                                            },
                                            0
                                        ]
                                    },

                                    image: {
                                        $arrayElemAt: [
                                            {
                                                $map: {
                                                    input: {
                                                        $filter: {
                                                            input: '$productsCollection',
                                                            as: 'productsCollection',
                                                            cond: {
                                                                $eq: ['$$productsCollection._id', '$$product.productId']
                                                            }
                                                        }
                                                    },
                                                    as: 'data',
                                                    in: '$$data.image'
                                                }
                                            },
                                            0
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            ]).exec();

            return this.handleSuccess(res, result);
        } catch (error) {
            console.log(error);
            return this.handleError(res, error);
        }
    };

    public createOrder = async (req: NextApiRequest, res: NextApiResponse): Promise<NextApiResponse> => {
        try {
            const userId: string = await AuthMiddleware.authenticate(req);
            const products: IOrderProduct[] = req.body.products.map((product: IOrderProduct) => {
                const totalAdditionals: number = product.additionals.reduce((total: number, { price, quantity }) => total + quantity * price, 0);

                return {
                    productId: product.id,
                    price: product.price,
                    additionals: product.additionals,
                    total: (totalAdditionals + product.price) * product.quantity,
                    quantity: product.quantity,
                    comments: product.comments,
                    review: 0
                };
            });

            const total: number = products.reduce((productTotal: number, { total }) => productTotal + total, 0);

            const order: IOrder = {
                paymentMethod: req.body.paymentMethod,
                giftCard: req.body.giftCard,
                creditCard: req.body.creditCard,
                products: products,
                total: Number(total.toFixed(2)),
                userId: userId,
                date: new Date()
            };

            const result: OrderModel = await OrderSchema.create(order);
            const response: IOrder = result ? result.toClient() : null;

            return this.handleSuccess(res, response);
        } catch (error) {
            return this.handleError(res, error);
        }
    };

    public reviewOrder = async (req: NextApiRequest, res: NextApiResponse): Promise<NextApiResponse> => {
        try {
            const userId: string = await AuthMiddleware.authenticate(req);
            const orderReview: IOrderReview = req.body;

            const result: OrderModel = await OrderSchema.findOne({
                _id: orderReview.orderId,
                userId: userId
            });
            result.products.forEach((product) => {
                product.review = product.itemId.toString() === orderReview.itemId ? orderReview.review : product.review;
            });

            await result.save();

            await ProductSchema.findByIdAndUpdate(orderReview.productId, {
                $inc: {
                    'reviews.totalRating': orderReview.review,
                    'reviews.totalReviews': 1,
                    'reviews.rating1': orderReview.review === 1 ? 1 : 0,
                    'reviews.rating2': orderReview.review === 2 ? 1 : 0,
                    'reviews.rating3': orderReview.review === 3 ? 1 : 0,
                    'reviews.rating4': orderReview.review === 4 ? 1 : 0,
                    'reviews.rating5': orderReview.review === 5 ? 1 : 0
                }
            });

            return this.handleSuccess(res, orderReview);
        } catch (error) {
            return this.handleError(res, error);
        }
    };
}

export default new OrderController();
