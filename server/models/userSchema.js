import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }, role: {
        type: String,
        default: 'general',
    }, cart:
        [{ type: mongoose.Schema.ObjectId }]

}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
