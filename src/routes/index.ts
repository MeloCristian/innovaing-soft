import express from 'express'

import { AuthRouter } from './AuthRouter'

export const api = express.Router()

api.use('/auth', AuthRouter)
