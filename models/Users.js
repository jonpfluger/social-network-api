const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "User needs a name."
    },
    age: {
        type: Number,
        required: "User needs an age.",
        default: 0,
    },
    location: String,
    thoughts: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Thoughts'
        }
    ]
})

const Users = mongoose.model('Users', UserSchema)

module.exports = Users