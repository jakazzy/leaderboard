import path from 'path'

export const filter = (req, file, cb) => {
    const filetypes = /json|csv/
    const mimetype = filetypes.test(file.mimetype)
    const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
    )

    if (mimetype && extname) {
        return cb(null, true)
    }
    cb(
        `Error: File upload only supports the following filetypes - ${filetypes}`
    )
}

export const validateDate = () => {}
