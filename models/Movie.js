import mongoose from 'mongoose'

const { String, Number, Boolean, Mixed } = mongoose.SchemaTypes;


const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
    },
    id: {
        type: Number,
        required: true
    },
    imdb_id: {
        type: String
    },
    overview: {
        type: String
    },
    poster_path: {
        type: String
    },
    budget: {
        type: Number,
        default: 0
    },
    revenue: {
        type: Number,
        default: 0
    },
    popularity: {
        type: Number
    },
    adult: {
        type: Boolean
    },
    
    streamingInfo: {
        type: Mixed,
        default: null
    },
})

export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema);