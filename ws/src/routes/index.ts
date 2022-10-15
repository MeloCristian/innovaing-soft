import { ProductRouter } from './ProductRouter';
import express from 'express'

import { AuthRouter } from './AuthRouter'
import { UserRouter } from './UserRouter';
import { InvoiceRouter } from './InvoiceRouter';

export const api = express.Router()

api.use('/auth', AuthRouter);
api.use("/product", ProductRouter);
api.use('/user', UserRouter);
api.use('/product', ProductRouter);
api.use('/invoice', InvoiceRouter);