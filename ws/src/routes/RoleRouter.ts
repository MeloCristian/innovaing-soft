import { RoleController } from '../controllers/RoleController';
import express from 'express'

export const RoleRouter = express.Router();
RoleRouter.get('/', RoleController.findAll)
RoleRouter.get('/:id', RoleController.getByPk)
RoleRouter.post('/', RoleController.create)
RoleRouter.put('/:id', RoleController.update)
RoleRouter.delete('/:id', RoleController.delete)
