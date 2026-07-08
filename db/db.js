import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const mongo_uri = process.env.MONGODB_URI;
        await mongoose.connect(mongo_uri);
        console.log("Connected to DB successfully");
    } catch (error) {
        console.log("DB error : ", error);
        process.exit(1);

    }
}

export { connectDB }