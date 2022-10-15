import { User } from "../models/User";
import bcrypt from "bcrypt"

export const UsuarioController = {

    getByPk(req: any, res: any, next: any): User | any {
        const { id } = req.params;
        return User.findByPk(id).then(user => {
            if (!user) {
                return res.status(400).send({
                    message: "User Not Found"
                })
            }
            return res.json(user)
        }).catch(err => {
            res.status(400).json(err)
        });
    },

    findAll(req: any, res: any, next: any): User | any {
        return User.findAll().then(users => {
            if (!users) {
                return res.status(400).send({
                    message: "Users Not Found"
                })
            }
            return res.json(users)
        }).catch(err => {
            res.status(400).json(err)
        });
    },

    create(req: any, res: any, next: any): User | any {
        const user: User = {
            ...req.body
        }
        user.password = bcrypt.hashSync(user.password, 5)
        return User.create(user).then(user => {
            return res.status(201).json(user)
        }).catch(err => {
            return res.status(400).json(err)
        })
    },

    update(req: any, res: any, next: any): User | any {
        const { id } = req.params
        const password: any = req.body.password
        return User.findByPk(id).then(user => {
            if (!user) {
                return res.status(404).send({
                    message: 'User Not Found',
                });
            }
            if (password) {
                req.body.password = bcrypt.hashSync(password, 5)
            }
            user.set(req.body)
            return user.save()
                .then(() => res.json(user))
                .catch((err) => res.status(400).json(err));
        }).catch(err => {
            res.status(400).json(err)
        })
    },

    delete(req: any, res: any, next: any): any {
        const { id } = req.params;
        return User.findByPk(id).then(user => {
            if (!user) {
                return res.status(404).send({
                    message: 'User Not Found',
                });
            }
            return user.destroy()
                .then(() => res.status(204).send())
                .catch((err) => res.status(400).json(err));
        })
    }

}