const { Schema, model } = require('mongoose')
const ThoughtSchema = require('./Thoughts')

const UserSchema = new Schema({
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
    // thoughts: [ThoughtSchema],
})

const Users = model('Users', UserSchema)

module.exports = Users