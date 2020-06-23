import 'dotenv/config'

const config = {
    dev: {
        mongooseUri: process.env.MONGO_URI,
        mongoPwd: process.env.MONGO_PWD,
        consumerKey: process.env.CONSUMER_KEY,
        consumerSecret: process.env.CONSUMER_SECRET,
        accessToken: process.env.ACCESS_TOKEN,
        accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
    }
}

export default config
