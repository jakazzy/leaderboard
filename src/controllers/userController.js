import parse from 'csv-parse'
import fs from 'fs'
import User from '../models/user'

export default {
    getAllUsers: async (req, res) => {
        res.send('get all users')
    },

    createUser: async (req, res) => {
        res.send('created user')
    },

    uploadcsv: async (req, res) => {
        // process csv
        try {
            const csvData = []

            fs.createReadStream(req.file.path).pipe(
                parse({ delimiter: ',', columns: true })
                    .on('data', (data) => {
                        csvData.push(data)
                    })
                    .on('end', async () => {
                        await User.insertMany(csvData)
                        console.log('csv data inserted')
                    })
            )
            res.status(200).send('parsing of csv file successful')
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}
