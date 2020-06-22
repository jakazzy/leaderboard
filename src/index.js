import express from 'express'
import morgan from 'morgan'
import parse from 'csv-parse'
import fs from 'fs'

const app = express()
const PORT = process.env.PORT || 3000
const csvData = []

// middleware
if (process.env.NODE_ENV === 'development') {
    app.use = morgan('dev')
}
fs.createReadStream('/data/test.csv')
    .pipe(parse({ delimiter: ',' }))
    .on('data', (data) => {
        csvData.push(data)
    })
    .on('end', () => console.log(csvData))

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
    console.log(`CTRL + C to end the server`)
})
