const express = require('express')
const db = require('../controller/dbController')

const app = express.Router()


//* Defining delete routes
app.delete('/notes', (req, res) => {
    const id = req.query.id
    if (id) {
        if (db.remove(id)) {
            res.status(202).send('OK')
        }
        else {
            res.status(404).send(`Not Found: ID ${id} hasn't been declared in the db`)
        }
    }
    else {
        db.removeAll()
        res.status(202).send('OK')
    }
})

module.exports = app