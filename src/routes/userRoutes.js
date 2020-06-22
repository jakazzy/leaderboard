import multer from 'multer'
import v1 from '../controllers'

const upload = multer({ dest: 'data/' })
export default (express) => {
    const router = express.Router()

    router
        .route('/')
        .get(v1.userController.getAllUsers)
        .post(v1.userController.createUser)

    router.post(
        'upload-csv',
        upload.single('file'),
        v1.userController.uploadcsv
    )

    //  upload csv file
    return router
}
