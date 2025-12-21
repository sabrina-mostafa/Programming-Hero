import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
   appName: process.env.APP_NAME,
   port: process.env.PORT
}

export default config;