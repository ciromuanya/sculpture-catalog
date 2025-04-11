import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sculpturesRoutes from "./routes/sculptures"; // Sculpture routes import

// Load environment variables
dotenv.config();

// Create the express app
const app = express();
const port = process.env.PORT || 5000;

// Use middleware // // need to look into this
app.use(express.json());

// Sculpture routes // // need to look into this
app.use("/api", sculpturesRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});