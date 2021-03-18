import { IProduct, ProductModel, ProductSchema } from '../schemas';
import { DatabaseUtil } from '../utils';
import { PRODUCT_MOCK } from '@/mocks/ProductMock';
import product from '@/pages/api/product';

// THIS LOGIC IS USED TO RENDER SERVER SIDE
// TO USE API'S NORMALLY THE CLIENT WILL TRIGGER THE API'S
// THAT EVENTUALLY CALLS THE LOGIC INSIDE THE CONTROLLERS
// SHOULD RESPOND AS SERIALIZED JSON
class ProductService {
    private isMockEnabled: boolean = Boolean(process.env.NEXT_PUBLIC_BACKEND_TARGET === 'mock');

    public getAllProducts = async (): Promise<string> => {
        if (this.isMockEnabled) {
            const response: IProduct[] = PRODUCT_MOCK.data;
            return JSON.stringify(response);
        }

        await DatabaseUtil.connect();

        const result: ProductModel[] = await ProductSchema.find();
        const response: IProduct[] = result.map((data) => data.toClient());
        return JSON.stringify(response);
    };

    public getProductBySku = async (sku: string): Promise<string> => {
        if (this.isMockEnabled) {
            const response: IProduct = PRODUCT_MOCK.data.find((data) => data.sku === sku);
            return JSON.stringify(response);
        }

        await DatabaseUtil.connect();

        const result: ProductModel = await ProductSchema.findOne({ sku: sku });
        const response: IProduct = result.toClient();
        return JSON.stringify(response);
    };

    public getProductFromCategory = async (sku: string, category: string): Promise<string> => {
        if (this.isMockEnabled) {
            const response: IProduct[] = PRODUCT_MOCK.data.filter((data) => data.category === category && data.sku !== sku);
            return JSON.stringify(response);
        }

        await DatabaseUtil.connect();

        const result: ProductModel[] = await ProductSchema.find({ category: category, sku: { $ne: sku } });
        const response: IProduct[] = result.map((data) => data.toClient());
        return JSON.stringify(response);
    };
}

export default new ProductService();
