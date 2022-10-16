import './env'
import { isProduction } from './env';
import path from 'path'
import crypto from 'crypto'
import express from 'express'
import cors from 'cors'
import { api } from './src/routes'
import { sequelize } from './src/sequelize'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

const app = express()
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors())
app.use(cookieParser(crypto.randomBytes(16).toString('hex')))
app.use('/api', api)
app.use(express.static(path.resolve('public/')))
const port = process.env.PORT || 4500
if (!isProduction) {
    // sequelize.sync({ force: true }).then(() => {
    sequelize.sync().then(() => {
        app.listen(port, () => console.log(`Server started on port ${port}`))
    })
}