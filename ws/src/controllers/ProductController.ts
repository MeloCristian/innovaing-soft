import { Product } from "../models/Product";

export const ProductController = {

    getByPk(req: any, res: any, next: any): Product | any {
        const { id } = req.params;
        return Product.findByPk(id).then(person => {
            if (!person) {
                return res.status(400).send({
                    message: "Product Not Found"
                })
            }
            return res.json(person)
        }).catch(err => {
            res.status(400).json(err)
        });
    },

    findAll(req: any, res: any, next: any): Product | any {
        return Product.findAll().then(persons => {
            if (!persons) {
                return res.status(400).send({
                    message: "Products Not Found"
                })
            }
            return res.json(persons)
        }).catch(err => {
            res.status(400).json(err)
        });
    },

    create(req: any, res: any, next: any): Product | any {
        const person: Product = req.body;
        return Product.create(person).then(person => {
            return res.status(201).json(person)
        }).catch(err => {
            return res.status(400).json(err)
        })
    },

    update(req: any, res: any, next: any): Product | any {
        const { id } = req.params
        return Product.findByPk(id).then(person => {
            if (!person) {
                return res.status(404).send({
                    message: 'Product Not Found',
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
        return Product.findByPk(id).then(person => {
            if (!person) {
                return res.status(404).send({
                    message: 'Product Not Found',
                });
            }
            return person.destroy()
                .then(() => res.status(204).send())
                .catch((err) => res.status(400).json(err));
        })
    }

}