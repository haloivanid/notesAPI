const express = require('express')
const db = require('../controller/dbController')

const app = express.Router()

// TODO 4. uncomment the route handler 
// TODO 4. cut all of db codes for deleting data and id parser to dbController and make a remove function with it
// TODO 9. use db remove function

//* Defining delete routes
app.delete('/notes', (req, res) => {
    const id = req.query.id

    if (db.remove(id)) {
        res.status(202).send('OK')
    }
    else {
        res.status(404).send(`Not Found: ID ${id} hasn't been declared in the db`)
    }
})

module.exports = app