import express from 'express'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV === 'development') {
    app.use = morgan('dev')
}

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
    console.log(`CTRL + C to end the server`)
})
