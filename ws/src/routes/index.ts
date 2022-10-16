import { JambonzRouter } from './JambonzRouter';
import { ProductRouter } from './ProductRouter';
import express from 'express'

import { AuthRouter } from './AuthRouter'
import { UserRouter } from './UserRouter';
import { InvoiceRouter } from './InvoiceRouter';
import { RoleRouter } from './RoleRouter';
import { PersonRouter } from './PersonRouter';
import { MesssageRouter } from './MessageRouter';

export const api = express.Router()

api.use('/auth', AuthRouter);
api.use("/product", ProductRouter);
api.use("/role", RoleRouter);
api.use('/user', UserRouter);
api.use('/person', PersonRouter);
api.use('/invoice', InvoiceRouter);
api.use('/message', MesssageRouter);
