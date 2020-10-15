const express = require('express')
const bodyParser = require('body-parser')
const getNotes = require('./routes/getNotes')
const addNotes = require('./routes/addNotes')
const editNotes = require('./routes/editNotes')
const deleteNotes = require('./routes/deleteNotes')


const app = express()

app.use(bodyParser.json())
app.use(getNotes)
app.use(addNotes)
app.use(editNotes)
app.use(deleteNotes)

app.get('/', (_, res) => {
  res.status(400).send('hello world!')
})

app.get('/notes/*', (_, res) => {
  res.status(404).send('NYARI APA BOS???')
})

// START APP
const port = 9876
app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
})