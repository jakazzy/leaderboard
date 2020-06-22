// const mongoose = require("mongoose");

export default (mongoose) => {
    const userSchema = mongoose.Schema({
        fullname: { type: String, required: true },
        username: { type: String, required: true },
        email: { type: String },
        score: { type: Number }
    })

    return mongoose.model('User', userSchema)
}
