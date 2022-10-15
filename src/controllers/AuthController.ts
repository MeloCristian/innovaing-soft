import { User } from './../models/User';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { Crypto } from "../lib/Crypto";
const crypto = new Crypto();
const AES_KEY = Buffer.from(process.env.AES_KEY!, "hex");
export const AuthController = {
    async sigIn(data: any): Promise<any> {
        let user: any = await User.findOne({
            where: {
                email: data.email,
            },
        });
        let datos = `${user.id},${user.email}`;
        try {
            if (user) {
                let pasa = bcrypt.compareSync(data.password, user.password);
                if (pasa) {
                    let user = crypto.aesEncrypt(datos, AES_KEY);
                    if (user === null) {
                        return null;
                    }
                    const token = jwt.sign(
                        { user, ok: true },
                        process.env.SEED_USER!,
                        { expiresIn: process.env.EXPIRED_USER }
                    );
                    return {
                        sigIn: true,
                        token,
                        id: user.id_user,
                    };
                }
            }
        } catch (error) {
            return null;
        }
    },

    async verificarToken(req: any, res: any, next: any) {
        try {
            const { authorization } = req.headers;
            if (!authorization) {
                return res.status(401).send();
            }
            let token = authorization.split(" ")[1];
            console.log(token);
            jwt.verify(token, process.env.SEED_USER!, (error: any, decoded: any) => {
                if (error) {
                    return res.status(401).send();
                }

                let user = decoded.user;
                user = crypto.aesDecrypt(user, AES_KEY, "utf8");
                user = {
                    id_user: user.split(",")[0],
                    email_us: user.split(",")[1],
                };
                req.body.user = user;
                next();
            });
        } catch (error) {
            return res.status(401).send();
        }
    },

    verifySession(req: any, res: any) {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).send()
        }
        let token = authorization.split(" ")[1];

        jwt.verify(token, process.env.SEED_USER!, (error: any, decoded: any) => {
            if (error) {
                return res.status(401).send();
            }
            const token = jwt.sign(
                {
                    user: decoded.user,
                    ok: true,
                },
                process.env.SEED_USER!,
                {
                    expiresIn: process.env.EXPIRED_USER,
                }
            );
            res.status(200).json({
                sigIn: true,
                token,
            });
        });
    }
}