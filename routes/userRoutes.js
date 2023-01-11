const router = require('express').Router()
const usersController = require('../controllers/usersController')

router.get('/', usersController.find)

router.get('/:id', usersController.findOne)

router.post('/', usersController.create)

router.put('/update/:id', usersController.update)

router.delete('/delete/:id', usersController.delete)

// add friend
router.post('/:userId/friends/:friendId', usersController.addFriend)

// remove friend
router.delete('/:userId/friends/:friendId', usersController.removeFriend)

module.exports = router