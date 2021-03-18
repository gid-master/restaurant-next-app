import { NextApiResponse } from 'next';

export default class BaseController {
    // make all response consistent and always return based on the response interface
    // using succs, message and data, only success is compulsory
    protected async handleSuccess<T>(res: NextApiResponse, data: T): Promise<any> {
        //Promise<NextApiResponse> {
        return res.status(200).json({
            success: true,
            data: data
        });
    }

    // Right here you can save logs if you want
    protected async handleError(res: NextApiResponse, error: Error): Promise<any> {
        //Promise<NextApiResponse> {
        return res.status(200).json({
            success: false,
            message: error.message || error
        });
    }
}
