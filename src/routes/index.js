const Router = require('express');
const ProductController = require("../controllers/productController");
const UserController = require("../controllers/userController");
const router = new Router();

// Product routes
router.post('/products', ProductController.createProduct); // Создание товара
router.get('/product/:id', ProductController.getProduct); // Получение товара по ID
router.delete('/product/:id', ProductController.deleteProduct); // Удаление товара по ID
router.put('/product/:id', ProductController.updateProduct); // Обновление товара по ID
router.get('/products', ProductController.getAllProducts); // Получение всех товаров

//User routes
router.post('/users', UserController.createUser); // Создание юзера
router.get('/user/:id', UserController.getUser); // Получение юзера по ID
router.delete('/user/:id', UserController.deleteUser); // Удаление юзера по ID
router.put('/user/:id', UserController.updateUser); // Обновление юзера по ID
router.get('/users', UserController.getAllUsers); // Получение всех юзеров









module.exports = router;
