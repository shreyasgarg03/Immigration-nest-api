import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    phone: Number,
    role: String,
    verified: Boolean
})