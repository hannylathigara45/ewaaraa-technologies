import path from "path";

try {
  process.loadEnvFile(path.resolve(__dirname, "../../.env"));
} catch (e) {
  // Ignore
}

import { defineConfig } from "drizzle-kit";

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
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

export default defineConfig({
  schema: path.join(__dirname, "./src/schema/index.ts"),
  dialect: "mysql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
