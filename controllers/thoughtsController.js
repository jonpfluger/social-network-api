const { Thoughts, Users } = require('../models')

module.exports = {
    find: async function (req, res) {
        try {
            const result = await Thoughts.find()
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    findOne: async function (req, res) {
        try {
            const result = await Thoughts.findById({_id: req.params.id})
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    create: async function (req, res) {
        try {
            const result = await Thoughts.create(req.body)
            await Users.findOneAndUpdate(
                { username: req.body.username },
                { $push: { thoughts: result._id } }
            )
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    update: async function (req, res) {
        try {
            const result = await Thoughts.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    delete: async function (req, res) {
        try {
            const result = await Thoughts.findByIdAndDelete(req.params.id)
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    addReaction: async function (req, res) {
        try {
            const result = await Thoughts.findByIdAndUpdate({
                _id: req.params.thoughtId
            },
            {
                $push: {reactions: req.body}
            },
            { new: true })
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    removeReaction: async function (req, res) {
        try {
            const result = await Thoughts.findByIdAndUpdate({
                _id: req.params.thoughtId
            },
            {
                $pull: {reactions: {
                    reactionId: req.params.reactionId
                }}
            },
            { new: true })
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
}