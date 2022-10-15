import { Person } from "../models/Person";

export const PersonController = {

    getByPk(req: any, res: any, next: any): Person | any {
        const { id } = req.params;
        return Person.findByPk(id).then(person => {
            if (!person) {
                return res.status(400).send({
                    message: "Person Not Found"
                })
            }
            return res.json(person)
        }).catch(err => {
            res.status(400).json(err)
        });
    },

    findAll(req: any, res: any, next: any): Person | any {
        return Person.findAll().then(persons => {
            if (!persons) {
                return res.status(400).send({
                    message: "Persons Not Found"
                })
            }
            return res.json(persons)
        }).catch(err => {
            res.status(400).json(err)
        });
    },

    create(req: any, res: any, next: any): Person | any {
        const person: Person = req.body;
        return Person.create(person).then(person => {
            return res.status(201).json(person)
        }).catch(err => {
            return res.status(400).json(err)
        })
    },

    update(req: any, res: any, next: any): Person | any {
        const { id } = req.params
        return Person.findByPk(id).then(person => {
            if (!person) {
                return res.status(404).send({
                    message: 'Person Not Found',
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
        return Person.findByPk(id).then(person => {
            if (!person) {
                return res.status(404).send({
                    message: 'Person Not Found',
                });
            }
            return person.destroy()
                .then(() => res.status(204).send())
                .catch((err) => res.status(400).json(err));
        })
    }

}