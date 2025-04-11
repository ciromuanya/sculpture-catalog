import { Pool } from "pg";

// Setup database connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sculpture_catalog",  // Your DB name
  password: process.env.DB_PASSWORD || "yourpassword",
  port: 5432,
});

export default pool;
