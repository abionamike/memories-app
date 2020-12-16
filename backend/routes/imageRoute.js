import express from 'express';
import path from 'path';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination: './upload/images',
    filename(req, file, cb) {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});

const checkFileType = (file, cb) => {
    const filetypes = /jpg|jpeg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
  
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(null, false);
}

const upload = multer({
    storage,
    fileFilter(req, file, cb) {
      checkFileType(file, cb);
    },
});

router.post('/', upload.single('image'), (req, res) => {
    res.json({ filename: `uploads/${req.file.filename}` });
});

export default router;