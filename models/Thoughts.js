const { Schema, model } = require('mongoose')

const ThoughtSchema = new Schema({
    thought: {
        type: String,
        required: "What is your thought?"
    }
})

const Thoughts = model('Thoughts', ThoughtSchema)

module.exports = Thoughts