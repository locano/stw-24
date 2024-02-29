const express = require('express')
const app = express()
const port = 3010

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/messages', (req, res) => {
    res.send('Mensajes')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

