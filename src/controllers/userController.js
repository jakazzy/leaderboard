/* eslint-disable no-console */
import parse from 'csv-parse'
import fs from 'fs'
import User from '../models/user'

export default {
    index: async (req, res) => {
        try {
            const page = parseInt(req.query.page, 10) || 1
            const limit = parseInt(req.query.limit, 10) || 10

            const myCustomLabels = {
                totalDocs: 'itemCount',
                docs: 'itemsList',
                limit: 'perPage',
                page: 'currentPage',
                nextPage: 'next',
                prevPage: 'prev',
                totalPages: 'pageCount',
                pagingCounter: 'slNo',
                meta: 'paginator'
            }

            const options = {
                page,
                limit,
                sort: { score: -1 },
                collation: {
                    locale: 'en'
                },
                customLabels: myCustomLabels
            }

            User.paginate({}, options)
                .then(function (result) {
                    // result.itemsList [here docs become itemsList]
                    // result.paginator.itemCount =
                    // 100 [here totalDocs becomes itemCount]
                    // result.paginator.perPage = 10 [here limit becomes perPage]
                    // result.paginator.currentPage =
                    //  1 [here page becomes currentPage]
                    // result.paginator.pageCount =
                    // 10 [here totalPages becomes pageCount]
                    // result.paginator.next = 2 [here nextPage becomes next]
                    // result.paginator.prev = null [here prevPage becomes prev]
                    // result.paginator.slNo = 1 [here pagingCounter becomes slNo]
                    // result.paginator.hasNextPage = true
                    // result.paginator.hasPrevPage = false
                    console.log(result, 'this is result')
                    res.status(200).send('get all users')
                })
                .catch((error) => {
                    console.error(error)
                    res.status(400).send(error.message)
                })
        } catch (error) {
            res.status(400).send(error.message)
        }
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
