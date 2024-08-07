const { DataTypes} = require('sequelize');
const db = require('../db/conn');

const Tutor = db.define('Tutor', {
    name: {
        type: DataTypes.STRING,
        required: true
    },
    phone: {
        type: DataTypes.INTEGER,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    date_of_birth: {
        type: DataTypes.DATE ,
        required: true
    },
    zip_code: {
        type: DataTypes.INTEGER,
        required: true
    }    
})

module.exports = Tutor