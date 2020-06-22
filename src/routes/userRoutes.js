import v1 from '../controllers'

export default (express) => {
    const router = express.Router()

    router
        .route('/')
        .get(v1.userController.getAllUsers)
        .post(v1.userController.createUser)

    //  upload csv file
    return router
}
