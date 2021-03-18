import { NextApiRequest, NextApiResponse } from 'next';
import BaseController from './BaseController';
import { IUser, UserModel, UserSchema } from './../schemas';
import { AuthMiddleware } from './../middlewares';
import { CryptoUtil } from '../utils';

class UserController extends BaseController {
    public getUser = async (req: NextApiRequest, res: NextApiResponse): Promise<NextApiResponse> => {
        try {
            const userId: string = await AuthMiddleware.authenticate(req);
            const result: UserModel = userId ? await UserSchema.findById(userId).select('-password -pushPermission') : null;
            const response: IUser = result ? result.toClient() : null;

            return this.handleSuccess(res, response);
        } catch (error) {
            return this.handleError(res, error);
        }
    };

    public login = async (req: NextApiRequest, res: NextApiResponse): Promise<NextApiResponse> => {
        try {
            const { email, password } = req.body;
            const result: UserModel = await UserSchema.findOne({ email: email });

            if (!result) {
                throw Error('Email not found');
            }

            const valid: boolean = await CryptoUtil.verifyEncryptPassword(result.password, password);
            if (!valid) {
                throw Error('Email or password invalid');
            }

            const response: IUser = {
                ...result.toClient(),
                token: CryptoUtil.createToken(result._id.toString()),
                password: null
            };

            return this.handleSuccess(res, response);
        } catch (error) {
            return this.handleError(res, error);
        }
    };

    public register = async (req: NextApiRequest, res: NextApiResponse): Promise<NextApiResponse> => {
        try {
            const { email, password, name } = req.body;

            const existEmail = await UserSchema.findOne({ email: email });
            if (existEmail) {
                throw Error('Email already registered');
            }

            const encryptPassword: string = await CryptoUtil.createEncryptPassword(password);
            const result = await UserSchema.create({ name, email, password: encryptPassword });

            const response: IUser = {
                ...result.toClient(),
                token: CryptoUtil.createToken(result._id.toString()),
                password: null
            };

            return this.handleSuccess(res, response);
        } catch (error) {
            return this.handleError(res, error);
        }
    };

    public pushPermission = async (req: NextApiRequest, res: NextApiResponse): Promise<NextApiResponse> => {
        try {
            const { pushPermission } = req.body;
            const userId: string = await AuthMiddleware.authenticate(req);

            await UserSchema.findByIdAndUpdate(userId, { pushPermission: pushPermission });

            return this.handleSuccess(res, true);
        } catch (error) {
            return this.handleError(res, error);
        }
    };
}

export default new UserController();
