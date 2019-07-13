const express = require('express')
const Route = express.Router()

const categoryController = require('../controllers/cart_controllers')

Route
  .get('/', categoryController.getCategory)
  .post(`/`, categoryController.insertCategory)
  .delete(`/:id_category`, categoryController.deleteCategory)
 


module.exports = Route
