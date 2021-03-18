import { NextApiRequest, NextApiResponse } from 'next';
import { ProductController } from '@/server/controllers';
import { DatabaseUtil } from '@/server/utils';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    await DatabaseUtil.connect();
    return ProductController.getAllProducts(req, res);
};
