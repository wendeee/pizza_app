const express = require('express');
const orderController = require('../controllers/order')
const usersController = require('../controllers/user')

const router = express.Router()

router.get('/', orderController.getAllOrders)

router.get('/:id', orderController.getOrderById)
router.post('/', orderController.addOrder)
router.patch('/:id', orderController.updateOrder)
router.delete('/:id', orderController.deleteOrder)

module.exports = router;