// models/Job.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const Company = require('./company.js');

const Job = sequelize.define('Job', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    location: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    salary: { type: DataTypes.STRING },
    benefits: { type: DataTypes.STRING },
    reference: { type: DataTypes.STRING },
    company_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Company,
            key: 'id',
        },
    },
}, {
    timestamps: true,
});

module.exports = Job;
