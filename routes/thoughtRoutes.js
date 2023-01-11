const router = require('express').Router()
const thoughtsController = require('../controllers/thoughtsController')

router.get('/', thoughtsController.find)

router.get('/:id', thoughtsController.findOne)

router.post('/', thoughtsController.create)

router.put('/update/:id', thoughtsController.update)

router.delete('/delete/:id', thoughtsController.delete)

router.post('/:thoughtId/reactions', thoughtsController.addReaction)

router.delete('/:thoughtId/reactions/:reactionId', thoughtsController.removeReaction)

module.exports = router