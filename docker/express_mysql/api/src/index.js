import express from 'express'
import cors from 'cors'
import { getAllMessages, createMessage, createDatabase } from './db.js'

const app = express()
const port = 3000
// This line is necessary to parse the request body
app.use(express.json())

console.log('enable Cors');
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})

app.post('/messages', async (req, res) => {
  const [username, message] = [req.body.username, req.body.message]
  console.log(username, message);
  const messages = await createMessage(username, message)
  res.json(messages)
})

app.get('/messages', async (req, res) => {
  const messages = await getAllMessages()
  res.json(messages)
})

app.post('/start', async (req, res) => {
  const messages = await createDatabase()
  res.json(messages)
})