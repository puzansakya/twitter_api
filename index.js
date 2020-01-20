const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const app = express()
const cors = require('cors');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Endpoints
app.use('/api/users', require('./controllers/User').router)
app.use('/api/tweets', require('./controllers/Tweet').router)

app.listen(port, () => {
	console.log('Listening on port: ' + port)
})