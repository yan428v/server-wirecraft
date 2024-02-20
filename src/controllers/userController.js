const {Users} = require('../models/models');

class UserController {
    async createUser(req, res) {
        try {
            const user = await Users.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async getUser(req, res) {
        try {
            const user = await Users.findByPk(req.params.id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({message: 'Пользователь не найден'});
            }
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async updateUser(req, res) {
        try {
            const updated = await Users.update(req.body, {
                where: {id: req.params.id}
            });
            if (updated) {
                const updatedUser = await Users.findByPk(req.params.id);
                res.json(updatedUser);
            } else {
                res.status(404).json({message: 'Пользователь не найден'});
            }
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async deleteUser(req, res) {
        try {
            const deleted = await Users.destroy({
                where: {id: req.params.id}
            });
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({message: 'Пользователь не найден'});
            }
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await Users.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

module.exports = new UserController();