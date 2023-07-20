import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true
    },
    country: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const users = mongoose.model('users', userSchema);

export default users;