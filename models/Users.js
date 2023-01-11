const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: "User needs a name.",
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: "Email is required.",
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Email is not valid.']
    },
    thoughts: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Thoughts'
        }
    ],
    friends: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Users'
        }
    ],
}, {
    toJSON: {
        virtuals: true,
    }
})

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
}) 

const Users = mongoose.model('Users', UserSchema)

module.exports = Users