import multer from 'multer'
import { filter } from '../validate/validate'
import v1 from '../controllers'

const upload = multer({ dest: 'data/', fileFilter: filter })
export default (express) => {
    const router = express.Router()

    router
        .route('/')
        .get(v1.userController.index)
        .post(v1.userController.createUser)

    router.post('/upload', upload.single('file'), v1.userController.uploadcsv)

    //  upload csv file
    return router
}
