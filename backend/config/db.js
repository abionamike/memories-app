import mongoose from 'mongoose'
import dotenv from  'dotenv';

dotenv.config();

const configDB = async () => {
    try {
        const resp = await mongoose.connect(process.env.MONGODB_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log(`MongoDb connected ${resp.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default configDB;