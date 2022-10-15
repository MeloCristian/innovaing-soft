import { AuthController } from '../controllers/AuthController';
import express from 'express'

export const AuthRouter = express.Router();

AuthRouter.post('/sig-in', async (req, res) => {
    const { email, password } = req.body;
    try {
        let resp = await AuthController.sigIn({ email, password });
        if (resp != null) {
            res.json(
                resp
            )
        } else {
            res.status(401).send()
        }
    } catch (error) {
        res.status(401).json(error)
    }
})

AuthRouter.get('/verify-session', AuthController.verifySession)