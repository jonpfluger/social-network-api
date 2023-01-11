const mongoose = require('mongoose')
const formatDate = require('../date')

const ReactionSchema = new mongoose.Schema({
    reactionId: {
       type: mongoose.Schema.Types.ObjectId,
       default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: "Message is required.",
        maxlength: 280
    },
    username: {
        type: String,
        required: "Reaction needs a User.",
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => formatDate(timestamp)
    }
}, {
    toJSON: {
        getters: true
    }
})

module.exports = ReactionSchema