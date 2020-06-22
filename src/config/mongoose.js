import config from './config'

const con = config.dev

export default (mongoose) => {
    mongoose
        .connect(con.mongooseUri)
        .then(() => console.log('Connection with mongoDB successful'))
        .catch((err) => {
            console.log('unable to connect to mongodb atlas')
            console.error(err)
        })
}
