const express = require(`express`)
const Route = express.Router()

const shelfController = require(`../controllers/shelf_controllers`)

Route
    .get(`/`, shelfController.getShelf)
    .post(`/`, shelfController.insertShelf)
    .patch(`/:id_shelf`, shelfController.updateShelf)
    .delete(`/:id_shelf`, shelfController.deleteShelf)

module.exports = Route