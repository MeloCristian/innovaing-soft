import { InvoiceController } from '../controllers/InvoiceController';
import express from 'express'

export const InvoiceRouter = express.Router();
InvoiceRouter.get('/', InvoiceController.findAll)
InvoiceRouter.get('/:id', InvoiceController.getByPk)
InvoiceRouter.post('/', InvoiceController.create)
InvoiceRouter.put('/:id', InvoiceController.update)
InvoiceRouter.delete('/:id', InvoiceController.delete)
