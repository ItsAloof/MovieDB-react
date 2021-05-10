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
    runtime: {
        type: Number
    },
    homepage: {
        type: String
    },
    original_language: {
        type: String
    },
    original_title: {
        type: String
    },
    status: {
        type: String
    },
    tagline: {
        type: String
    },
    video: {
        type: Boolean
    },
    vote_average: {
        type: Number
    },
    vote_count: {
        type: Number
    },
    genres: {
        type: Array
    },
    streamingInfo: {
        type: Mixed,
        default: null
    },
})

export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema);