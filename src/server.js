require("dotenv").config()
const express = require("express");
const sequelize = require('../db');
const { getApiStatus } = require('./controllers/productController'); // Убедитесь, что путь указан правильно
const ProductController = require('./controllers/productController')
const UserController = require('./controllers/userController')
const { Router } = require("express");
const router = require("./routes/index")
const app = express();

const PORT = process.env.PORT || 51000;

// Middleware для парсинга JSON
app.use(express.json());



app.use('/', router);






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
















