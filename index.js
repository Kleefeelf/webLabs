import express from 'express'
import bodyParser from 'body-parser'

import filmsRoutes from './routes/films.js'

const app = express()
const PORT = 5500

app.use(bodyParser.json())

app.use('/films', filmsRoutes)

app.get('/films', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => console.log(`Server started on port: http://localhost:${PORT}`))
