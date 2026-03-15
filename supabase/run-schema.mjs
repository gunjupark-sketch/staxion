import pg from "pg";
import { readFileSync } from "fs";

const sql = readFileSync(new URL("./schema.sql", import.meta.url), "utf-8");

const client = new pg.Client({
  host: "db.vrqlnjliqgqpsmkzklsf.supabase.co",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "icYk0nVF4D58O2wx",
  ssl: { rejectUnauthorized: false },
});

try {
  await client.connect();
  console.log("Connected to Supabase DB");
  await client.query(sql);
  console.log("Schema created successfully!");
} catch (err) {
  console.error("Error:", err.message);
} finally {
  await client.end();
}
