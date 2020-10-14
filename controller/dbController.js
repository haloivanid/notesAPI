const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./controller/db.json')
const db = low(adapter)

db.defaults({ notes: [] })
    .write()

// TODO 1. comment out all the route handler inside their file EXECPT the GET handler
// TODO 5. export all of created function by exporting an object
function get(id) {
    let result
    if (id) {
        result = db.get('notes')
            .find({ id: parseInt(id) })
            .value()
    } else {
        result = db
            .get('notes')
            .value()
    }
    return result
}

function add(body) {
    const id = body.id

    const isIDNotFound = (() => {
        return db.get('notes')
            .find({ id: parseInt(id) })
            .value() == undefined
    })

    if (isIDNotFound()) {
        db.get('notes')
            .push(body)
            .write()
        return true
    }
    else {
        return false
    }
}

function edit(dataInput) {
    const isIDFound = (() => {
        return db.get('notes')
            .find({ id: dataInput.id })
            .value() != undefined
    })

    if (isIDFound()) {
        db.get('notes')
            .find({ id: dataInput.id })
            .assign(dataInput)
            .write()
        return true
    }
    else {
        return false
    }
}

function remove(id) {
    const isIDFound = (() => {
        return db.get('notes')
            .find({ id: parseInt(id) })
            .value() != undefined
    })

    if (isIDFound()) {
        db.get('notes')
            .remove({ id: parseInt(id) })
            .write()
        return true
    }
    else {
        return false
    }
}

const functions = {
    get,
    add,
    edit,
    remove
}

module.exports = functions