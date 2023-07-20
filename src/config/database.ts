import mongoose from "mongoose";

mongoose.connect('mongodb+srv://express-database-training:kHF53OSBGBgfHCWb@cluster0.cyesreo.mongodb.net/?');
const database = mongoose.connection;

export default database;