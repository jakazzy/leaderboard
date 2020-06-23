import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    fullname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String },
    score: { type: Number }
})

export default mongoose.model('User', userSchema)
