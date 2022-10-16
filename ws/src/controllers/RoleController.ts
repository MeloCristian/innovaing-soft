import { Role } from "../models/Role";

export const RoleController = {

    getByPk(req: any, res: any, next: any): Role | any {
        const { id } = req.params;
        return Role.findByPk(id).then(person => {
            if (!person) {
                return res.status(400).send({
                    message: "Role Not Found"
                })
            }
            return res.json(person)
        }).catch(err => {
            res.status(400).json(err)
        });
    },

    findAll(req: any, res: any, next: any): Role | any {
        return Role.findAll().then(persons => {
            if (!persons) {
                return res.status(400).send({
                    message: "Roles Not Found"
                })
            }
            return res.json(persons)
        }).catch(err => {
            res.status(400).json(err)
        });
    },

    create(req: any, res: any, next: any): Role | any {
        const person: Role = req.body;
        return Role.create(person).then(person => {
            return res.status(201).json(person)
        }).catch(err => {
            return res.status(400).json(err)
        })
    },

    update(req: any, res: any, next: any): Role | any {
        const { id } = req.params
        return Role.findByPk(id).then(person => {
            if (!person) {
                return res.status(404).send({
                    message: 'Role Not Found',
                });
            }
            person.set(req.body)
            return person.save()
                .then(() => res.json(person))
                .catch((err) => res.status(400).json(err));
        }).catch(err => {
            res.status(400).json(err)
        })
    },

    delete(req: any, res: any, next: any): any {
        const { id } = req.params;
        return Role.findByPk(id).then(person => {
            if (!person) {
                return res.status(404).send({
                    message: 'Role Not Found',
                });
            }
            return person.destroy()
                .then(() => res.status(204).send())
                .catch((err) => res.status(400).json(err));
        })
    }

}