import { Sculpture } from "../models/sculpture";
import pool from "../util/db";

// Get all sculptures from DB
export const getAllSculptures = async (): Promise<Sculpture[]> => {
  // Query the DB for all sculptures
  const result = await pool.query("SELECT * FROM sculptures");
  return result.rows;
};

// Insert new sculpture into DB
export const createSculpture = async (sculpture: Sculpture): Promise<Sculpture> => {
  // Destructure the sculpture object
  const { name, artist, year, description, imageUrl } = sculpture;
  // Insert the sculpture into the DB
  const result = await pool.query(
    "INSERT INTO sculptures (name, artist, year, description, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, artist, year, description, imageUrl]
  );
  return result.rows[0];
};
