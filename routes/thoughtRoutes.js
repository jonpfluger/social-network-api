const router = require('express').Router()
const thoughtsController = require('../controllers/thoughtsController.js')

router.get('/', thoughtsController.find)

router.post('/', thoughtsController.create)

router.put('/update/:id', thoughtsController.update)

router.delete('/delete/:id', thoughtsController.delete)

module.exports = router