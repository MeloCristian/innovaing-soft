import { ProductController } from '../controllers/ProductController';
import express from 'express'

export const ProductRouter = express.Router();
ProductRouter.get('/', ProductController.findAll)
ProductRouter.get('/:id', ProductController.getByPk)
ProductRouter.post('/', ProductController.create)
ProductRouter.put('/:id', ProductController.update)
ProductRouter.delete('/:id', ProductController.delete)
