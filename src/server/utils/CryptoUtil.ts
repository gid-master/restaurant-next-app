import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const privateToken: string = process.env.NEXT_PUBLIC_PASSWORD_TOKEN;

class CryptoUtil {
    public getToken = (token: string): string => {
        return jwt.verify(token, privateToken) as string;
    };

    public createToken = (userId: string): string => {
        return jwt.sign(userId, privateToken);
    };

    public createEncryptPassword = async (password: string): Promise<string> => {
        return bcrypt.hash(password, 12);
    };

    public verifyEncryptPassword = async (encrypt: string, password: string): Promise<boolean> => {
        return bcrypt.compare(password, encrypt);
    };
}

export default new CryptoUtil();
