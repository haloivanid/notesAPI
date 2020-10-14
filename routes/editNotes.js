const express = require('express')
const db = require('../controller/dbController')

const app = express.Router()



//* Defining edit/patch routes
app.patch('/notes', (req, res) => {
    const body = req.body
    const query = req.query

    let id;
    if (query.id) {
        if (body.id) {
            if (query.id == String(body.id)) {
                id = query.id
            }
            else {
                res.status(409).send('Conflict: ID in query or in body must same or just declare the one of that')
                return undefined
            }
        }
        else {
            id = query.id
        }
    }
    else {
        id = body.id
    }

    let dataInput;
    if (body.note) {
        dataInput = {
            "id": parseInt(id),
            "note": body.note
        }
    }
    else {
        res.status(406).send('Not Acceptable: The value of note not inserted')
        return undefined
    }

    if (db.edit(dataInput)) {
        res.status(200).send(body)
    }
    else {
        res.status(404).send(`Not Found: ID ${id} hasn't been declared in the db`)
    }
})

module.exports = app