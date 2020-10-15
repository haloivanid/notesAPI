const express = require('express')
const db = require('../controller/dbController')

const app = express.Router()


//* Defining get routes
app.get('/notes', (req, res) => {
    const id = req.query.id
    const result = db.get(id)
    if (result) {
        res.status(200).send(result)
    }
    else {
        res.status(404).send(`Not Found: ID ${id} hasn't been declared in the db`)
    }
})

module.exports = app