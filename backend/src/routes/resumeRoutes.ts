import express from "express";
import multer from "multer";
import { Request, Response } from "express";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb
  ) => {
    cb(null, "uploads/");
  },

  filename: (
    req: Request,
    file: Express.Multer.File,
    cb
  ) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/upload",
  upload.single("resume"),

  (req: Request, res: Response) => {
    res.json({
      message: "Resume Uploaded Successfully",
      file: req.file,
    });
  }
);

export default router;