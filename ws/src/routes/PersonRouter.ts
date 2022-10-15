import { PersonController } from '../controllers/PersonController';
import express from 'express'

export const PersonRouter = express.Router();
PersonRouter.get('/', PersonController.findAll)
PersonRouter.get('/:id', PersonController.getByPk)
PersonRouter.post('/', PersonController.create)
PersonRouter.put('/:id', PersonController.update)
PersonRouter.delete('/:id', PersonController.delete)
