const { Users, Thoughts } = require('../models')

module.exports = {
    find: async function (req, res) {
        try {
            const result = await Users.find()
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    findOne: async function (req, res) {
        try {
            const result = await Users.findById({_id: req.params.id})
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    create: async function (req, res) {
        try {
            const result = await Users.create(req.body)
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    update: async function (req, res) {
        try {
            const result = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    delete: async function (req, res) {
        try {
            const thoughtsResult = await Thoughts.deleteMany({
                _id: { $in: thoughts }
            })
            const usersResult = await Users.findByIdAndDelete(req.params.id)
            res.json(usersResult)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    addFriend: async function (req, res) {
        try {
            const result = await Users.findByIdAndUpdate({
                _id: req.params.userId
            },
            {
                $push: {friends: req.params.friendId}
            },
            { new: true })
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    removeFriend: async function (req, res) {
        try {
            const result = await Users.findByIdAndUpdate({
                _id: req.params.userId
            },
            {
                $pull: {friends: req.params.friendId}
            },
            { new: true })
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
}