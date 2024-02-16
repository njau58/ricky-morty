import mongoose, { Connection } from 'mongoose';


const dbURI = process.env.NEXT_PUBLIC_dbURI;

const connectDB = async (): Promise<Connection> => {
  if (!dbURI) {
    throw new Error('Please define NEXT_PUBLIC_dbURI environment variable');
  }

  try {
    const connection:any = await mongoose.connect(dbURI);

 
    return connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Connection to MongoDB failed'); 
  }
};

export default connectDB;

