import { NextApiRequest, NextApiResponse } from 'next';
import BaseController from './BaseController';
import { IProduct, ProductModel, ProductSchema } from './../schemas';

class ProductController extends BaseController {
    public getAllProducts = async (req: NextApiRequest, res: NextApiResponse): Promise<NextApiResponse> => {
        try {
            const result: ProductModel[] = await ProductSchema.find();
            const response: IProduct[] = result.map((data) => data.toClient());

            return this.handleSuccess(res, response);
        } catch (error) {
            return this.handleError(res, error);
        }
    };

    public getProductBySku = async (req: NextApiRequest, res: NextApiResponse): Promise<NextApiResponse> => {
        try {
            const sku: string = req.query.sku as string;
            const result: ProductModel = await ProductSchema.findOne({ sku: sku });
            const response: IProduct = result.toClient();

            return this.handleSuccess(res, response);
        } catch (error) {
            return this.handleError(res, error);
        }
    };
}

export default new ProductController();
