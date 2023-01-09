require('../config/connection')
const express = require('express')
const { Users } = require('../models')

const app = express()

app.use(express.json())

app.get('/read', async (req, res) => {
    try {
        const result = await Users.find()
        res.json(result)
    } catch(err) {
        res.status(500).json(err)
    }
})

app.post('/create', async (req, res) => {
    try {
      const result = await Users.create(req.body)
      res.json(result)
    } catch(err) {
      res.status(500).json(err)
    }
})

app.put('/update/:id', async (req, res) => {
    try {
        const result = await Users.findByIdAndUpdate(req.params.id, req.body)
        res.json(result)
    } catch(err) {
        res.status(500).json(err)
    }
})

app.delete('/delete/:id', async (req, res) => {
    try {
        const result = await Users.findByIdAndDelete(req.params.id)
        res.json(result)
    } catch(err) {
        res.status(500).json(err)
    }
})