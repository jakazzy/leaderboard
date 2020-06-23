import 'dotenv/config'

const config = {
    dev: {
        mongooseUri: process.env.MONGO_URI,
        mongoPwd: process.env.MONGO_PWD
    }
}

export default config
