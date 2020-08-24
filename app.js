
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

app.get('/fib/:10',function(req,res){
    console.log('productId is defined as a path variable');
   res.send("Path param example");
});