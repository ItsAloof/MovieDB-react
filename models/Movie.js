import mongoose from 'mongoose'


const MovieSchema = new mongoose.Schema({
    title: String,
    release_date: String,
    id: String,
    
})