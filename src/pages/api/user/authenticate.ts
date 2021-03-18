import { NextApiRequest, NextApiResponse } from 'next';
import { UserController } from '@/server/controllers';
import { DatabaseUtil } from '@/server/utils';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    await DatabaseUtil.connect();
    return UserController.getUser(req, res);

    //   if (req.method === 'POST') {
    //     // Process a POST request
    //   } else {
    //     // Handle any other HTTP method
    //   }
};
