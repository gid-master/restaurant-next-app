import { NextApiRequest, NextApiResponse } from 'next';
import { OrderController } from '@/server/controllers';
import { DatabaseUtil } from '@/server/utils';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    await DatabaseUtil.connect();
    return OrderController.reviewOrder(req, res);
};
