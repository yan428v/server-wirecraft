const { Products } = require('../models/models');

class ProductController {
    static async createProduct(req, res) {
        try {
            const product = await Products.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getProduct(req, res) {
        try {
            const product = await Products.findByPk(req.params.id);
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const result = await Products.destroy({
                where: { id: req.params.id }
            });
            if (result > 0) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateProduct(req, res) {
        try {
            const [updated] = await Products.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated) {
                const updatedProduct = await Products.findByPk(req.params.id);
                res.status(200).json(updatedProduct);
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getAllProducts(req, res) {
        try {
            const products = await Products.findAll();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}



module.exports = ProductController;

