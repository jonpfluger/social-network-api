const router = require('express').Router()
const usersController = require('../controllers/usersController.js')

router.get('/', usersController.find)

router.post('/', usersController.create)

router.put('/update/:id', usersController.update)

router.delete('/delete/:id', usersController.delete)

module.exports = router