import Twt from './twitter-setup'

const sendTwt = () => {
    Twt.post('statuses/update', { status: 'how are you!' }, function (
        err,
        data,
        response
    ) {
        console.log(err)
        console.log(data)
    })
}

export default sendTwt
