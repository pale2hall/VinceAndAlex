const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('assets'))

app.get('/', (req, res) => {
  res.sendfile('./assets/views/index.html')
})

app.get('/baby-shower', (req, res) => {
  res.sendfile('./assets/views/baby-shower.html')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
