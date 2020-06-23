import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import 'regenerator-runtime/runtime'
import routes from './routes'
import db from './config/mongoose'

const app = express()
const PORT = process.env.PORT || 8080

// database connection
db(mongoose)

app.use(cors())
app.use('/api/v1', routes.userRoutes(express))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('welcome to the parser')
})

// middleware
if (process.env.NODE_ENV === 'development') {
    app.use = morgan('dev')
}
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
    console.log(`CTRL + C to end the server`)
})
