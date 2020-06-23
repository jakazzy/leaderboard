import Twit from 'twit'
import config from './config'

const con = config.dev

const Twt = new Twit({
    consumer_key: con.consumerKey,
    consumer_secret: con.consumerSecret,
    access_token: con.accessToken,
    access_token_secret: con.accessTokenSecret
})

export default Twt
