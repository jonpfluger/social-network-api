const { Thoughts } = require('../models')

module.exports = {
    find: async function (req, res) {
        try {
            const result = await Thoughts.find()
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    create: async function (req, res) {
        try {
            const result = await Thoughts.create(req.body)
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
}