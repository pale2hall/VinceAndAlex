const express = require('express')
const app = express()
const port = 3000

app.use(express.static('assets'))

app.get('/', (req, res) => {
  res.sendfile('./assets/views/index.html')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
