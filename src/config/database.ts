import mongoose from 'mongoose';

async function connectToDatabase() {
    
  await mongoose.disconnect();

  const uri: string = process.env.MONGO_URI || `mongodb+srv://express-database-training:${process.env.DB_PASS}@cluster0.cyesreo.mongodb.net/?`;

  console.log(uri);

  await mongoose.connect(uri);

  const database = mongoose.connection;
  database.on('open', () => {
    console.log('conectou!');
  });
  return database;
}

export default connectToDatabase;
