
const express = require('express')
const app = express()
const port = 3000
let beispiel = 5
beispiel = beispiel + 1;
app.get('/', (req, res) => {
  res.send('Hello World!' + beispiel)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
