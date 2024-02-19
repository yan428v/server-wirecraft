require("dotenv").config()
const express = require("express");
const sequelize = require('../db');
const { getApiStatus } = require('./controllers/apiController'); // Убедитесь, что путь указан правильно
const ProductController = require('./controllers/apiController')
const { Router } = require("express");



const app = express();
const PORT = process.env.PORT || 51000;

// Middleware для парсинга JSON
app.use(express.json());


// CRUD операции для товаров
app.post('/api/products', ProductController.createProduct); // Создание товара
app.get('/api/products/:id', ProductController.getProduct); // Получение товара по ID
app.delete('/api/products/:id', ProductController.deleteProduct); // Удаление товара по ID
app.put('/api/products/:id', ProductController.updateProduct); // Обновление товара по ID
app.get('/api/products', ProductController.getAllProducts); // Получение всех товаров

let routrre = new Router;

console.log( routrre);




// Endpoint для проверки статуса API
// app.get('/api', (req, res) => {
//     console.log("")
//     res.status(200).json({message: 'API работает!'})
// });

const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
















