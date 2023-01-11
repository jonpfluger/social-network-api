const mongoose = require('mongoose')
const reactionSchema = require('./Reactions')
const formatDate = require('../date')

const ThoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: "What is your thought?",
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => formatDate(timestamp)
    },
    username: {
        type: String,
        required: "Thought needs a User."
    },
    reactions: [reactionSchema]
}, {
    toJSON: {
        getters: true,
        virtuals: true
    }
})

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const Thoughts = mongoose.model('Thoughts', ThoughtSchema)

module.exports = Thoughts