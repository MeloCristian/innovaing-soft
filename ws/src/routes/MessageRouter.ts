
import express from 'express'
import { MessageController } from '../controllers/MessageControler';

export const MesssageRouter = express.Router();
MesssageRouter.post('/send', [] ,MessageController.sendMessage)
