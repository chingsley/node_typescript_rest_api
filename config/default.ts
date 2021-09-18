import dotenv from 'dotenv';

dotenv.config()

export default {
  port: process.env.PORT,
  host: process.env.SERVER_HOST,
  dbUri: process.env.DB_URI,
  saltWorkFactor: process.env.SALTWORKFACTOR,
  privateKey: process.env.PRIVATE_KEY,
  accessTokenTtl: process.env.ACCESSTOKEN_TTL,
  refreshTokenTtl: process.env.REFRESHTOKEN_TTL,
}