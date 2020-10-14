const express = require('express')
const db = require('../controller/dbController')

const app = express.Router()

// TODO 3. uncomment the route handler 
// TODO 3. cut all of db codes for adding data to dbController and make a add function with it
// TODO 7. use db add function

// //* Defining post routes
app.post('/notes', (req, res) => {
    const body = req.body
    if (db.add(body)) {
        res.status(200).send(body)
    }
    else {
        res.status(409).send(`Conflict: ID ${body.id} has been declared in the db`)
    }
})

module.exports = app