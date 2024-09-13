import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from './schema';

const sql = neon(
    "postgresql://neondb_owner:i8wEoQ5BRbCZ@ep-yellow-block-a1oakd3v.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
    
)

export const db = drizzle(sql, {schema});