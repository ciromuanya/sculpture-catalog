import { Request, Response } from "express";
import * as sculptureRepository from "../repositories/sculptureRepository";
import { Sculpture } from "../models/sculpture";

// Fetch all sculptures
export const getSculptures = async (req: Request, res: Response) => {
    // Try to fetch all sculptures
  try {
    const sculptures = await sculptureRepository.getAllSculptures();
    res.json(sculptures);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching sculptures" });
  }
};

// Create a new sculpture
export const createSculpture = async (req: Request, res: Response) => {
  try {
    // Destructure the request body
    const { name, artist, year, description } = req.body;
    // Check if an image was uploaded
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
    // Create the sculpture
    const sculpture = await sculptureRepository.createSculpture({
      id: 0,
      name,
      artist,
      year,
      description,
      imageUrl,
      dateAdded: new Date(),
    });
    // Send the sculpture as a response
    res.status(201).json(sculpture);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating sculpture" });
  }
};
