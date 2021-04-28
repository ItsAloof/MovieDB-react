import { Mongoose, Schema, Types } from 'mongoose'

const { String, Array } = Types;
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    psw: {
        type: String,
        required: true
    },
    favMovies: {
        type: Array,
        required: false
    }
});

export default Mongoose.models.User || Mongoose.model('User', UserSchema);
