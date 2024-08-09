const { DataTypes, HasMany } = require('sequelize'); //const { DataTypes, HasMany } = require('sequelize');
const db = require('../db/conn');
const Tutor = require('./Tutor');

const Pet = db.define('Pet', {
    name: {
        type: DataTypes.STRING,
        required: true
    },
    species: {
        type: DataTypes.STRING,
        required: true
    },
    carry: {
        type: DataTypes.STRING,
        required: true
    },
    weight: {
        type: DataTypes.INTEGER,
        required: true
    },
    date_of_birth: {
        type: DataTypes.DATE,
        required: true
    }
})




module.exports = Pet
