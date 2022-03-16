import * as mongoose from 'mongoose'

export const UniversitySchema = new mongoose.Schema({
    thumbnail: String,
    title: String,
    description: String,
    gallery: [String],
    email: String,
    phone: String,
    category: String
})