import { UsuarioController } from './../controllers/UserController';
import express from 'express'

export const UserRouter = express.Router();
UserRouter.get('/', UsuarioController.findAll)
UserRouter.get('/:id', UsuarioController.getByPk)
UserRouter.post('/', UsuarioController.create)
UserRouter.put('/:id', UsuarioController.update)
UserRouter.delete('/:id', UsuarioController.delete)
