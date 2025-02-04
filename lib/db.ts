import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

async function dbConnect() {
  const opts = {
    bufferCommands: false,
  };

  // Establish a new connection every time
  const conn = await mongoose.connect(MONGODB_URI as string, opts);
  return conn;
}

export default dbConnect;
