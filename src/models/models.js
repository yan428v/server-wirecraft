const sequelize = require('../../db');
const { DataTypes } = require('sequelize')

const Products = sequelize.define("product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name : { type: DataTypes.STRING, allowNull: true},
    material : {type: DataTypes.STRING, allowNull: true},
    price : {type: DataTypes.DOUBLE},
    description: { type: DataTypes.TEXT, allowNull: true },// Детальное описание изделия, где можно указать особенности,
    // технику изготовления и прочую информацию, которая поможет покупателю узнать больше о продукте.
    dimensions: { type: DataTypes.STRING, allowNull: true },// Размеры изделия (длина, ширина, высота), что особенно важно для физических товаров,
    // чтобы покупатель мог представить, как оно будет выглядеть в реальности.
    weight: { type: DataTypes.STRING, allowNull: true },
    color: { type: DataTypes.STRING, allowNull: true },
    stock: { type: DataTypes.INTEGER, allowNull: true },//Количество доступных единиц товара на складе, чтобы покупатели знали о наличии товара.
    // Возможно просто есть в наличии или нет.
    category: { type: DataTypes.STRING, allowNull: true },// Серёжки, скульптуры, механизмы, хз чё ещё.

//
})

const Users = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, allowNull: false, unique: true }, // Уникальное имя пользователя
    email: { type: DataTypes.STRING, allowNull: false, unique: true }, // Электронная почта пользователя
    password: { type: DataTypes.STRING, allowNull: false }, // Пароль пользователя
    firstName: { type: DataTypes.STRING, allowNull: true }, // Имя пользователя
    lastName: { type: DataTypes.STRING, allowNull: true }, // Фамилия пользователя
    profilePicture: { type: DataTypes.STRING, allowNull: true }, // Ссылка на изображение профиля
    bio: { type: DataTypes.TEXT, allowNull: true }, // Краткая биография или информация о пользователе, "о себе".
    rating: { type: DataTypes.INTEGER, defaultValue: 0 }, // Рейтинг пользователя на сайте
    purchasedProducts: { type: DataTypes.TEXT, allowNull: true }, // Список купленных товаров (может быть JSON строкой)
    completedCourses: { type: DataTypes.TEXT, allowNull: true }, // Список пройденных курсов (может быть JSON строкой)
 // Дата последнего обновления аккаунта
});

const ProductImages = sequelize.define("productImage", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    productId: { type: DataTypes.INTEGER, allowNull: false },
    imageUrl: { type: DataTypes.STRING, allowNull: false }, // Ссылка на изображение
    description: { type: DataTypes.TEXT, allowNull: true }, // Описание изображения
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

// Связь Products и ProductImages
Products.hasMany(ProductImages, { foreignKey: 'productId' });
ProductImages.belongsTo(Products, { foreignKey: 'productId' });

module.exports = { Products, Users, ProductImages }
