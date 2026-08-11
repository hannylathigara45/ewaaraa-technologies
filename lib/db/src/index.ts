import path from "path";

try {
  process.loadEnvFile(path.resolve(import.meta.dirname, "../../../.env"));
} catch (e) {
  // Ignore if .env is not present (e.g. in some production environments)
}

import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

// Construct DATABASE_URL if it is not set but individual credentials are provided
if (!process.env.DATABASE_URL && process.env.DB_HOST) {
  const user = process.env.DB_USER || "";
  const pass = process.env.DB_PASS || "";
  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT || "3306";
  const name = process.env.DB_NAME || "";

  const encodedUser = encodeURIComponent(user);
  const encodedPass = encodeURIComponent(pass);

  process.env.DATABASE_URL = `mysql://${encodedUser}:${encodedPass}@${host}:${port}/${name}`;
}

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

export const pool = mysql.createPool({ uri: process.env.DATABASE_URL });
export const db = drizzle(pool, { schema, mode: "default" });

export * from "./schema";
