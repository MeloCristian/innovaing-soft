import { Invoice } from "../models/Invoice";

export const InvoiceController = {

    getByPk(req: any, res: any, next: any): Invoice | any {
        const { id } = req.params;
        return Invoice.findByPk(id).then(person => {
            if (!person) {
                return res.status(400).send({
                    message: "Invoice Not Found"
                })
            }
            return res.json(person)
        }).catch(err => {
            res.status(400).json(err)
        });
    },

    findAll(req: any, res: any, next: any): Invoice | any {
        return Invoice.findAll().then(persons => {
            if (!persons) {
                return res.status(400).send({
                    message: "Invoices Not Found"
                })
            }
            return res.json(persons)
        }).catch(err => {
            res.status(400).json(err)
        });
    },

    create(req: any, res: any, next: any): Invoice | any {
        const person: Invoice = req.body;
        return Invoice.create(person).then(person => {
            return res.status(201).json(person)
        }).catch(err => {
            return res.status(400).json(err)
        })
    },

    update(req: any, res: any, next: any): Invoice | any {
        const { id } = req.params
        return Invoice.findByPk(id).then(person => {
            if (!person) {
                return res.status(404).send({
                    message: 'Invoice Not Found',
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
        return Invoice.findByPk(id).then(person => {
            if (!person) {
                return res.status(404).send({
                    message: 'Invoice Not Found',
                });
            }
            return person.destroy()
                .then(() => res.status(204).send())
                .catch((err) => res.status(400).json(err));
        })
    }

}