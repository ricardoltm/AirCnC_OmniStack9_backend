const multer = require('multer');
const path = require('path');


module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const file_name = path.basename(file.originalname, ext);

            cb(null, `${file_name}-${Date.now()}${ext}`); //cb = callback
        },
    }),
};
