import { Router } from "express";
import * as sculpturesHandler from "../handlers/sculptures";
import multer from "multer";

// Setup Multer for file uploads
const upload = multer({ dest: "uploads/" });

// Create the router
const router = Router();

// Route to get all sculptures
router.get("/sculptures", sculpturesHandler.getSculptures);

// Route to create a new sculpture (with file upload)
router.post("/sculptures", upload.single("image"), sculpturesHandler.createSculpture);

export default router;
