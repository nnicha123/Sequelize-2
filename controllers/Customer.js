const db = require('../models');
const { sequelize, Sequelize } = require('../models');
const Op = Sequelize.Op

const getCustomers = async (req, res) => {
    const allCustomers = await db.Customer.findAll()
    res.status(200).send(allCustomers)
}
const createCustomer = async (req, res) => {
    const { name, age } = req.body
    const newCustomer = await db.Customer.create({
        name:name,
        age:age
    })
    res.status(201).send(newCustomer)
}

module.exports = {
    getCustomers,createCustomer
}   