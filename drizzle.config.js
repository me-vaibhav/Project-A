import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema:"./configs/schema.js",
  output:"./app",
  dialect: "postgresql",
  dbCredentials: {
    url :"postgresql:vkjdb_owner:J3fDmHcMa5Kj@ep-wild-thunder-a5vd1oow-pooler.us-east-2.aws.neon.tech/vkjdb?sslmode=require",
    ssl: { rejectUnauthorized: false },
  },
  
})