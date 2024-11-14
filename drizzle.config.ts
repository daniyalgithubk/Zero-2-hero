import dotenv from 'dotenv';
dotenv.config();

export default {
  dialect: 'postgresql',
  schema: './utils/db/schema.ts', // Adjust path if necessary
  out: './drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgresql://neondb_owner:Z1DvPN0ywFtX@ep-royal-pond-a5ohbk8o.us-east-2.aws.neon.tech/zerotohero?sslmode=require",
  },
};  
