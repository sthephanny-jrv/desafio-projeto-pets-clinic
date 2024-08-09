const { DataTypes} = require('sequelize');
const db = require('../db/conn');
const Pet = require('../models/Pet');

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

Tutor.hasMany(Pet, {foreignKey: 'tutorId'})
Pet.belongsTo(Tutor, {foreignKey: 'tutorId'})

module.exports = Tutor

