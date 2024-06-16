import * as dotenv from "dotenv";
dotenv.config();

export default () => ({
    host: process.env.HOST_LOCAL,
    port: parseInt(process.env.PORT, 10) || 8080,
    database: {
        mongo_url: process.env.MONGO_URL,
    },
});