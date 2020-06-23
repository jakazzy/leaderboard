import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const userSchema = mongoose.Schema({
    fullname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String },
    score: { type: Number }
})

userSchema.plugin(mongoosePaginate)

export default mongoose.model('User', userSchema)
