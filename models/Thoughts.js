const mongoose = require('mongoose')

const ThoughtSchema = new mongoose.Schema({
    thought: {
        type: String,
        required: "What is your thought?"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
})

const Thoughts = mongoose.model('Thoughts', ThoughtSchema)

module.exports = Thoughts