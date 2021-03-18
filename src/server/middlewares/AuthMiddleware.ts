import { NextApiRequest } from 'next';
import { CryptoUtil } from '../utils';

class AuthMiddleware {
    // Used to protect routes that need to be authorized
    // Doing it the server returns unauthorized status if token is not valid
    public authenticate = async (req: NextApiRequest) => {
        const authorization: string = req.headers.authorization;
        const token: string = authorization ? authorization.split(' ')[1] : null;
        const userId: string = token ? CryptoUtil.getToken(token) : null;

        return userId;
    };
}

export default new AuthMiddleware();
