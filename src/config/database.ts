import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://express-database-training:${process.env.DB_PASS}@cluster0.cyesreo.mongodb.net/?`);
const database = mongoose.connection;

export default database;