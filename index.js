console.log('its sample data')
const express = require('express')
const app = express()
const port = 3000
// creae hello world server with express
app.get('/', (req, res) => res.send('Hello World!'))
// listen to port 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// Path: sample_sub_repo/package.json
// what if changes happen from here ????
