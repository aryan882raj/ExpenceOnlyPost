
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('expe', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    exp: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dis: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cat: {
      type: Sequelize.STRING,
      allowNull: false,
    }  
});
module.exports = Product;