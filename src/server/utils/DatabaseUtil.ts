import mongoose from 'mongoose';

class DatabaseUtil {
    public connect = async (): Promise<boolean> => {
        if (mongoose.connections[0].readyState) {
            return;
        }

        const connectionString: string = process.env.NEXT_PUBLIC_DATABASE;
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        return true;
    };
}

export default new DatabaseUtil();
