const sequelize = require('../../db');
const { DataTypes } = require('sequelize')

const Products = sequelize.define("product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name : { type: DataTypes.STRING, allowNull: true},
    material : {type: DataTypes.STRING, allowNull: true},
    price : {type: DataTypes.DOUBLE}
})

module.exports = { Products }