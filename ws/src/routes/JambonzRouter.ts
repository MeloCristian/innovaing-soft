import { JambonzController } from '../controllers/JambonzController';
import express from 'express'

export const JambonzRouter = express.Router();
JambonzRouter.post('/', JambonzController.customOperation)
/* JambonzRouter.get('/:id', JambonzController.getByPk)
JambonzRouter.post('/', JambonzController.create)
JambonzRouter.put('/:id', JambonzController.update)
JambonzRouter.delete('/:id', JambonzController.delete) */
