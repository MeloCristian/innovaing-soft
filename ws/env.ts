import dotenv from 'dotenv'
dotenv.config()

export const isProduction = process.env.NODE_ENV === 'production'